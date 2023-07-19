import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaLongArrowAltDown, FaPlus } from 'react-icons/fa'
import List from './_liist';

export default function Page3() {

    const quest1 = 'About nodix company.';
    const quest2 = 'Mission ';
    const quest3 = 'Vision';
    const quest4 = 'Goal';


    return (
        <div className='w-full h-auto flex gap-10 flex-col justify-center items-center bg-page1-bg relative py-12 z-[15]' id='faqs'>

            <h2 className='text-3xl  font-bold text-slate-100'>FAQS</h2>

            <ul className='w-4/5'>

                <List
                    quest={quest1}
                    borderLine='border-x-0 '
                    sama={<><p className='text-slate-400'> NODIX is a startup company that specializes in technology product development. The company&apos;s
                        mission is to provide innovative technology products to meet demands of the market. The
                        company&apos;s focus is on developing products that are user-friendly, efficient, and cost-effective.
                        The company&apos;s core competencies include product design, development, and engineering. The
                        team at NODIX is composed of experienced engineers and designers who have a wealth of
                        knowledge and expertise in the technology industry. We use the latest tools and technologies
                        to create products that are of the highest quality and meet the needs of the customers.</p>

                        <p className='mt-4 text-slate-400'> NODIX has a strong emphasis on R&D (research and development). The company is constantly
                            researching new technologies and trends in the market to ensure that our products are ahead
                            of the curve. This approach has led to the development of several successful products that have
                            been well-received by the market.</p></>}
                />

                <List quest={quest2} borderLine='border-x-0 border-t-0' sama={
                    <p className='text-slate-400'>
                        Our mission is to develop great and useful technology product that could make a positive
                        impact on the world. We are committed to play a leading role in shaping the technology
                        landscape of tomorrow, and we are excited about the opportunities and challenges that lied
                        ahead.
                    </p>
                } />

                <List
                    quest={quest3}
                    borderLine='border-x-0 border-t-0'
                    sama={
                        <p className='text-slate-400'>Our vision is well supported by our mission. Our vision is to become a leading technology 
                        company that deliver innovative software, web and hardware solutions that empower 
                        individual and organizations to achieve their goals and improve their performance. We strive to 
                        be at the forefront of what is possible and delivering cutting-edge products and services that 
                        meet the evolving needs of our customers.</p>
                    }
                />

                <List
                    quest={quest4}
                    borderLine='border-x-0 border-t-0'
                    sama={
                        <p className='text-slate-400'>Our goal is to build long-term partnership with our clients, based on trust, mutual respect, and 
                        a shared commitment to creating customized solutions that meet the specific needs of each 
                        client, and we take great pride in delivering high-quality products that exceed expectations.
                        Nodix products and services can help its clients achieve their technology goals and improve 
                        their competitiveness in the market. The company&amps;s focus on innovation and its ability to 
                        deliver high-quality solutions on-time and on-budget makes it an ideal partner for companies 
                        looking to develop new technology products</p>
                    }
                />

            </ul>
        </div>
    )
}
