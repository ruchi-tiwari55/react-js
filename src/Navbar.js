 import {Link} from 'react-router-dom'
 export const Navbar=()=>{
    return(
        <div>
             
             <Link to="/Contact">Contact</Link>
          <Link to="/Home">Home</Link>
          <Link to="/Menu">Menu</Link>
        </div>
    )
}