import fs from 'fs/promises'

const DB_PATH = new URL("./db.json", import.meta.url).pathname;

// type Db = {
//     notes: Note[]
// }

// type Note = {
//     tags: string[]
//     id: number
//     content: string
// }

export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, 'utf-8')
    // const parsedDB: Db = JSON.parse(db)
    const parsedDB = JSON.parse(db)
    return parsedDB
}

export const saveDB = async(db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return db
}

export const insertDb = async (note) => {
    const db = await getDB()
    db.notes.push(note)
    await saveDB(db)
    return note
}
