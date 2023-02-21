import React from 'react'
import Laptop from '../images/laptop.jpg'
import Double from '../images/double.png'
import Single from '../images/single.png'
import Triple from '../images/triple.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="#" className='w-[500px] mx-auto my-4'></img>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor mauris eleifend venenatis convallis. 
                Proin mollis sed turpis sit amet rutrum. Vivamus a odio vel ligula ornare pellentesque. 
                </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md py-2 my-3 text-black mx-auto md:mx-0'>Get Started</button>

            </div>
        </div>
       
        {/* <img src={Double} alt="#"></img>
        <img src={Single} alt="#"></img>
        <img src={Triple} alt="#"></img> */}

    </div>
  )
}

export default Analytics
