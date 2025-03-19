import React from 'react'

function Footer() {
  return (
    <div className='bg-white'>
        <div className="footer flex h-35 w-screen bg-white">
                <h2 className='text-black text-3xl mt-15 ml-50'>List<span className='text-red-700'>Race</span></h2>
                    <ul className="task flex justify-between ml-100">
                        <a href="" className='mr-5 text-sm text-black mt-15'>HOW IT WORKS</a>
                        <a href="" className='mr-5 text-sm text-black mt-15'>EXPLORE</a>
                        <a href="" className='mr-5 text-sm text-black mt-15'>REVIEW</a>
                        <a href="" className='mr-5 text-sm text-black mt-15'>BLOG</a>
                        <a href="" className='mr-5 text-sm text-black mt-15'>CONTACT US</a>
                        <a href="" className='mr-40 text-sm text-black mt-15'>MY ACCOUNT</a>
                    </ul>
        </div>
        <hr/>
        <div className="foot flex h-20 w-screen mt-10">
            <p className='ml-10 text-md'>©copyright. designed and developed by themesine</p>
            <ul>
                <a href="" className='mt-10 ml-160 mr-5'><i class="fa-solid fa-phone"></i> +1 (222) 777 8888</a>
                <a href="" className='mr-5 h-5 w-5'><i class="fa-brands fa-facebook-f"></i></a>
                <a href="" className='mr-5'><i class="fa-brands fa-twitter"></i></a>
                <a href="" className='mr-5'><i class="fa-brands fa-linkedin-in"></i></a>
            </ul>
        </div>
    </div>
  )
}

export default Footer;