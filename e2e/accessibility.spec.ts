import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Acessibilidade estrutural', () => {
  test('declara o idioma da página', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'pt-PT');
  });

  test('tem os landmarks esperados', async ({ page }) => {
    await expect(page.getByRole('banner')).toHaveCount(1);
    await expect(page.getByRole('main')).toHaveCount(1);
    await expect(page.getByRole('contentinfo')).toHaveCount(1);
    await expect(page.getByRole('navigation', { name: 'Navegação principal' })).toHaveCount(1);
  });

  test('tem exactamente um h1', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  });

  test('não salta níveis de cabeçalho', async ({ page }) => {
    const levels = await page
      .locator('h1, h2, h3, h4, h5, h6')
      .evaluateAll((nodes) =>
        nodes
          .filter((node) => !node.closest('[aria-hidden="true"]'))
          .map((node) => Number(node.tagName.slice(1))),
      );

    expect(levels.length).toBeGreaterThan(0);
    expect(levels[0]).toBe(1);

    for (let i = 1; i < levels.length; i += 1) {
      expect(levels[i] - levels[i - 1]).toBeLessThanOrEqual(1);
    }
  });

  test('todas as imagens têm texto alternativo', async ({ page }) => {
    const missing = await page
      .locator('img')
      .evaluateAll((nodes) =>
        nodes
          .filter((node) => !(node as HTMLImageElement).alt.trim())
          .map((node) => (node as HTMLImageElement).currentSrc),
      );

    expect(missing).toEqual([]);
  });

  test('os controlos sem texto têm nome acessível', async ({ page }) => {
    const unnamed = await page.locator('button').evaluateAll((nodes) =>
      nodes
        .filter((node) => {
          const label = node.getAttribute('aria-label')?.trim();
          return !label && !node.textContent?.trim();
        })
        .map((node) => node.outerHTML.slice(0, 120)),
    );

    expect(unnamed).toEqual([]);
  });

  test('todos os links externos usam rel=noopener', async ({ page }) => {
    const unsafe = await page
      .locator('a[target="_blank"]')
      .evaluateAll((nodes) =>
        nodes
          .filter((node) => !(node.getAttribute('rel') ?? '').includes('noopener'))
          .map((node) => node.getAttribute('href')),
      );

    expect(unsafe).toEqual([]);
  });

  test('o foco do teclado chega aos links do hero', async ({ page }) => {
    test.skip(Boolean(test.info().project.use.isMobile), 'Navegação por teclado é de desktop');

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(focused).toBe('A');
  });
});
