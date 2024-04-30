
import React, { useContext, useState } from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
import { NoteContext } from '../../context/NoteContext';
import utilStyles from '../../styles/utils.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function AddNote() {
  const { addNote } = useContext(NoteContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Math.random(), 
      title: title,
      description: description,
    };
    addNote(newNote);
    setTitle('');
    setDescription('');
  };

  const showSuccessNotification = () => {
    toast.success('Success!', {
      position: 'top-right',
      autoClose: 1000, //the notif will disappear after 1 sec
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Layout>
      <Head>
        <title>Add Note</title>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.3/js/bootstrap.min.js"></script>        
      </Head>
      <section>
        <h4>Add Note</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <br></br>
            <input style={{ width: '300px', height: '30px' }}
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <br></br>
            <textarea style={{ width: '500px', height: '200px' }}
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
          <button
          type="submit"
          className={`${utilStyles.button} edit`}
          class="btn btn-outline-dark"
          style={{ marginRight: '10px' }}
          onClick={showSuccessNotification}
        >
          Submit
        </button>
        <ToastContainer />
        <Link href='/' passHref><button class="btn btn-outline-dark" style={{ marginTop: '10px' }}>Go back to homepage</button></Link>
        </div>
        </form>
      </section>
    </Layout>
  );
}


