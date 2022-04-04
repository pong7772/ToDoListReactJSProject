import {MdDeleteForever} from 'react-icons/md'
const Notes = ({id, text,date,handleDelete}) => {

    const setHandleDelete=()=>{
        handleDelete(id);
    }
    return ( 
        <div className="note" id={id}>

            <span> {text} </span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever className="delete-icon" size='1.3em' onClick={setHandleDelete}></MdDeleteForever>

            </div>
        </div>
     );
}
 
export default Notes;