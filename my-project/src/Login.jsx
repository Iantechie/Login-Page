import React from 'react';

const Login = () => {
  return (
    <>
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg m-4">
        <h1 className="text-3xl font-bold text-black mb-8">Account Login</h1>
        <div className="flex space-x-2 justify-center mb-6">
          <span className="text-black">Account</span>
          <span className="text-gray-400"> — Shipping — Payment</span>
        </div>
        <p className='text-lg'>Log in to Your account</p>
        <p className='mt-0'>Dont have an account? <span className='text-black font-semibold'>Sign up now</span></p>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-3xl w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm bg-slate-200"
              placeholder="Email@myemail.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-3xl w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm bg-slate-200"
              placeholder="Password"
            />
          </div>

          <div>
            <button
              type="submit"
              className="group w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Login
            </button>
          </div>

          <div className="text-center">
            <a
              href="/forgot-password"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Forgot Your Password?
            </a>
          </div>
        </form>

        <div className="mt-6 space-y-3">
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-3xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <span className="ml-2">Sign Up with Email</span>
          </button>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-3xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <svg class="w-2 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z"/>
            </svg>
            <span className="ml-2">Sign Up with Apple</span>
          </button>
          <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-3xl shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
          <svg class="w-5 h-5 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd"/>
            </svg>
            <span className="ml-2">Sign Up with Google</span>
          </button>
        </div>

        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            Don't have an account?<a href="/sign-up" className="text-blue-600">Sign up now</a>
          </span>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
