import React, {useEffect, useState} from 'react' 
import {useLocation,Link} from 'react-router-dom'
import PropTypes from 'prop-types';

Navbar.propTypes = {
    props: PropTypes.string
}

function Navbar(props){
    const [isRedirect, setRedirect] = useState()
    const location = useLocation()

    useEffect(()=>{
        setRedirect(location.pathname)

    },[location])

    const isActiveHome = isRedirect === '/' ? " active" : ""
     const isActive = isRedirect === '/meetup' ? " active" : ""
     const isActiveExplore = isRedirect ==='/explore' ? " active" : ""
     const isActiveLogin = isRedirect ==='/login' ? " active" : ""

    return (
        <>
            <ul>
            <li>
                <a className={isActiveHome} href="/">{props.navTitle}</a>
            </li>
            <li>
                <Link className={isActive} to="/meetup">{props.navText}</Link>
            </li>
            <li>
                <Link className={isActiveExplore} to="/explore">{props.navText2}</Link>
            </li>
            <li className="login">
                <Link className={isActiveLogin} to="/login">{props.navLogin}</Link>
            </li>
            </ul>
        </>

    );
}

export default Navbar;