import { TranslationDefinition } from 'translate-object-loader';

const appName = 'yadu';

export const sharedTranslations: TranslationDefinition = {
  de: {
    appName,
    login: {
      login: 'Login',
      username: 'Benutzername',
      password: 'Passwort',
      failed: 'Anmeldung fehlgeschlagen',
    },
  },
  en: {
    appName,
    login: {
      login: 'Login',
      username: 'Username',
      password: 'Password',
      failed: 'Login failed',
    },
  },
};
