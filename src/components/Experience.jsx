import React from 'react'
import html from '../../public/html.png'
import javascript from '../../public/javascript.png'
import oracle from '../../public/oracle.png'
import css from '../../public/css.jpg'
import java from '../../public/java.png'
import drupal from '../../public/drupal.png'
import wordpress from '../../public/wordpress.png'

const Experience = () => {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML"
        },
        {
            id: 2,
            logo: javascript,
            name: "javaScript"
        },
        {
            id: 3,
            logo: oracle,
            name: "Oracle"
        },
        {
            id: 4,
            logo: css,
            name: "CSS"
        },
        {
            id: 5,
            logo: java,
            name: "Java"
        },
        {
            id: 6,
            logo: drupal,
            name: "Drupal"
        },
        {
            id: 7,
            logo: wordpress,
            name: "WordPress"
        },
    ]
    return (
        <>
            <div name="Experience" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                    <p className=''>I've more than 2.5 Years of experience in below technologies.</p>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                        {
                            cardItem.map(({ id, logo, name }) => (
                                <div key={id} className='flex flex-col items-center justify-center border-2 rounded-full md:w-52 md:h-52 p-1 my-2 md:my-4 cursor-pointer hover:scale-110 duration-300 '>
                                    <img src={logo} alt={name} className='w-[140px] p-1 rounded-full' />
                                    <span>{name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default Experience
