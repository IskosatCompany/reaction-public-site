import { expect, test } from '@playwright/test';

import { GALLERY_IMAGE_COUNT, SERVICES, WHATSAPP_URL } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Página inicial', () => {
  test('tem o título e a meta description', async ({ page }) => {
    await expect(page).toHaveTitle('Reaction — Centro de Reabilitação e Performance | Coimbra');

    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /Centro de Reabilitação e Performance/);
  });

  test('o hero mostra a proposta de valor e os dois CTAs', async ({ page }) => {
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toHaveText('Da gestão da dor à optimização do desempenho.');

    await expect(page.getByText('Seja qual for o ponto de partida.')).toBeVisible();

    const heroCtas = page.locator('main section').first();
    await expect(heroCtas.getByRole('link', { name: 'Marcar consulta' })).toHaveAttribute(
      'href',
      WHATSAPP_URL,
    );
    await expect(heroCtas.getByRole('link', { name: 'Ver serviços' })).toHaveAttribute(
      'href',
      '#servicos',
    );
  });

  test('todas as secções estão presentes e pela ordem certa', async ({ page }) => {
    const ids = await page
      .locator('main section')
      .evaluateAll((sections) => sections.map((section) => section.id));

    expect(ids).toEqual([
      'top',
      'movimento',
      'sobre',
      'servicos',
      'equipa',
      'instalacoes',
      'contactos',
    ]);
  });

  test('lista os nove serviços', async ({ page }) => {
    const cards = page.locator('#servicos li');
    await expect(cards).toHaveCount(SERVICES.length);

    for (const service of SERVICES) {
      await expect(page.locator('#servicos').getByRole('heading', { name: service })).toBeVisible();
    }
  });

  test('numera os serviços de 01 a 09', async ({ page }) => {
    const numbers = await page
      .locator('#servicos li > div:first-child')
      .evaluateAll((nodes) => nodes.map((node) => node.textContent));

    expect(numbers).toEqual(['01', '02', '03', '04', '05', '06', '07', '08', '09']);
  });

  test('a galeria das instalações carrega todas as imagens', async ({ page }) => {
    const images = page.locator('#instalacoes img');
    await expect(images).toHaveCount(GALLERY_IMAGE_COUNT);

    // As imagens são lazy: só carregam depois da secção entrar no viewport.
    await page.locator('#instalacoes').scrollIntoViewIfNeeded();

    await expect(async () => {
      const loaded = await images.evaluateAll((nodes) =>
        nodes.every((node) => (node as HTMLImageElement).naturalWidth > 0),
      );
      expect(loaded).toBe(true);
    }).toPass();
  });

  test('o rodapé mostra o ano corrente e os links legais', async ({ page }) => {
    const footer = page.getByRole('contentinfo');
    await expect(footer).toContainText(`© ${new Date().getFullYear()} Reaction`);

    await expect(
      footer.getByRole('link', { name: 'Livro de Reclamações Eletrónico' }),
    ).toHaveAttribute('href', 'https://www.livroreclamacoes.pt/Inicio/');
  });

  test('não regista erros na consola', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    page.on('pageerror', (error) => errors.push(error.message));

    await page.goto('/');
    await page.locator('#contactos').scrollIntoViewIfNeeded();

    expect(errors).toEqual([]);
  });
});
