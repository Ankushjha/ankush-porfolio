import React from 'react'
import amaron from '../../public/amaron.png'
import calculator from '../../public/calculator.png'
import ticTacToe from '../../public/tic-tac-toe.png'
import youtubeClone from '../../public/youtube-clone.png'
import cmsSystem from '../../public/cms.png'

const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            logo: amaron,
            name: "Amaron",
            description: "This project is alomst fully functional and responsive front-end portfolio page for Amaron Raja Battery, built with HTML, CSS, JavaScript, jQuery, and Bootstrap. The purpose of this project is to practice and demonstrate the usage of these technologies in a real-world implementation.",
            github: "https://github.com/Ankushjha/amaron",
            visit: "#"
        },
        {
            id: 2,
            logo: cmsSystem,
            name: "CMS System",
            description: "This project is a content management system (CMS) built with PHP and styled using a Bootstrap simple theme. The purpose of this project is to demonstrate the creation of a functional CMS for learning purposes.",
            github: "https://github.com/Ankushjha/cms-system",
            visit: "https://ankushcms-sytem.000webhostapp.com/"

        },
        {
            id: 3,
            logo: ticTacToe,
            name: "Tic-Tac-Toe Game",
            description: "This is a simple Tic-Tac-Toe game built using React. The game tracks and displays the log of player moves, allowing players to revisit their previous moves during the game.",
            github: "https://github.com/Ankushjha/tic-tac-toe-game",
            visit: "#"

        },
        {
            id: 4,
            logo: youtubeClone,
            name: "Youtube Clone",
            description: "This project is a YouTube clone built using React. The primary purpose of this project is to gain hands-on experience with API connections and route management in a React application.",
            github: "https://github.com/Ankushjha/youtube-clone",
            visit: "#"
        },
        {
            id: 5,
            logo: calculator,
            name: "calculator",
            description: "This is a simple calculator application built using React. The app provides basic arithmetic operations such as addition, subtraction, multiplication, and division.",
            github: "https://github.com/Ankushjha/react-calculator",
            visit: "#"
        },
    ]

    return (
        <>
            <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                    <span className='underline font-semibold'>Featured projects</span>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 my-5'>

                        {
                            cardItem.map(({ id, logo, name, description, visit, github }) => (
                                <div key={id} className='flex flex-col justify-center items-center md:w-3/4 border-2 rounded-lg shadow-lg p-1 my-2 md:my-4 cursor-pointer hover:scale-110 duration-300 '>
                                    <img src={logo} className='w-full p-1 border-2 ' alt={name} />
                                    <div>
                                        <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                                        <p className='px-2 text-gray-700'>{description}</p>
                                    </div>
                                    <div className='flex justify-around px-6 py-4 w-full'>

                                        <button className='bg-blue-500 hover:bg-blue-700 text-white  font-medium px-4 py-2 rounded'>
                                            <a href={visit} >Preview</a>
                                        </button>
                                        <button className='bg-green-500 hover:bg-green-700 text-white font-medium px-4 py-2 rounded'>
                                            <a href={github}>Source Code</a>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <span>More projects are in the line to join here.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
