import React, {useState, useEffect} from 'react'
import {useAppcontext} from '../state/Context'


const Register = () => {
    
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        about: '',
    }

    const [values, setValues] = useState(initialState)

    const {register} =  useAppcontext();


    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        const {firstName, lastName, email, password, about} = values;

        const currentUser = {firstName, lastName, email, password, about}

        register(currentUser)


    }


    // useEffect(() =>{
    //     console.log(values);
    // }, [values])




  return (
    <section className='px-4'>
        <div className='flex flex-col justify-between items-center mt-20'>

            <div className=' w-full md:w-1/2 bg-blue-300 py-5 rounded-2xl p-10'>
                <h1 className='text-center text-5xl mb-8 text-white'>Register</h1>
                <form className='space-y-5' onSubmit={onSubmit}>
                    <div className='max-w-sm mx-auto'>
                        <input type="text" placeholder='First Name' name="firstName" value={values.firstName} className='w-full p-1 rounded-md' onChange={handleChange}/>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <input type="text" placeholder='Last Name' name="lastName" value={values.lastName} className='w-full p-1 rounded-md' onChange={handleChange}/>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <input type="email" placeholder='Email' name="email" value={values.email} className='w-full p-1 rounded-md' onChange={handleChange}/>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <input type="password" placeholder='Password' name="password" value={values.password} className='w-full p-1 rounded-md' onChange={handleChange}/>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <textarea type="password" placeholder='About Me!!!' name="about" value={values.about} className='w-full p-1 rounded-md' rows="5" onChange={handleChange}></textarea>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <button type='submit' className='text-center w-full bg-blue-700 text-white font-bold py-2'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Register