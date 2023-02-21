import React from 'react'

import {CardInfo}   from './CardInfo'

const Card = () => {

  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {CardInfo.map((info) => {
          return (
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300' key={info.id}>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={info.img}></img>
            <h2 className='text-2xl font-bold text-center py-8'>{info.userType}</h2>
            <p className='text-center text-4xl font-bold'>{info.price}</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-2 mt-8'>{info.storage}</p>
                <p className='py-2 border-b mx-2'>{info.grantUser}</p>
                <p className='py-2 border-b mx-2'>{info.sendUp}</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto py-2 my-3 text-black hover:bg-green-600'>Start Trial</button>
        </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
