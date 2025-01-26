import { NavLink } from 'react-router-dom';
import login from '../assets/images/login1.jpg';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';

const Login = () => {

    const [showPass, setShowPass] = useState(false);

    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex flex-col md:flex-row-reverse justify-between">
          <div className="text-center lg:text-left md:w-[50%] w-[50%]">
            <div className=''>
              <img className='w-full' src={login} alt="" />
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-pink-50 via-pink-100 to-pink-200 text-base-content">
            <form className="card-body">
              <div>
                <h3 className='text-3xl font-bold text-purple-900'>Welcome back!!</h3>
                <p className='text-purple-900'>Login to continue...</p>
              </div>
              <div className='border-t border-purple-700 border-dotted'>

              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-purple-900 font-semibold">Email</span>
                </label>
                <input type="email" placeholder="Enter Email" className="input input-bordered"
                />
                
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text text-purple-900 font-semibold">Password</span>
                </label>

                <input type={showPass ? 'text' : "password"} placeholder="Enter Password" className="input input-bordered"
               
                />
                <span className='absolute left-[90%] top-[62%]' onClick={() => setShowPass(!showPass)}>
                  {
                    showPass ? <FaEyeSlash className='text-purple-900'></FaEyeSlash> : <FaEye className='text-purple-900'></FaEye>
                  }
                </span>
              </div>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
              <div className="form-control mt-3">
                <button className="btn btn-primary">Login</button>
              </div>

              <div className='mt-4'>
                <p>Do Not Have any Account? <NavLink className='link link-hover text-purple-600' to='/register'>Sign UP</NavLink> </p>
              </div>
              <div className='flex mt-3 justify-between'>
                <div className='w-[30%] '>
                  <h3 className='border-t border-purple-800 mt-3'></h3>
                </div>
                <div className='text-center'>
                  <p className='font-bold text-purple-900'>continue with</p>
                </div>
                <div className='w-[30%]'>
                  <h3 className='border-t border-purple-800 mt-3'></h3>
                </div>
              </div>
            </form>
            <div className='flex mb-5 justify-around w-full'>
                <div className='w-[50%] flex justify-center'>
                     <button  className='btn w-2/3 border border-purple-900 text-purple-900 font-bold hover:bg-purple-500 hover:text-white'>Google</button>
                </div>
                <div className='w-[50%] flex justify-center'>
                     <button className='btn w-2/3 border border-purple-900 text-purple-900 font-bold hover:bg-purple-500 hover:text-white'>Github</button>
                </div>
                <div>

                </div>
              </div>
          </div>
        </div>
      </div>
    );
};

export default Login;