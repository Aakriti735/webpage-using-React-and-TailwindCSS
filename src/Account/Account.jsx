import React from 'react'

function Account() {
  return (
    <div className='bg-white'>
        <div className="account h-120 w-screen bg-green-100 flex justify-center flex-col">
            <h1 className='text-3xl ml-100'>DO YOU WANT TO ADD YOUR BUSINESS LISTING WITH US?</h1>
            <p className='ml-90 mt-5 text-xl'>Listrace offer you to list your business with us and we very much able to promote your Business.</p>
            <div className="input">
            <input type="text" placeholder='Enter your email here' className='mt-8 ml-110 h-15 w-100 bg-white pl-10' />
            <button className='h-15 w-50 bg-red-500'>Create Account</button>
            </div>
        </div>
    </div>
  )
}

export default Account;