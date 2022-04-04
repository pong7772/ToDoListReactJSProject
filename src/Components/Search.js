import {MdSearch} from 'react-icons/md'
import { useState } from 'react';
const Search = ({setAddInput}) => {

    

    const handleChangeInput = (e)=>{
        setAddInput(e.target.value);
    }

    return ( 
        <div className="search">
            <MdSearch className="search-icon" size='1.3em'></MdSearch>
            <input type="text" placeholder="type to search..." onChange={handleChangeInput}/>
        </div>
     );
}
 
export default Search;