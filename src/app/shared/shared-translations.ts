import { TranslationDefinition } from 'translate-object-loader';

const appName = 'yadu';

export const sharedTranslations: TranslationDefinition = {
  de: {
    appName,
    welcomeMessage: 'Willkommen, {{user}}!',
    language: 'Sprache',
    common: {
      save: 'Speichern',
      cancel: 'Abbrechen',
      logout: 'Abmelden',
      languages: {
        german: 'Deutsch',
        english: 'Englisch',
      },
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
    welcomeMessage: 'Welcome, {{user}}!',
    language: 'Language',
    common: {
      save: 'Save',
      cancel: 'Cancel',
      logout: 'Logout',
      languages: {
        german: 'German',
        english: 'English',
      },
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
