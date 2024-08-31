import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className ='w-full h-28 flex bg-white'>
           <div className='w-64 h-24 m-2'>  
           <img className="h-full w-full" src="VNS2.png"></img>
          </div>                                         
          <div>
          <a href="" className='border-solid border-black'>
              <button class="h-24 w-24 m-2 bg-bllue-400 border-2 border-yellow-300 hover:rounded-xl text-xl font-semibold">
               HOME
                      </button>
           </a>
          </div>
          <div>
          <a href="https://65204b4345037327880bf4b6--graceful-seahorse-0ff0ce.netlify.app/">
          <button class="h-24 w-32 m-2 bg-white hover:bg-yellow-400 border-2 border-yellow-300 hover:rounded-xl active:bgyellow-700  text-xl font-semibold justify-items-center">
               PACKAGES
                  </button>
           </a>
          </div>
          <div>
          <a href="https://652042bd0cce3c1ebc53ccc6--gilded-paletas-dad543.netlify.app/">
          <button class="h-24 w-32 m-2 bg-white hover:bg-yellow-400 border-2 border-yellow-300 hover:rounded-xl  text-xl font-semibold justify-items-center">
               ABOUT US
                </button>  
           </a>  
           <a href="https://652043dfaab2de237f466309--fascinating-snickerdoodle-2cb914.netlify.app/">
          <button class="h-24 w-32 m-2 bg-white hover:bg-yellow-400 border-2 border-yellow-300 hover:rounded-xl active:bgyellow-700  text-xl font-semibold justify-items-center">
               CONTACT US
                  </button>
            </a> 
          </div>
          <div className='ml-auto mr-6'>
          <div className='ml-auto mr-6'>
          <button class="h-10 w-24 m-2 bg-yellow-400 hover:bg-sky-400 hover:text-black text-xl font-bold rounded-md">
                Sign-Up
              </button>
          </div>
          <div>
          <button class="h-10 w-24 m-2 bg-yellow-400 hover:bg-sky-400 hover:text-black text-xl font-bold rounded-md">
                Login 
               </button>
          </div>
          </div>
      </div>
      </div>
  )
}

export default Navbar