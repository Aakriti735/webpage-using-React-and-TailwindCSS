import React from 'react'
import Picture from "../Home/pic.jpg";
import "../Home/Home.css"

function Home() {
  return (
    <>
    <div>
        <div className="home h-200 w-screen bg-red-200 bg-cover bg-center">
            <h1 className='text-5xl p-30 ml-60 mr-40 text-white font-bold pt-50'>BEST PLACE TO FIND AND EXPLORE<br/>
            <span className='p-40 mt-15'>THAT ALL YOU NEED</span></h1>
            <p className='text-white text-2xl pl-70'>Find Best Place, Restaurant, Hotel, Real State and many more think in just One click</p>
            <div className="location h-20 w-300 bg-white ml-30 mt-10">
                <div className="form flex">
                    <h2 className='mt-5 pl-10 text-xl'>What?</h2>
                    <input type="text" placeholder='Ex: Place, Restaurant,etc'className='mt-5 pl-10 text-xl' />
                    <i className="fa-solid fa-bars mt-5 pl-20 text-3xl"></i>
                    <h2 className='mt-5 pl-10 text-xl'>Location</h2>
                    <input type="text" placeholder='Ex: London, New York,etc' className='mt-5 pl-10 text-xl'/>
                    <i class="fa-solid fa-location-crosshairs mt-5 pl-25 text-3xl"></i>
                    <p className='mt-5 text-2xl pr-5 ml-5 h-10'>Search</p>
                    <i class="fa-solid fa-magnifying-glass mt-5 text-2xl"></i>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home;