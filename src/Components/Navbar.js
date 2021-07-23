import React, {useState} from 'react';
import '../App.css';
import ReorderIcon from '@material-ui/icons/Reorder'

function Navbar() {

    const [showLinks, setShowLinks] = useState(false);
    
    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/business">For Business</a>
                    <a href="/blogs">Blogs</a>
                    <a href="/carnival">Carnival</a>
                    <a href="/careers">Careers</a>
                </div>
                <button onClick={()=> setShowLinks(!showLinks)}><ReorderIcon/></button>
            </div>
            <div className="rightSide">
                <div className="logo">
                    <a href="/home">Let's GTok</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
