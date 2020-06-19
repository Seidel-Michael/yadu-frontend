import { TranslationDefinition } from 'translate-object-loader';

export const adminTranslations: TranslationDefinition = {
  de: {
    admin: {
      admin: 'Administration',
      general: 'Allgemein',
      userManagement: 'Benutzerverwaltung',
      user: {
        username: 'Benutzername',
        groups: 'Gruppen',
        userDetailHeadingEdit: 'Benutzer "{{user}}" bearbeiten',
        addUser: 'Benutzer hinzufügen',
        password: 'Passwort',
        confirmPassword: 'Passwort bestätigen',
        passwordHint: 'Leer lassen wenn das Passwort nicht geändert werden soll',
        passwordInvalid: 'Passwörter stimmen nicht überein',
        groupsHint: '"Eingabe" drücken oder Komma eingeben um Gruppe hinzuzufügen',
      },
    },
  },
  en: {
    admin: {
      admin: 'Administration',
      general: 'General',
      userManagement: 'User Management',
      user: {
        username: 'Username',
        groups: 'Groups',
        userDetailHeadingEdit: 'Edit user "{{user}}"',
        addUser: 'Add user',
        password: 'Password',
        confirmPassword: 'Confirm password',
        passwordHint: 'Leave empty if password should not be changed',
        passwordInvalid: 'Password do not match',
        groupsHint: 'Press "return" or enter a comma to add group',
      },
    },
  },
};
