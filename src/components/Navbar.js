import React from 'react'; //Shorthand rcf from extension
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    { //These color scheme buttons are visible only when the dark mode is enabled
                        props.mode === 'dark' && <div onChange={props.colorSelector} className="mx-3">
                            <input type="radio" className="btn-check" id="option1" name="t" defaultChecked value="primary" />
                            <label className="btn btn-outline-primary mx-1" htmlFor="option1" >blue</label>
                            <input type="radio" className="btn-check" id="option2" name="t" value="success" />
                            <label className="btn btn-outline-success mx-1" htmlFor="option2">green</label>
                            <input type="radio" className="btn-check" id="option3" name="t" value="danger" />
                            <label className="btn btn-outline-danger mx-1" htmlFor="option3">red</label>
                        </div>
                    }
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === "light" ? "dark" : "light"} mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
};

Navbar.defaultProps = {
    title: "Enter a title",
    aboutText: "About Us"
}
