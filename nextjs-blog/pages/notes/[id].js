
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { NoteContext } from '../../context/NoteContext';
import Layout from '../../components/layout';


const NoteDetails = () => {
 const router = useRouter();
 const { notes } = useContext(NoteContext);
 const { id } = router.query; 

 const note = notes.find(note => note.id === Number(id));

 if (!note) {
    return <div>Note not found</div>;
 }

 return (
    <Layout>
    <div>
      <h5>{note.title}</h5>
      <p>{note.description}</p>
    </div>
    </Layout>
 );
};

export default NoteDetails;
