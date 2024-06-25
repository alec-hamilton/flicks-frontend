interface Role {
  id: number;
  role_name: string;
}

interface Person {
  id: number;
  surname: string;
  forename: string;
}

interface Entry {
  roles: Role | null;
  people: Person | null;
}

interface PersonWithId {
  id: number;
  name: string;
}

export const getDirectors = (entries: Entry[]): PersonWithId[] =>
  entries
    .filter((entry) => entry.roles && entry.roles.id === 1 && entry.people)
    .map((entry) => ({
      id: entry.people!.id,
      name: `${entry.people!.forename.trim()} ${entry.people!.surname.trim()}`,
    }));

export const getNonDirectors = (entries: Entry[]): PersonWithId[] =>
  entries
    .filter((entry) => entry.roles && entry.roles.id > 1 && entry.people)
    .map((entry) => ({
      id: entry.people!.id,
      name: `${entry.people!.forename.trim()} ${entry.people!.surname.trim()}`,
    }));
