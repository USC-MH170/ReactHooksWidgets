import React from "react";
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link href="/" className="item">Accordion</Link>
            <Link href='/search' className="item">Wiki Search</Link>
            <Link href='/dropdown' className="item">Dropdown Component</Link>
            <Link href='/translate' className="item">Translater</Link>
        </div>
    )
}

export default Header