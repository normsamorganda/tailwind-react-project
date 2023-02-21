import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Wants tips and tricks to option</h1>
            <p>Sign up to our newsletter and be updated!</p>
        </div>
        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input 
                className='p-3 w-full rounded-md text-black'
                type='email' 
                placeholder='Enter email'></input>
                <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto py-2 my-3 text-black'>Notify Me</button>
            </div>
            <p> We care about the protection of your data. Read our Privacy Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
