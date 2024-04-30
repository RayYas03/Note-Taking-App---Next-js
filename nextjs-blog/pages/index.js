'use client'
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Note from './Note';
import React, { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';

export default function Home() {
  
  const { notes, deleteNote, editNote } = useContext(NoteContext);
 
  const handleDelete = (id) => {
     deleteNote(id);
  };
 
  const handleEdit = (id, updatedNote) => {
     editNote(id, updatedNote);
  }; 


  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Link href="/posts/AddNote" passHref>
            <button id="add" class="btn btn-outline-dark">Add Note</button>
        </Link>
        <br></br>
        <br></br>
          
        <div>
            {notes.map(note => (
              <div className="col-12 mb-3">
                <Note
                  key={note.id}
                  note={note}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                />
              </div>
            ))}
        </div>
      </section>

    </Layout>
  );
}

