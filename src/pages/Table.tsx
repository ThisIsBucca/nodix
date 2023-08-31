
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image';
import bucca from './../../public/bucca.png'
import boy1  from './../../public/boy1.jpg'
import gal1  from './../../public/gal1.jpg'
import boy2  from './../../public/boy2.jpg'
import gal2  from './../../public/gal2.jpg'
import boy5  from './../../public/boy5.jpg'
import boy3  from './../../public/boy3.jpg'
import mseti  from './../../public/mseti.jpg'
import revaycolizer  from './../../public/Rev.jpg'
import elia from  './../../public/elia.jpg'



export default function Table() {

  const { scrollYProgress } = useScroll();

  return (
    <div   className=" overflow-x-auto lg:mt-24 origin-top flex flex-col items-center justify-center py-20" data-theme={'wireframe'}>
      <h2 className='text-3xl  font-bold'>Nodix <span className='text-error'>Folks</span></h2>
      <table className="table table-compact w-3/5 mt-10">
        <thead className='border-dashed border-2 border-error'>
          <tr >
            <th >Name</th>
            <th >Skills</th>
            <th >Phone</th>
          </tr>
        </thead>
        <tbody  >
          <tr>
            <td>
              <div className='avatar'>
                <div className='mask  mask-squircle w-20 h-20'>
                  <Image
                    src={boy1}
                    alt="nodix Logo"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className='font-bold'>Boniphace</div>
                <div className='text-sm opacity-50'>Tanzania</div>
              </div>
            </td>
            <td><span>Graphic Designer</span>
            </td>
            <td>
           +255 763429643
            </td>
          </tr>

          <tr>
            
            <td>
              <div className='avatar'>
                <div className='mask  mask-squircle w-20 h-20'>
                  <Image
                    src={gal1}
                    alt="nodix Logo"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className='font-bold'>Fatma</div>
                <div className='text-sm opacity-50'>Dar-Tanzania</div>
              </div>
            </td>
            <td> <span>Frontend Developer</span>
            </td>
            <td>
                +255 712466160
            </td>
          </tr>

          
          <tr>
           
            <td>
              <div className='avatar'>
                <div className='mask mask-squircle w-20 h-20'>
                  <Image
                    src={bucca}
                    alt="nodix Logo"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className='font-bold'>Bucca 😎</div>
                <div className='text-sm opacity-50'>Pwani-Tanzania</div>
              </div>
            </td>
            <td><span>Frontend Developer</span>
            </td>
            <td>
               +255 776986840
            </td>
          </tr>

          <tr>
           
            <td>
              <div className='avatar'>
                <div className='mask  mask-squircle w-20 h-20'>
                  <Image
                    src={boy2}
                    alt="nodix Logo"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className='font-bold'>Erick</div>
                <div className='text-sm opacity-50'>Tanzania</div>
              </div>
            </td>
            <td><span>Information security</span>
            </td>
            <td>
            +255 748173761
            </td>
          </tr>

          <tr>
          
            <td>
              <div className='avatar'>
                <div className='mask  mask-squircle w-20 h-20'>
                  <Image
                    src={boy3}
                    alt="nodix Logo"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className='font-bold'>Mwijarubi</div>
                <div className='text-sm opacity-50'>Tanzania</div>
              </div>
            </td>
            <td> <span>Sales and branding adviser</span>
            </td>
            <td>
                +255 620212429
            </td>
          </tr>

          <tr>
           
            <td>
              <div className='avatar'>
                <div className='mask  mask-squircle w-20 h-20'>
                  <Image
                    src={boy5}
                    alt="nodix Logo"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className='font-bold'>Nikodemo</div>
                <div className='text-sm opacity-50'>Mbeya-Tanzania</div>
              </div>
            </td>
            <td> <span>Information Security</span>
            </td>
            <td>
                +255 753372762 
            </td>
          </tr>

          <tr>
           
            <td>
              <div className='avatar'>
                <div className='mask  mask-squircle w-20 h-20'>
                  <Image
                    src={gal2}
                    alt="nodix Logo"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className='font-bold'>Wini</div>
                <div className='text-sm opacity-50'>Mbeya-Tanzania</div>
              </div>
            </td>
            <td> <span>Frontend Developer</span>
            </td>
            <td>+255 764690832</td>
          </tr>


          <tr>
           
            <td>
              <div className='avatar'>
                <div className='mask  mask-squircle w-20 h-20'>
                  <Image
                    src={revaycolizer}
                    alt="nodix Logo"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className='font-bold'>Revaycolizer</div>
                <div className='text-sm opacity-50'>Dar-Tanzania</div>
              </div>
            </td>
            <td> <span>Full-stack developer</span>
            </td>
            <td>+255 620464036</td>
          </tr>

          <tr>
           
            <td>
              <div className='avatar'>
                <div className='mask  mask-squircle w-20 h-20'>
                  <Image
                    src={mseti}
                    alt="nodix Logo"
                    priority
                  />
                </div>
              </div>
              <div>
                <div className='font-bold'>Mseti</div>
                <div className='text-sm opacity-50'>Mwanza-Tanzania</div>
              </div>
            </td>
            <td> <span>Ui/Ux designer</span>
            </td>
            <td>+255 745822503</td>
          </tr>

          <tr>
            <td>
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
                <div className='font-bold '>Elijah</div>
                <div className='text-sm opacity-50'>Mbeya-Tanzania</div>
              </div>
            </td>
            <td> <span >Backend developer</span>
            </td>
            <td>+255 767104594</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}