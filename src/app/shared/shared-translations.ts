import { TranslationDefinition } from 'translate-object-loader';

const appName = 'yadu';

export const sharedTranslations: TranslationDefinition = {
  de: {
    appName,
    common: {
      save: 'Speichern',
      cancel: 'Abbrechen',
    },
    login: {
      login: 'Login',
      username: 'Benutzername',
      password: 'Passwort',
      failed: 'Benuztername oder Password ungültig.',
      usernameRequired: 'Benutzername benötigt',
      passwordRequired: 'Passwort benötigt',
    },
  },
  en: {
    appName,
    common: {
      save: 'Save',
      cancel: 'Cancel',
    },
    login: {
      login: 'Login',
      username: 'Username',
      password: 'Password',
      failed: 'Username or password invalid.',
      usernameRequired: 'Username is required',
      passwordRequired: 'Password is required',
    },
  },
};
