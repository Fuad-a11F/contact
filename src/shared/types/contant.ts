export interface Contact {
  name: string;
  lastname: string;
  number: string;
}

export interface ContactTypes {
  name: string;
  lastname: string;
  number: string;
  id: string;
  userId?: string;
  key?: number;
}

export interface ContactData {
  data: ContactTypes;
}

export interface ContactsData {
  data: ContactTypes[];
}
