import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { ImHome } from "react-icons/im";
import {FaUser, FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp    } from "react-icons/fa";


const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className="logo" to='/'>
                <img src={LogoS} alt="logo" />
                <img className='sub-logo' src={LogoSubtitle} alt="Ankush" />
            </Link>
            <nav>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    to='/'
                >
                    <ImHome color='#4d4d4e' />

                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="about-link"
                    to='/about'
                >

                    <FaUser color='#4d4d4e' />

                </NavLink>
                <NavLink
                    exact="true"
                    activeclassname="active"
                    className="contact-link"
                    to='/'
                >
                    <FaEnvelope color='#4d4d4e' />

                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/ankushjha871/">
                        <FaLinkedin color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://github.com/Ankushjha">
                        <FaGithub edin color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href="https://wa.me/+918507612123">
                        <FaWhatsapp  edin color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
