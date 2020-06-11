export interface User {
  userId: string;
  username: string;
  groups: string[];
  password?: string;
}
