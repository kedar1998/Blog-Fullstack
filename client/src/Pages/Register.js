import React from 'react'
import registerImg from '../assets/register.jpg'

const Register = () => {
  return (
    <section className='px-4'>
        <div className='flex flex-col justify-between items-center mt-20'>

            <div className=' w-full md:w-1/2 bg-blue-300 py-5 rounded-2xl p-10'>
                <h1 className='text-center text-5xl mb-8 text-white'>Register</h1>
                <form className='space-y-5'>
                    <div className='max-w-sm mx-auto'>
                        <input type="text" placeholder='First Name' className='w-full p-1 rounded-md'/>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <input type="text" placeholder='Last Name' className='w-full p-1 rounded-md'/>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <input type="email" placeholder='Email' className='w-full p-1 rounded-md'/>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <input type="password" placeholder='Password' className='w-full p-1 rounded-md'/>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <textarea type="password" placeholder='About Me!!!' className='w-full p-1 rounded-md' rows="5"></textarea>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <button className='text-center w-full'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Register