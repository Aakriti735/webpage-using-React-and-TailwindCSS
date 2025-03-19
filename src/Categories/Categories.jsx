import React from 'react';
import CountUp from 'react-countup';
import "../Categories/Categories.css"

function Categories() {
  return (
    <div>
        <div className="categories h-70 w-screen flex justify-center pt-20">
            <div className="category mr-20 text-xl">
                <h2 className='text-6xl'>
                <CountUp 
                start={0}
                 end={95}
                 duration={2.75}/>K+
                </h2>
                <p className='mt-2 ml-5'>Listings</p>
            </div>
            <div className="category mr-20 text-xl ">
                <h2 className='text-6xl'>
                <CountUp 
                start={0}
                 end={80}
                 duration={2.75}/>K+
                </h2>
                <p className='mt-2'>Listing Categories</p>
            </div>
            <div className="category mr-20 text-xl">
                <h2 className='text-6xl'>
                <CountUp 
                start={0}
                 end={56}
                 duration={2.75}/>K+
                </h2>
                <p className='mt-2'>Visitors</p>
            </div>
            <div className="category text-xl">
                <h2 className='text-6xl'>
                <CountUp 
                start={0}
                 end={32}
                 duration={2.75}/>K+
                </h2>
                <p className='mt-2'>Happy Clients</p>
            </div>
        </div>
    </div>
  )
}

export default Categories;