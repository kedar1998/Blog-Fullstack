import React from 'react'

const Register = () => {
  return (
    <div className=' h-screen text-white'>
        <div className=' flex flex-col justify-center items-center h-full'>
            {/* FORM */}
            <div className=' p-10  bg-blue-300'>
                <form>
                    <div>
                        <label className='block'>First Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label className='block'>Last Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label className='block'>Email</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label className='block'>Password</label>
                        <input type="password" />
                    </div>
                    <div>
                        <label className='block'>About Me</label>
                        <textarea className='w-full' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register