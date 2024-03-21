import './Header.scss'
import logo from './../assets/logo.png'
import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

function Header() {

    let [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get('q');


    const navigate = useNavigate();
    const [searchterm, setSearchterm] = useState(q || "");
    return (
        <header>

            <div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <input type="text" placeholder="Suche..." value={searchterm} onChange={(event) => { setSearchterm(event.target.value) }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            navigate("?q=" + searchterm);
                        }
                    }} />
            </div>
        </header>
    )
}

export default Header
