import { insertDb, getDB, saveDB } from "./db.js";

export const newNote = async (notes, tags = []) => {
  const newNote = {
    tags,
    id: Date.now(),
    content: notes,
  };
  await insertDb(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await getDB();
  return notes;
};

export const getNoteById = async (id) => {
  const notes = await getDB();
  return notes.find((note) => note.id === id);
};

export const findNotes = async (filter) => {
  const { notes } = await getDB();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  );
};

export const removeNote = async (id) => {
  const { notes } = await getDB();
  const match = notes.find((note) => note.id === id);
  if (!match) {
    return -1;
  }
  const newNotes = notes.filter((note) => note.id !== id);
  await saveDB({ notes: newNotes });
  return id;
};

export const removeAllNotes = () => saveDB({ notes: [] });
