import Lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

type User = {
  id: string;
  name: string;
  email: string;
}

type Schema = {
  users: User[];
}

let db: Lowdb.LowdbSync<Schema>;

export const createConnection = () => {
  const adapter = new FileSync<Schema>('db.json');
  db = Lowdb(adapter);
  db.defaults({ users: []}).write();
}

export const getConnection = () => db;
