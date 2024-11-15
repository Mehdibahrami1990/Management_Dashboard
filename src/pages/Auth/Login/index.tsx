import React from 'react';
import {NavLink} from 'react-router-dom';
const Login = () => {
  return (
    <>
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-[#ECEEEF] flex rounded-1xl shadow-lg max-w-3xl py-[40px] items-center">
          <div className="md:w-full px-8 md:px-6">
            <h2 className="font-bold text-3xl text-[#818A91] text-center">
              LOGIN
            </h2>
            <form action="" className="flex flex-col gap-3 min-w-[20vw]">
              <label htmlFor="email" className="text-[0.9rem]">
                Email
              </label>
              <input
                className="p-2 rounded-1xl border w-[100%]"
                type="email"
                name="email"
                placeholder="Email"
              />
              <label htmlFor="password" className="text-[0.9rem]">
                Password
              </label>

              <input
                className="p-2 rounded-1xl border w-[100%]"
                type="password"
                name="password"
                placeholder="Password"
              />

              <button className="bg-[#1C7CD5] rounded-1xl text-white py-1 hover:scale-105 mt-8 duration-300 w-[100%]">
                Login
              </button>
            </form>
            <div className="mt-3 text-xs flex items-center text-[#373a3c]">
              <p>Don't have an account?</p>
              <NavLink
                to="/auth/register"
                className="py-2 hover:scale-110 duration-300 text-[#373a3c] font-bold ml-2"
              >
                Register Now
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
