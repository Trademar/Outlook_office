import React, {useContext} from 'react';
import micro from '../Assets/microsoft-svgrepo-com.svg';
import arrowBack from '../Assets/arrow-back-basic-svgrepo-com.svg';
import { UserContext } from '../UserContext/UserContextProvider';
import { Link } from 'react-router-dom';

// import './App.css'

function Password () {
  const {email} = useContext(UserContext);

  return (
    <>
    <div className="w-screen min-h-screen">
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='flex items-center justify-center'>
        <img src={'https://logincdn.msauth.net/shared/1.0/content/images/applogos/53_7a3c80bf9694448bac31a9589d2e9e92.png'} alt="Logo" className="w-44 mb-6"/>
      </div>

    {/* sign in form */}

      <div className='px-10 bg-[#fff] w-[28rem] h-[24rem] shadow-lg'>
        <form action="" method="post">
          {/* image logo */}
          <div className="image">
        <img src={micro} className='w-[7rem]' />
          </div>

          {/* sign in data */}
          <div className="relative bottom-7 text-left">
            <div className="flex space-x-2 ">
                {/* image icon */}
                <Link to={"/"}>
                  <img src={arrowBack} className='h-5 w-5' alt="arrowBack" />
                </Link>
                  <p className='text-sm font-medium'>{email}</p>
            </div>
                

            <h1 className='mt-6 text-2xl font-bold'>Enter Password</h1>
          </div>

          {/* form input */}
          
          <input type="password" name="password" required id="password" placeholder='Password' className='w-full py-3 outline-none border-b border-gray-700 text-left' />
          <p className='text-left text-[0.8rem] my-4'>No account? <span className='text-[#0068B8] cursor-pointer hover:underline hover:text-gray-500'>Create one!</span> </p>
          <p className='text-left text-[0.8rem] text-[#0068B8] cursor-pointer hover:underline hover:text-gray-500' >Sign in with Windows Hello or a security key </p>
          {/* <a href="https://outlook.live.com/mail/0/"> */}
          <button className='relative left-32 bg-[#0068B8] px-9 py-1 text-white mt-6'>Next</button>
          {/* </a> */}

        </form>
      </div>

    </div>
    </div>
      
    </>
  )
}

export default Password;