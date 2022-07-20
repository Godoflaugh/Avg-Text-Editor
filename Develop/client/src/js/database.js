import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented')

  //create connection to database and version we wish to use
  const jateDB = await openDB('jate', 1)
  //create a new transaction and specify the database and data priviliges
  const tx = jateDB.transaction('jate', 'readwrite')
  //Opoen up the desired object store
  const store = tx.objectStore('jate')

  //Update method
  const request = store.put({ id: 1, value: content })

  //results
  const result = await request
  console.log('Data saved to database', result)

}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {

  console.error('getDb not implemented')

  // create connection to the database
  const jateDB = await openDB('jate', 1)
  //create a new transaction and specify the database and data privileges
  const tx = jateDB.transaction('jate', 'readonly')
  // Open up the desired object store
  const store = tx.objectStore('jate')

  //use the .getAll() to retrieve all the data in the database
  const request = store.getAll()
  //results
  const results = await request
  console.log('results.value' results)
  return results

}

initdb();
