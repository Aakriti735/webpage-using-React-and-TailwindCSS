import React from 'react'

function Articles() {
  return (
    <div className='bg-white'>
        <div className="explore">
            <h1 className='ml-160 text-3xl'>NEWS AND ARTICLES</h1>
            <p className='mt-5 ml-140 text-xl'>Always upto date with our latest News and Articles</p>
        </div>
        <div className="card-body-1">
        <div className="card h-150 flex ">
            <div className="card-b h-130 w-100 bg-white mt-10 border-4 border-indigo-600  ml-20 hover:shadow-2xl">
                <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1xN1ve.img?w=768&h=576&m=6" alt="" />
                <h3 className='text-lg mt-3 mr-4 ml-3'>How to find your Desired Place more quickly</h3>
                <p className='mt-2 ml-3'>Posted By ADMIN | March 2018</p>
                <p className='mt-2 ml-3 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus est nam, corporis amet suscipit itaque sed nisi neque aut quia. Omnis minima sit doloremque incidunt laboriosam alias quos nisi!</p>
            </div>
            <div className="card h-150 2-screen flex ">
            <div className="card h-130 w-100 bg-white mt-10 border-4 border-indigo-600 ml-10 hover:shadow-2xl">
                <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1xrLXp.img?w=768&h=576&m=6" alt="" />
                <h3 className='text-xl mt-3 ml-3 mr-4'>How to find your Desired Place more quickly</h3>
                <p className='mt-2 ml-3'>Posted By ADMIN | March 2018</p>
                <p className='mt-2 ml-3 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus est nam, corporis amet suscipit itaque sed nisi neque aut quia. Omnis minima sit doloremque incidunt laboriosam alias quos nisi!</p>
            </div>
            </div>
            <div className="card h-150 2-screen flex ">
            <div className="card h-130 w-100 bg-white mt-10 border-4 border-indigo-600 ml-10 hover:shadow-2xl">
                <img src="https://static.tnn.in/thumb/msid-117447009,thumbsize-134928,width-1280,height-720,resizemode-75/117447009.jpg" alt="" className='h-73' />
                <h3 className='text-xl mt-3 ml-3 mr-4'>How to find your Desired Place more quickly</h3>
                <p className='mt-2 ml-3'>Posted By ADMIN | March 2018</p>
                <p className='mt-2 ml-3 mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In necessitatibus est nam, corporis amet suscipit itaque sed nisi neque aut quia. Omnis minima sit doloremque incidunt laboriosam alias quos nisi!</p>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Articles