import Image from 'next/image'
import elia from  './../../public/elia.jpg'


export default function Motto () {
    return(
        <div className='w-full h-screen bg-pham-btn  z-1 '>

            <div className="w-full flex flex-col items-center justify-center  h-full bg-transparent backdrop-blur-sm gap-10 z-10">
                <h3 className="text-lg font-bold text uppercase text-pham ">Our Motto</h3>

                 <h2 className='text-5xl lg:text-7xl w-3/5 text-center font-bold  text-pham  uppercase '>make tech easy and safe to use</h2>

                 <div className='avatar'>
                <div className='mask  mask-squircle w-20 h-20'>
                  <Image
                    src={elia}
                    alt="nodix Logo"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className='font-bold text-pham'>Elia Adam</div>
                <div className='text-sm opacity-90 text-pham'>CEO of nodix</div>
              </div>
            </div>
             
        </div>
    )
}



