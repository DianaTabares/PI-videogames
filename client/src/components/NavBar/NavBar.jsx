import s from "./NavBar.module.css"
import {Link} from "react-router-dom";
import Search from "../search/search";

const NavBar =({setInput, setPage}) => {
    return (
            <nav className={s.nav}>
                <div>
                <Link className={s.logocont} style={{ textDecoration: 'none' }} to="/">
                    <img className={s.logo} src='https://sm.ign.com/ign_es/tag/v/videojuego/videojuegos_4ze8.jpg'alt='control'/>
                </Link>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/home">
                        <button className={s.create}>Home</button>
                    </Link>
                </div>
                <div>
                    <Link style={{ textDecoration: 'none' }} to="/form">
                        <button className={s.create}>Create</button>
                    </Link>
                </div>
                <div>
                    <Search setInput={setInput} setPage={setPage}/>
                </div>
            </nav>
    )
};
export default NavBar;