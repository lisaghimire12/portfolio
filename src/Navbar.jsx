import './Navbar.css'
import Theme from './Theme';
function Navbar({onProjectsClick, handleHomeClick, theme, setTheme}){
    return(
        <>
        <div id="navbar" > 
        <button onClick={handleHomeClick} id='name'>Lisa<span style={{ color: "#67485A" }} >.</span></button>
        <button onClick={handleHomeClick} className='navbar-button'>Home</button>
        <button onClick={onProjectsClick} className='navbar-button'>Project</button>
       <Theme theme={theme} setTheme={setTheme} />
        </div>
        </>
    )
}
export default Navbar;