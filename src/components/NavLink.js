import React from 'react'

const NavLink = ({ text, icon, href }) => {
    return (
        <a className="nav-link" href={`#${href}`}>
            <li>
                {/* <span class="material-symbols-outlined">
                    {icon}
                </span> */}
                <span className='nav-text'>{text}</span>
            </li>
        </a>
    )
}

export default NavLink