import { expect, test } from '@playwright/test';

import { NAV_ITEMS, WHATSAPP_URL } from './fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Navegação — desktop', () => {
  test.skip(({ isMobile }) => Boolean(isMobile), 'Só se aplica ao menu desktop');

  test('mostra todos os links e o CTA sem precisar de abrir menu', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Navegação principal' });

    for (const item of NAV_ITEMS) {
      await expect(nav.getByRole('link', { name: item.label, exact: true })).toBeVisible();
    }

    await expect(nav.getByRole('link', { name: 'Marcar consulta' })).toHaveAttribute(
      'href',
      WHATSAPP_URL,
    );
  });

  test('cada link leva à respectiva secção', async ({ page }) => {
    const nav = page.getByRole('navigation', { name: 'Navegação principal' });

    for (const item of NAV_ITEMS) {
      await nav.getByRole('link', { name: item.label, exact: true }).click();
      await expect(page).toHaveURL(new RegExp(`#${item.id}$`));
      await expect(page.locator(`#${item.id}`)).toBeInViewport();
    }
  });

  test('o logótipo volta ao topo', async ({ page }) => {
    await page.locator('#contactos').scrollIntoViewIfNeeded();
    await page.getByRole('navigation').getByRole('link').first().click();

    await expect(page.locator('#top')).toBeInViewport();
  });
});

test.describe('Navegação — mobile', () => {
  test.skip(({ isMobile }) => !isMobile, 'Só se aplica ao menu mobile');

  test('o menu começa fechado e os links não são alcançáveis', async ({ page }) => {
    const toggle = page.getByRole('button', { name: 'Abrir menu' });
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await expect(toggle).toHaveAttribute('aria-controls', 'nav-links');

    await expect(page.locator('#nav-links').getByRole('link', { name: 'Sobre' })).toBeHidden();
  });

  test('abre, revela os links e fecha ao escolher um', async ({ page }) => {
    await page.getByRole('button', { name: 'Abrir menu' }).click();

    const closeButton = page.getByRole('button', { name: 'Fechar menu' });
    await expect(closeButton).toHaveAttribute('aria-expanded', 'true');

    const menu = page.locator('#nav-links');
    for (const item of NAV_ITEMS) {
      await expect(menu.getByRole('link', { name: item.label, exact: true })).toBeVisible();
    }

    await menu.getByRole('link', { name: 'Serviços', exact: true }).click();

    await expect(page.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    await expect(menu.getByRole('link', { name: 'Sobre' })).toBeHidden();
    await expect(page.locator('#servicos')).toBeInViewport();
  });

  test('o botão de fechar volta a esconder o menu', async ({ page }) => {
    await page.getByRole('button', { name: 'Abrir menu' }).click();
    await page.getByRole('button', { name: 'Fechar menu' }).click();

    await expect(page.locator('#nav-links').getByRole('link', { name: 'Sobre' })).toBeHidden();
  });
});
