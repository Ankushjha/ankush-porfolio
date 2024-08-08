import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
    return (
        <>
            <hr />
            <footer className='py-12'>
                <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
                    <div className='flex flex-col items-center justify-center'>
                            <ul className='flex gap-5'>
                                <li>
                                    <a target='_blank' rel='' href="https://www.linkedin.com/in/ankushjha871/">
                                        <FaLinkedin className='text-2xl cursor-pointer' />
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' rel='' href='https://github.com/Ankushjha'>
                                        <FaGithub className='text-2xl cursor-pointer' />
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' rel='' href='https://wa.me/+918507612123'>
                                        <IoLogoWhatsapp className='text-2xl cursor-pointer' />
                                    </a>
                                </li>
                            </ul>
                            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
                                <p className='text-sm'>
                                    &copy; 2024 All rights reserved.
                                </p>
                                <p className='text-sm'>Made with ❤️ <a href='https://www.linkedin.com/in/ankushjha871/' target='_blank'>Ankush.</a></p>
                            </div>
                        </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
