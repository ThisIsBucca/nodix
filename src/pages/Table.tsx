
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
    <div   className=" overflow-x-auto lg:mt-24 origin-top flex flex-col items-center justify-center py-20 bg-pham text-pham-text-primary">
      <h2 className='text-3xl  font-bold text-pham-text-primary'>Nodix <span className='text-pham-text-secondary'>Folks</span></h2>
      <table className="table table-compact w-4/5 mt-10">
        <thead className='border-dashed border-2 border-pham-text-secondary

        '>
          <tr >
            <th></th>
            <th className='text-pham-text-primary'>Name</th>
            <th className='text-pham-text-primary'>Skills</th>
            <th className='text-pham-text-primary'>Phone</th>
          </tr>
        </thead>
        <tbody  >
          <tr className='text-pham-text-primary' >
            <th>1</th>
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
            <td><span className='text-pham-text-primary'>Graphic Designer</span>
            </td>
            <td>
           +255 763429643
            </td>
          </tr>

          <tr className='text-pham-text-primary'>
            <th>2</th>
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
            <td> <span className='text-pham-text-primary'>Frontend Developer</span>
            </td>
            <td>
                +255 712466160
            </td>
          </tr>

          
          <tr className='text-pham-text-primary' >
            <th>3</th>
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
            <td><span className='text-pham-text-primary'>Frontend Developer</span>
            </td>
            <td>
               +255 776986840
            </td>
          </tr>

          <tr className='text-pham-text-primary'>
            <th>4</th>
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
            <td><span className='text-pham-text-primary'>Information security</span>
            </td>
            <td>
            +255 748173761
            </td>
          </tr>

          <tr className='text-pham-text-primary'>
            <th>5</th>
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
            <td> <span className='text-pham-text-primary'>Sales and branding adviser</span>
            </td>
            <td>
                +255 620212429
            </td>
          </tr>

          <tr className='text-pham-text-primary'>
            <th>6</th>
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
            <td> <span className='text-pham-text-primary'>Information Security</span>
            </td>
            <td>
                +255 753372762 
            </td>
          </tr>

          <tr className='text-pham-text-primary'>
            <th>7</th>
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
            <td> <span className='text-pham-text-primary'>Frontend Developer</span>
            </td>
            <td>+255 764690832</td>
          </tr>


          <tr className='text-pham-text-primary'>
            <th>8</th>
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
            <td> <span className='text-pham-text-primary'>Full-stack developer</span>
            </td>
            <td>+255 620464036</td>
          </tr>

          <tr className='text-pham-text-primary'>
            <th>9</th>
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
            <td> <span className='text-pham-text-primary'>Ui/Ux designer</span>
            </td>
            <td>+255 745822503</td>
          </tr>

          <tr className='text-pham-text-primary'>
            <th>10</th>
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
            <td> <span className='text-pham-text-primary'>Backend developer</span>
            </td>
            <td>+255 767104594</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}