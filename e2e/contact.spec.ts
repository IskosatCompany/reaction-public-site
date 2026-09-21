import { expect, test } from '@playwright/test';

import { EMAIL_HREF, PHONE_HREF } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/#contactos');
});

test.describe('Contactos', () => {
  test('mostra morada, telefone e email accionáveis', async ({ page }) => {
    const section = page.locator('#contactos');

    await expect(
      section.getByRole('link', { name: /R\. Luís da Costa Almeida 6/ }),
    ).toHaveAttribute('href', /maps\.app\.goo\.gl/);
    await expect(section.getByRole('link', { name: '910 372 125' })).toHaveAttribute(
      'href',
      PHONE_HREF,
    );
    await expect(
      section.getByRole('link', { name: 'reaction.sergiosantos@gmail.com' }),
    ).toHaveAttribute('href', EMAIL_HREF);
  });

  test('as redes sociais abrem em separador novo e em segurança', async ({ page }) => {
    const socials = page.locator('#contactos').getByRole('link', {
      name: /Instagram|Facebook|Google Business/,
    });

    await expect(socials).toHaveCount(3);

    for (const link of await socials.all()) {
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noopener/);
    }
  });

  test('o mapa é incorporado com título acessível', async ({ page }) => {
    const map = page.locator('#contactos iframe');

    await expect(map).toHaveAttribute('title', 'Localização da Reaction em Coimbra');
    await expect(map).toHaveAttribute('src', /google\.com\/maps/);
    await expect(map).toHaveAttribute('loading', 'lazy');
  });
});
