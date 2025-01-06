import {  Link, NavLink } from "react-router-dom"


const Navbar = () => {
    return (
        <>

            <nav className="navbar p-4 navbar-expand-lg  fs-4 fw-bold  position-fixed z-3 w-100">
                <div className="container">
                    <Link className="navbar-brand text-white fs-1 fw-bolder text-uppercase" to={"/home"} >First FrameWork</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/about"} >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/portfolio"} >Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to={"/contact"} >Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar