import React from 'react';

import './style.css';

let hrefLink = '#';

const Header = () => {
    return (
        <div className="header d-flex">
            <h3>
                <a href={hrefLink}>
                    StarDB
                </a>
            </h3>
            <ul className="d-flex">
                <li>
                    <a href={hrefLink}>People</a>
                </li>
                <li>
                    <a href={hrefLink}>Planets</a>
                </li>
                <li>
                    <a href={hrefLink}>Starships</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;