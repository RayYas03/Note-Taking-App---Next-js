
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext'; 
import React, { useState } from 'react';
import Layout from '../../../components/layout';



const EditNotePage = () => {
 const router = useRouter();
 const { id } = router.query;
 const { notes, editNote } = useContext(NoteContext); 

 const note = notes.find(note => note.id === Number(id));

 if (!note) {
    return <div>Note not found</div>;
 }

 const [updatedTitle, setUpdatedTitle] = useState(note.title);
 const [updatedDescription, setUpdatedDescription] = useState(note.description);

 const handleTitleChange = (e) => setUpdatedTitle(e.target.value);
 const handleDescriptionChange = (e) => setUpdatedDescription(e.target.value);

 const handleSubmit = (e) => {
    e.preventDefault();
    editNote(Number(id), { title: updatedTitle, description: updatedDescription }); 
    router.push(`/notes/${id}`);
 };

 return (
    <Layout>
        <br></br>
        <h5>Edit your note</h5>
    <form onSubmit={handleSubmit}>
       <label>
         Title:
         <input type="text" value={updatedTitle} onChange={handleTitleChange} style={{ width: '100%', height: '30px' }}/>
       </label>
       <br></br>
       <br></br>
       <label>
         Description:
         <br></br>
         <textarea value={updatedDescription} onChange={handleDescriptionChange} style={{ width: '500px', height: '200px' }}/>
       </label>
       <br></br>
       <br></br>
       <button type="submit" class="btn btn-outline-dark">Save</button>
    </form>
    </Layout>
 );
};

export default EditNotePage;
