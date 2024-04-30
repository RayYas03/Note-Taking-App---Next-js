import { NoteProvider } from '../context/NoteContext';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <NoteProvider>
      <Component {...pageProps} />
    </NoteProvider>
  );
}

export default MyApp;
