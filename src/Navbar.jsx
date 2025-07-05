import './Navbar.css'

function Navbar({onProjectsClick, handleHomeClick}){
    return(
        <>
        <div id="navbar" > 
        <button onClick={handleHomeClick} id='name'>Lisa<span style={{ color: "#67485A" }} >.</span></button>
        <button onClick={handleHomeClick} id='navbar-button'>Home</button>
        <button onClick={onProjectsClick} id='navbar-button'>Project</button>
       
        </div>
        </>
    )
}
export default Navbar;