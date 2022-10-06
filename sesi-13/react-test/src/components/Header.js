import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex margin-right: 25px">
                    <span className="fs-4">Testing example</span>
                    <ul className="flex items-center space-x-10">
                    <Link to="/" className='fs-4 nav-link text-black'>
                      Home   
                    </Link></ul>
                    <ul className="flex items-center space-x-10">
                    <Link to="/About" className='fs-4 nav-link text-black'>
                      About Me
                    </Link></ul>
                </div>
            </header>
        </>
    );
};

export default Header;