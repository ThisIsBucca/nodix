import Image from 'next/image'
import elia from  './../../public/elia.jpg'


export default function Motto () {
    return(
        <div className='w-full h-screen z-1' data-theme={'wireframe'}>

            <div className="w-full  flex flex-col items-center justify-center  h-full bg-transparent backdrop-blur-sm gap-10 z-10">
                <h3 className="text-lg font-bold text uppercase ">Motto</h3>

                 <h2 className='text-4xl lg:text-7xl w-3/5 text-center font-bold  uppercase '>make tech easy and safe to use</h2>

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
                <div className='font-bold '>Elia Adam</div>
                <div className='text-sm opacity-90 '>CEO of nodix</div>
              </div>
            </div>
             
        </div>
    )
}



