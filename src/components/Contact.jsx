import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {  //if we have to communicate with APIs, the response will get delay while travelling to and fro so that is why we use async and await so that the excution with be on hold till response didn't came. For this we use ASYNC AWAIT. It is the best way to handle promises or to perform asyncronus function.
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            message: data.message
        }
        try {
            await axios.post("https://getform.io/f/blljexmb", userInfo);
            toast.success("Your message has been sent.");
        } catch (error) {
            toast.error("Something went wrong");
        }
    }

    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-5'>Contact Me</h1>
                <p>Please fill out the form below to contact me</p>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form
                        action="https://getform.io/f/blljexmb"
                        className='bg-slate-200 w-96 px-8 py-6 rounded-xl'
                        method="POST"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h1 className='font-semibold text-xl'>Send your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor="fullname">Full Name:</label>
                            <input type="text"
                                id='fullname'
                                name='fullname'
                                placeholder='Enter your Full Name'
                                className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                {...register("fullname", { required: true })}
                            />
                            {errors.fullname && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor="email">Email Address:</label>
                            <input type="email"
                                id='email'
                                name='email'
                                placeholder='Enter your email address'
                                className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor="message">Message:</label>
                            <textarea type="text"
                                id='message'
                                name='message'
                                placeholder='Type your message here..'
                                className='shadow rounded-lg appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                {...register("message", { required: true })}
                            />
                            {errors.message && <span>This field is required</span>}
                        </div>
                        <button type='submit' className='bg-black text-white rounded-xl px-3 py-2 hover:bg:slate-700 duration-300'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
