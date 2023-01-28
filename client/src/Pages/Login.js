import React, {useState} from 'react'
import { useAppcontext } from '../state/Context'

const Login = () => {


    const initialValues = {
        email: '',
        password: '',
    }


    const [values, setValues] = useState(initialValues)

    const {loginUser} = useAppcontext()

    const onSubmit = (e) =>{
        e.preventDefault()
        const {email, password} = values
        const currentUser = {email, password}
        loginUser(currentUser)
    }

    const handleChange = (e) =>{
        setValues({...values, [e.target.name] : e.target.value})
    }

  return (
    <section className='px-4'>
        <div className='flex flex-col justify-between items-center mt-20'>

            <div className=' w-full md:w-1/2 bg-blue-300 py-5 rounded-2xl p-10'>
                <h1 className='text-center text-5xl mb-8 text-white'>Login</h1>
                <form className='space-y-5' onSubmit={onSubmit}>
                    <div className='max-w-sm mx-auto'>
                        <input type="email" placeholder='Email' name="email" value={values.email} className='w-full p-1 rounded-md' onChange={handleChange}/>
                    </div>
                    <div className='max-w-sm mx-auto'>
                        <input type="password" placeholder='Password' name="password" value={values.password} className='w-full p-1 rounded-md' onChange={handleChange}/>
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

export default Login