const Header = ({setAddDarkMode}) => {
    return ( 
        <div className="header">
            <h1>Pong NOte</h1>
            <button onClick={()=>{
                return setAddDarkMode((prev)=>!prev)
            }} className="save">dark mode</button>
        </div>
     );
}
 
export default Header;