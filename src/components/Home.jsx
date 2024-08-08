import React from 'react';
import { FaLinkedin, FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoWhatsapp, IoLogoJavascript } from "react-icons/io";
import { FaDrupal } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import pic from '../../public/profile.jpg';


const Home = () => {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
                        <span className='text-xl'>Welcome In My Feed</span>
                        <div className='flex gap-1 text-2xl md:text-4xl'>
                            <h1>Hello, I'm a</h1>
                            {/* <span className='text-red-700 font-bold'>Developer</span> */}
                            <ReactTyped
                                strings={["FrontEnd Developer", 'Software Engineer', 'FullStack Developer']}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                                className='text-red-700 font-bold'
                            />
                        </div>
                        <br />
                        <p className='text-sm md:text-md text-justify'>Experienced Software Engineer with a strong background in <strong>web development</strong>, coding, testing, and debugging web applications. Proficient in using Drupal, WordPress CMS, implementing <strong>SEO strategies</strong>, and utilizing analytics tools like <strong>Adobe Analytics</strong>. Skilled in <strong>front-end and back-end development</strong> with expertise in HTML, CSS3, ReactJS, AngularJS, JavaScript, PHP, and Node.js. Adept at project management using <strong>Jira, confluence</strong> and maintaining version control with Bitbucket.</p>
                        <br />

                        {/* social media icons */}

                        <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 '>
                            <div className='space-y-2'>
                                <h1 className='font-bold'>Available on</h1>
                                <ul className='flex gap-5 justify-center items-center'>
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
                            </div>

                            <div className='space-y-2'>
                                <h1 className='font-bold'>Currently working on</h1>
                                <div className='flex gap-5 justify-center items-center'>
                                    <FaDrupal className='text-xl md:text-3xl hover:scale-110 duration-200rounded-full border-[2px]' />
                                    <IoLogoJavascript className='text-xl md:text-3xl hover:scale-110 duration-200rounded-full border-[2px]' />
                                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200rounded-full border-[2px]' />
                                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200rounded-full border-[2px]' />
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className='md:w-1/2 md:ml-48 mt-8 md:mt-20 order-1'>
                        <img src={pic} alt="image" className='rounded-full md:w-2/3' />
                    </div>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Home
