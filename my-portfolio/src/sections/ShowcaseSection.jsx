import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import LogoSection from "./LogoSection";

gsap.registerPlugin(ScrollTrigger);


const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50, opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100'
          }
        }
      )
    });
    gsap.fromTo(sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    )
  }, []);
  return (
    <section id="work" ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>
          {/* LEFT */}

          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <video
                src='/videos/e-receipt.mp4'
                controls

                muted
                loop
                className='w-full h-auto object-cover rounded-lg'
              />
              {/* <img src='/images/project1.png' alt='Ryde' /> */}
            </div>
            <div className='text-content'>
              <h2>🧾 Syrian E-Receipt Integration Module for Odoo
              </h2>
              <p className="text-white-50 md:text-xl">
                This custom module seamlessly integrates Odoo Point of Sale (POS) — tailored for restaurants — with the Syrian Ministry of Finance’s e-invoicing system, automating the generation, validation, and real-time submission of tax-compliant receipts to ensure full legal traceability and regulatory compliance.



              </p>

            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                {/* <video
                  src='/videos/sales-dashboard.mp4'
                  controls

                  muted
                  loop
                  className='w-full h-auto object-cover rounded-lg'
                /> */}
                <img src="/images/e-receipt1.png"
                  alt="Library Management Platform" />
              </div>
              <div className='text-content'>
                <h2>Custom Receipt Part1</h2>
                <p className="text-white-50 md:text-xl">

                </p>
              </div>

            </div>
            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#FFEFDB]'>
                {/* <video
                  src='/videos/product-variant.mp4'
                  controls

                  muted
                  loop
                  className='w-full h-auto object-cover rounded-lg'
                /> */}
                <img src="/images/e-receipt2.png"
                  alt="Library Management Platform" />
              </div>
              <h2>Custom Receipt Part2</h2>
              <p className="text-white-50 md:text-xl">
              </p>
            </div>

          </div>

        </div>
        <LogoSection />
        <div className='showcaselayout'>
          {/* LEFT */}

          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <video
                src='/videos/e-invoice.mp4'
                controls

                muted
                loop
                className='w-full h-auto object-cover rounded-lg'
              />
              {/* <img src='/images/project1.png' alt='Ryde' /> */}
            </div>
            <div className='text-content'>
              <h2>🧾 Syrian E-Invoice Integration Module for Odoo
              </h2>
              <p className="text-white-50 md:text-xl">
                The Syrian Tax Invoice module enables seamless integration between Odoo and the Syrian Ministry of Finance’s e-invoicing system, simplifying compliance with local tax laws. It automates the creation, validation, and submission of electronic invoices, enriches them with required tax fields, and provides real-time status tracking — all while supporting credit notes, API configuration, and a view of pending invoices.


              </p>

            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                
                <img src="/images/e-invoice.png"
                  alt="Add API contact information from settings" />
              </div>
              <div className='text-content'>
                <h2>Add API contact information from settings</h2>
                <p className="text-white-50 md:text-xl">

                </p>
              </div>

            </div>
            

          </div>


        </div>
        <LogoSection />
        <div className='showcaselayout'>
          {/* LEFT */}

          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <video
                src='/videos/sales-dashboard.mp4'
                controls

                muted
                loop
                className='w-full h-auto object-cover rounded-lg'
              />
              {/* <img src='/images/project1.png' alt='Ryde' /> */}
            </div>
            <div className='text-content'>
              <h2>📊 Sales Dashboard Module for Odoo
              </h2>
              <p className="text-white-50 md:text-xl">
                  This custom module delivers a dynamic and visually rich sales dashboard directly inside Odoo, empowering managers and sales teams with real-time, data-driven insights. Designed to simplify sales tracking and enhance decision-making, the dashboard transforms raw sales data into actionable KPIs, charts, and trends — all in one intuitive interface.


              </p>

            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                
                <img src="/images/dashboard1.png"
                  alt="Library Management Platform" />
              </div>
              <div className='text-content'>
                <p className="text-white-50 md:text-xl">

                </p>
              </div>

            </div>
            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#FFEFDB]'>
                
                <img src="/images/dashboard2.png"
                  alt="Library Management Platform" />
              </div>
              <p className="text-white-50 md:text-xl">
              </p>
            </div>

          </div>


        </div>
        <LogoSection />
        <div className='showcaselayout'>
          {/* LEFT */}

          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <video
                src='/videos/product-variant.mp4'
                controls

                muted
                loop
                className='w-full h-auto object-cover rounded-lg'
              />
              {/* <img src='/images/project1.png' alt='Ryde' /> */}
            </div>
            <div className='text-content'>
              <h2>🧬 Product Variant Creator (Custom OWL Popup in Odoo)
              </h2>
              <p className="text-white-50 md:text-xl">
                This custom OWL-based module provides a dynamic popup interface for creating new product variants directly from a product template in Odoo. It allows users to visually select attributes (like color, size, etc.) using different UI formats (dropdowns, buttons, color pickers) and automatically generates a unique variant with a smart key to prevent duplication.


              </p>

            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
                {/* <video
                  src='/videos/sales-dashboard.mp4'
                  controls

                  muted
                  loop
                  className='w-full h-auto object-cover rounded-lg'
                /> */}
                <img src="/images/product-variant-1.png"
                  alt="Library Management Platform" />
              </div>
              <div className='text-content'>
                <h2></h2>
                <p className="text-white-50 md:text-xl">

                </p>
              </div>

            </div>
            <div className='project' ref={project2Ref}>
              <div className='image-wrapper bg-[#FFEFDB]'>
                {/* <video
                  src='/videos/product-variant.mp4'
                  controls

                  muted
                  loop
                  className='w-full h-auto object-cover rounded-lg'
                /> */}
                <img src="/images/product-variant-2.png"
                  alt="Library Management Platform" />
              </div>
              <h2></h2>
              <p className="text-white-50 md:text-xl">
              </p>
            </div>

          </div>
          

        </div>
        <LogoSection />
        <div className='showcaselayout'>
          {/* LEFT */}

          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <video
                src='/videos/timesheet-create.mp4'
                controls

                muted
                loop
                className='w-full h-auto object-cover rounded-lg'
              />
              {/* <img src='/images/project1.png' alt='Ryde' /> */}
            </div>
            <div className='text-content'>
              <h2>⏱️ Automatic Activity Timesheet Creation in Odoo

              </h2>
              <p className="text-white-50 md:text-xl">
This module automates timesheet creation in Odoo by generating work entries when users complete activities. Whether linked to project tasks or general actions, the module uses configurable activity types and company settings to log time accurately — reducing manual effort, improving time tracking consistency, and ensuring that all billable or internal efforts are properly recorded.



              </p>

            </div>
          </div>
          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#FFE7EB]">
               
                <img src="/images/timesheet-create-1.png"
                  alt="Library Management Platform" />
              </div>
              <div className='text-content'>
                <h2></h2>
                <p className="text-white-50 md:text-xl">

                </p>
              </div>

            </div>
           
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default ShowcaseSection