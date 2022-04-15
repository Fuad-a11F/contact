export interface User {
  data: Data;
}

export interface UserState {
  user: Data | null;
}

export interface ArrayUser {
  data: Data[];
}

export interface Data {
  login: string;
  password: string;
  id: number;
  contact: Contact[];
}

interface Contact {
  id: number;
  number: number;
  name: string;
  lastname: string;
}

export interface PayloadData {
  login: string;
  password: string;
  id: number;
  contact: Contact[];
}
