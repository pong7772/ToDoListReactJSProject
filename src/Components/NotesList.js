import AddNote from "./AddNote";
import Notes from "./Notes";
const NotesList = ({notes, addNote, handleDelete}) => {
    return ( 
        
        <div className='notes-list'>
            {notes.map((note)=>{
                return(
                    <Notes key={note.id} id={note.id} text={note.text} date={note.date} handleDelete={handleDelete} />
                )
            })}
            <AddNote addNote={addNote} />
        </div>
     );
}
 
export default NotesList;