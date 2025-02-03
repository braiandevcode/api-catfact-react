// playwright.config.js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000, // Tiempo máximo para cada prueba
  expect: {
    timeout: 5000 // Tiempo máximo para cada expectativa
  },
  reporter: 'html', // Reporte de resultados en formato HTML
  use: {
    actionTimeout: 0, // Tiempo de espera por acción (0 = sin límite)
    headless: true, // Ejecutar en modo sin cabeza (sin interfaz gráfica)
    viewport: { width: 1280, height: 720 }, // Tamaño de la ventana del navegador
    ignoreHTTPSErrors: true, // Ignorar errores de HTTPS
    video: 'on', // Grabar video de las pruebas que fallan
  },
  projects: [
    {
      name: 'chromium', // Proyecto para pruebas en Chromium
      use: { ...devices['Desktop Chrome'] }, // Configuración para navegador Chromium
    },
    {
      name: 'firefox', // Proyecto para pruebas en Firefox
      use: { ...devices['Desktop Firefox'] }, // Configuración para navegador Firefox
    },
    {
      name: 'webkit', // Proyecto para pruebas en WebKit
      use: { ...devices['Desktop Safari'] }, // Configuración para navegador WebKit
    },
  ],
});
