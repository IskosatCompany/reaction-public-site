import { expect, type Locator, type Page } from '@playwright/test';
import { test } from '@playwright/test';

import { POSITIONING_SLIDES, TEAM_MEMBERS } from './fixtures';

/** Slide actualmente visível: os restantes estão marcados com aria-hidden. */
function activeSlide(scope: Locator): Locator {
  return scope.locator('[aria-roledescription="slide"][aria-hidden="false"]');
}

function dots(scope: Locator): Locator {
  return scope.locator('button[aria-label^="Ir para o slide"]');
}

async function openSection(page: Page, id: string): Promise<Locator> {
  await page.goto(`/#${id}`);
  const section = page.locator(`#${id}`);
  await expect(section).toBeVisible();
  return section;
}

test.describe('Carrossel de posicionamento', () => {
  test('avança, recua e dá a volta', async ({ page }) => {
    const section = await openSection(page, 'movimento');

    await expect(activeSlide(section)).toContainText(POSITIONING_SLIDES[0]);
    await expect(dots(section)).toHaveCount(POSITIONING_SLIDES.length);

    await section.getByRole('button', { name: 'Slide seguinte' }).click();
    await expect(activeSlide(section)).toContainText(POSITIONING_SLIDES[1]);

    await section.getByRole('button', { name: 'Slide anterior' }).click();
    await expect(activeSlide(section)).toContainText(POSITIONING_SLIDES[0]);

    // Recuar no primeiro slide leva ao último.
    await section.getByRole('button', { name: 'Slide anterior' }).click();
    await expect(activeSlide(section)).toContainText(POSITIONING_SLIDES.at(-1)!);

    // E avançar no último volta ao primeiro.
    await section.getByRole('button', { name: 'Slide seguinte' }).click();
    await expect(activeSlide(section)).toContainText(POSITIONING_SLIDES[0]);
  });

  test('os indicadores saltam directamente para o slide', async ({ page }) => {
    const section = await openSection(page, 'movimento');

    await dots(section).nth(2).click();
    await expect(activeSlide(section)).toContainText(POSITIONING_SLIDES[2]);
    await expect(dots(section).nth(2)).toHaveAttribute('aria-current', 'true');
  });

  test('marca apenas um indicador como activo', async ({ page }) => {
    const section = await openSection(page, 'movimento');

    await dots(section).nth(1).click();
    await expect(section.locator('button[aria-current="true"]')).toHaveCount(1);
  });
});

test.describe('Carrossel da equipa', () => {
  test('percorre os oito membros', async ({ page }) => {
    const section = await openSection(page, 'equipa');

    await expect(dots(section)).toHaveCount(TEAM_MEMBERS.length);

    for (const [index, name] of TEAM_MEMBERS.entries()) {
      if (index > 0) {
        await section.getByRole('button', { name: 'Slide seguinte' }).click();
      }
      await expect(activeSlide(section).getByRole('heading', { name, exact: true })).toBeVisible();
    }

    // Uma última passagem fecha o ciclo.
    await section.getByRole('button', { name: 'Slide seguinte' }).click();
    await expect(
      activeSlide(section).getByRole('heading', { name: TEAM_MEMBERS[0], exact: true }),
    ).toBeVisible();
  });

  test('o cartão do fundador tem função e LinkedIn', async ({ page }) => {
    const section = await openSection(page, 'equipa');
    const slide = activeSlide(section);

    await expect(slide.getByRole('heading', { name: 'Sérgio Santos' })).toBeVisible();
    await expect(slide).toContainText('Fundador e Coordenador Clínico');

    const linkedIn = slide.getByRole('link', { name: 'LinkedIn de Sérgio Santos' });
    await expect(linkedIn).toHaveAttribute('href', /linkedin\.com/);
    await expect(linkedIn).toHaveAttribute('target', '_blank');
    await expect(linkedIn).toHaveAttribute('rel', /noopener/);
  });

  test('os slides inactivos ficam fora do alcance do teclado e das AT', async ({ page }) => {
    const section = await openSection(page, 'equipa');

    const inactive = section.locator('[aria-roledescription="slide"][aria-hidden="true"]');
    await expect(inactive).toHaveCount(TEAM_MEMBERS.length - 1);

    const allInert = await inactive.evaluateAll((nodes) =>
      nodes.every((node) => (node as HTMLElement).inert),
    );
    expect(allInert).toBe(true);
  });

  test('o retrato de cada membro carrega quando o slide fica activo', async ({ page }) => {
    const section = await openSection(page, 'equipa');
    await expect(section.locator('img')).toHaveCount(TEAM_MEMBERS.length);

    for (let index = 0; index < TEAM_MEMBERS.length; index += 1) {
      await dots(section).nth(index).click();

      const photo = activeSlide(section).locator('img');
      await expect(photo).toHaveAttribute('alt', /\S/);

      await expect(async () => {
        const naturalWidth = await photo.evaluate(
          (node) => (node as HTMLImageElement).naturalWidth,
        );
        expect(naturalWidth).toBeGreaterThan(0);
      }).toPass();
    }
  });
});
