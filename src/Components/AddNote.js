import {useState} from 'react'
const AddNote = ({addNote}) => {
    const [noteText, setNoteText] =useState('');
    const charLimit= 200;

    const handleChange =(e)=>{
        if(charLimit - e.target.value.length >=0 ){
         setNoteText(e.target.value);
        }else{
            alert("you can't type anymore")
        }
    }
    
    const handleSaveClick = ()=>{
        if(noteText.trim().length >0){
        addNote(noteText);
        setNoteText('')
        }else{
            alert("please type something")
        }
    }
    return ( 
        <div className="note new">
            <textarea  cols="10" rows="8" placeholder="Type to add a note..."
            onChange={handleChange} value={noteText}></textarea>
            <div className="note-footer">
                <small>{charLimit - noteText.length}Remaing</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
     );
}
 
export default AddNote;