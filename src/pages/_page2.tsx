import React from 'react'
import Special from './Special'

export default function Page2() {

  return (

    <div className='w-full lg:mb-24 h-auto flex items-center justify-center'>
      <div className='w-full h-auto  pb-10 pt-10   flex gap-2  flex-col  justify-center items-center  lg:gap-10 bg-pham lg:h-screen  radial' id='feature '>

        <h4 className='font-bold text-pham-text-primary text-sm'>SERVICES</h4>

        <h2 className='text-xl w-3/5 lg:w-full text-center text-pham-text-primary lg:text-3xl font-bold'> <span className='border-b-4 border-pham-text-secondary'>And this is what</span> makes nodix special</h2>

        <section className='w-full h-auto  pb-4  flex flex-col  lg:flex-wrap lg:flex-row items-center  lg:justify-center gap-6 lg:items-start  lg:mb-0 lg:pb-0'>

          <Special
            heading='Web development'
            ctent='Transform your vision into a dynamic online presence through responsive and user-friendly websites that deliver seamless experiences.'
          />

          <Special
            heading='Copywriting'
            ctent={`Craft compelling and impactful content that effectively communicates your message, engages your audience, and drives desired actions.`}
          />

          <Special
            heading='App Development'
            ctent={`From concept to execution, we create powerful and intuitive applications that cater to your specific needs, enhancing user engagement and satisfaction.`}
          />



          <Special
            heading='Motion Graphics'
            ctent='Elevate your visual storytelling with captivating animations and graphics that convey complex ideas and messages in an engaging and memorable way.'
          />

          <Special
            heading='Illustration'
            ctent={`Capture attention and convey your ideas artistically through custom illustrations that add a unique and authentic touch to your projects.`}
          />

          <Special
            heading='Security Awareness Training'
            ctent={`Empower your team to recognize and mitigate security risks with comprehensive training that fosters a culture of vigilance and protection.`}
          />

          <Special
            heading='Security Audits'
            ctent={`Strengthen your defenses by identifying vulnerabilities and assessing your security infrastructure to ensure robust protection against threats.`}
          />

          <Special
            heading='Penetration Testing'
            ctent={`Put your systems to the test with controlled simulated attacks, uncovering potential weaknesses and enabling you to reinforce your security measures.`}
          />

          <Special
            heading='Vulnerability Assessment'
            ctent={`Pinpoint potential vulnerabilities within your systems and applications, allowing you to proactively address weaknesses and enhance security.`}
          />

          <Special
            heading='AI(Artificial Intelligence)'
            ctent={`Harness the power of AI to streamline processes, gain insights, and make data-driven decisions that drive innovation and efficiency.`}
          />

          <Special
            heading='IT Consulting'
            ctent={`Leverage expert guidance to optimize your IT strategies and operations, ensuring technology aligns seamlessly with your business goals.`}
          />

          <Special
            heading='Networking'
            ctent={`Build and maintain robust network architectures that facilitate smooth communication, data sharing, and collaboration within your organization.`}
          />


        </section>

      </div>

    </div>


  )
}
