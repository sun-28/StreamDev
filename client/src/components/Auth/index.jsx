import React, { useState } from 'react'

const Auth = () => {
  const [auth, setauth] = useState('login')
  return (
    <div className='absolute bg-body-bg left-0 top-0 w-screen h-screen'>
      <div className='w-screen h-screen flex justify-center items-center'>
      <div class="w-80 rounded-2xl bg-slate-900">
        <div class="flex flex-col gap-2 p-8">
        <label class="flex cursor-pointer items-center justify-center gap-4 p-1 text-slate-400">
            <div class="relative inline-block">
              <input class="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox" onClick={()=>{auth=='login'?setauth('signup'):setauth('login')}}/>
              <span class="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
            </div>
          </label>
          {auth === 'login'?
          <>
          <p class="text-center text-3xl mb-4 text-green">Login</p>
          <input type='text' class="bg-slate-900 w-full rounded-lg border border-green px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Username"/>
          <input type='password' class="bg-slate-900 w-full rounded-lg border border-green px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Password"/>
          <button class="mt-4 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Login</button>
          </>
          :
          <>
          <p class="text-center text-3xl text-green mb-4">Sign Up</p>
          <input type='text' class="bg-slate-900 w-full rounded-lg border border-green px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Username"/>
          <input type='text' class="bg-slate-900 w-full rounded-lg border border-green px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Channel Name"/>
          <input  class="bg-slate-900 w-full rounded-lg border border-green px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Password"/>
          <input class="bg-slate-900 w-full rounded-lg border border-green px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Confirm password"/>
          <button class="mt-4 inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Register</button>
          </>
          }
        </div>
      </div>
      </div>
    </div>
  )
}

export default Auth
