import { CapacitorConfig } from '@capacitor/cli';

/**
 * Configurações básicas para o nome da página HTML.
 */
const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'carona',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
