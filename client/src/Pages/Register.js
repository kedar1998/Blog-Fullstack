import React, {useState, useEffect} from 'react'


const Register = () => {
    
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        about: '',
    }

    const [values, setValues] = useState(initialState)


    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
    }


    // useEffect(() =>{
    //     console.log(values);
    // }, [values])




  return (
    <section className='px-4'>
        <div className='flex flex-col justify-between items-center mt-20'>

            <div className=' w-full md:w-1/2 bg-blue-300 py-5 rounded-2xl p-10'>
                <h1 className='text-center text-5xl mb-8 text-white'>Register</h1>
                <form className='space-y-5'>
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
                        <button className='text-center w-full'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Register