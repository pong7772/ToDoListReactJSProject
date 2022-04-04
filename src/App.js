import {useState,useEffect} from 'react';
import NotesList from './Components/NotesList';
import {nanoid} from 'nanoid';
import Search from './Components/Search';
import Header from './Components/Header';

function App() {
  const [addDarkMode,setAddDarkMode ] = useState(false);
  const [addInput, setAddInput]=useState("");


  const [notes, setNotes]  = useState(
    ()=>{
      const saved = localStorage.getItem('stores-note-data');
      const initialValue = JSON.parse(saved);
      return initialValue || "";
    }
    );


  

  const addNote= (noteText)=>{
    const currentDate= new Date();
    const newNote ={
      text: noteText,
      date: currentDate.toLocaleTimeString(),
      id: nanoid()
    }
    const newNotes= [...notes, newNote];
    setNotes(newNotes);
  }

  const handleDelete =(id)=>{
    const deletItem = notes.filter((thisId)=>{
      return (thisId.id !== id);
    })
    setNotes(deletItem);
  }


  useEffect(() => {
    localStorage.setItem('stores-note-data',
    JSON.stringify(notes))
  }, [notes]);

  return (
    
    <div className= {`${addDarkMode && 'dark-mode'}`}>
        <div className="container">
        <Header setAddDarkMode={setAddDarkMode}/>
        <Search setAddInput={setAddInput}/>
        <NotesList notes={notes.filter((note)=>{
          return note.text.toLowerCase().includes(addInput);
          })} addNote={addNote} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
