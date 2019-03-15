import React from  "react";
import PropTypes from "prop-types";

const Navbar = props => {

    return(
        <div>
            <h3 className="bg-secondary">{props.title}</h3>
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
