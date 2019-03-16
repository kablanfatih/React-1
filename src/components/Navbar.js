import React from  "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Link} from "react-router-dom";

const Navbar = props => {

    return(
        <div>
            <h3 className="bg-secondary">{props.title}</h3>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/adduser">Add User</Link>
                </li>
            </ul>
        </div>
    )
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired
};
Navbar.defaultProps = {
    title : "Default"
};
export default Navbar;
