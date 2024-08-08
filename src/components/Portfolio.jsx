import React from 'react'
import java from '../../public/java.png'
import python from '../../public/python.webp'
import mongoDB from '../../public/mongodb.jpg'
import express from '../../public/express.png'
import reactjs from '../../public/reactjs.png'
import nodejs from '../../public/node.png'

const Portfolio = () => {
    const cardItem = [
        {
            id: 1,
            logo: mongoDB,
            name: "MongoDB"
        },
        {
            id: 2,
            logo: java,
            name: "Java"
        },
        {
            id: 3,
            logo: python,
            name: "Python"
        },
        {
            id: 4,
            logo: express,
            name: "ExpressJS"
        },
        {
            id: 5,
            logo: nodejs,
            name: "Node.Js"
        },
        {
            id: 6,
            logo: reactjs,
            name: "React.Js"
        },
    ]

    return (
        <>
            <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                    <span className='underline font-semibold'>Featured projects</span>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>

                        {
                            cardItem.map(({ id, logo, name }) => (
                                <div key={id} className='flex flex-col justify-center items-center md:w-80 md:h-80 border-2 rounded-lg shadow-lg p-1 my-2 md:my-4 cursor-pointer hover:scale-110 duration-300 '>
                                    <img src={logo} className='w-[120px] h-[120px] p-1 rounded-full border-2 ' alt={name} />
                                    <div>
                                        <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                                        <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, officia?</p>
                                    </div>
                                    <div className='flex justify-around px-6 py-4 w-full'>

                                        <button className='bg-blue-500 hover:bg-blue-700 text-white  font-medium px-4 py-2 rounded'>Preview</button>
                                        <button className='bg-green-500 hover:bg-green-700 text-white font-medium font-semibold px-4 py-2 rounded'>Source Code</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
