import React from 'react'
import { createContext, useState } from 'react'
export const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
    }

    const editNote = (id, updatedNote) => {
        setNotes(prevNotes => {
            return prevNotes.map(note => {
              if (note.id === id) {
                return { ...note, ...updatedNote };
              }
              return note;
            });
        });
    }

    const deleteNote = (id) => {
        const updatedNotes =  notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    }

    return (
        <NoteContext.Provider value={{notes, addNote, editNote, deleteNote}}>
            <div>{children}</div>
        </NoteContext.Provider>
    )
}


