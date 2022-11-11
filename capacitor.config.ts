import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'school.nwparagliding.logbook',
  appName: 'Logbook',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 200,
      launchAutoHide: false,
      showSpinner: true,
    },
  },
};

export default config;
