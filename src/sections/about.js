import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useInView } from 'react-intersection-observer'
import RicePres from "../images/me_rice_copy.webp"
import Fisher from '../images/fisher'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function About() {

    const [learningRef, leaningInView] = useInView({
        triggerOnce: true,
        threshold: .1
    })

    const [fisherRef, fisherInView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    })

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.01,
    });

    const springProps = useSpring({
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { tension: 280, friction: 60 },
        delay: 700,
    });

    const learningSpring = useSpring({
        transform: leaningInView ? 'translateY(0)' : 'translateY(500px)',
        config: { tension: 280, friction: 60 },
        delay: 700,
        opacity: leaningInView ? 1 : 0,
    });
  
  return (
    <div className='w-full h-full flex-col space-y-48'>
      <div className='h-full w-full flex flex-grow mt-48 md:mt-56 lg:mt-20 relative justify-end font-reddit z-10'>
        {/* Make this div animate up on load */}
        <animated.div
          ref={ref}
          style={springProps}
          className='w-64 h-64 rounded-full bg-[#B8893D] absolute -right-5 md:right-5 -top-20 md:-top-24'
        ></animated.div>
        <animated.div ref={fisherRef} className='w-64 h-64 bg-[#476B6B] absolute -bottom-10 left-[10%] -bottom-10 z-20'>
          <Fisher className={"absolute hidden sm:flex w-48 h-48 -left-[45%] -top-[45%] dark:text-[#F5F5DC] text-[#2C2C2C] "} onLoad={fisherInView}/>
        </animated.div>
        <div className='w-[98%] sm:w-[79.98%] h-full p-1 pb-4 flex w-full bg-[#824747] dark:bg-[#4B3F3A] z-30 rounded-l-lg md:rounded-lg relative '>
          <div className='flex flex-col h-full w-full pb-10'>
            {/* Intro Section */}
            <div className='text-5xl font-bold mt-10 md:mt-24 text-center italic text-[#EAE3D2]'>Who's this guy?</div>
            <div className='flex flex-col lg:flex-row space-x-4 mx-auto justify-between items-center w-[95%] h-full mt-16'>
              <h1 className='text-xl w-full lg:w-1/2 md:h-full xl:h-1/2 text-[#EAE3D2] inline justify-center mx-auto items-center p-2 pt-8 lg:p-10 border-t-2 md:border-r-2 border-black' >
                I am Justin Aguirre, a student at Rice University, Class of 2027 (EOL RRF). I am originally from the bustling city of Barksdale, Texas. All jokes aside, growing up in Barksdale enabled me to independently pursue a field not commonly taught in rural Texas: Computer Science. I am thrilled to be studying Computer Science at Rice University. Please feel free to contact me for anything! <span className='inline font-extrabold text-[#D6CEC0]'>Including deep conversations about my favorite show, The Office.</span>
              </h1>
              <div className='h-1/2 w-1/6 lg:w-1/4 hidden lg:flex'>
                <img src={RicePres} className='rounded-xl h-full'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Learning Section */}
      <div ref = {learningRef} className='h-full lg:p-5 flex flex-col justify-between items-center lg:px-12 w-full '>
        <div className='text-7xl font-bold italic font-reddit text-black dark:text-[#EAE3D2] text-center py-4'>Fun Facts</div>
        <animated.div style={learningSpring} className='flex justify-center items-center mt-6 w-full relative'>
          <div className='w-full bg-[#B88A3D] dark:bg-[#7A5E2E] duration-500 h-32 absolute z-0 rounded-lg'></div>
          <div className='flex z-30 duration-500 bg-[#F5F5DC] dark:bg-[#2C2C2C] shadow-xl flex-col md:flex-row w-[90%] lg:w-3/4 text-[#4B3F3A] dark:text-[#EAE3D2]'>
            <div className='w-full md:w-1/3 flex flex-col p-3 lg:flex-grow  rounded-l-lg border-2 dark:border-white border-black'>
              <div className='flex flex-row text-2xl font-reddit'>
                <div className='p-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#E1B16A] dark:text-[#B8893D] ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>                
                </div>
                <div className='w-full px-2'>I love learning new things</div>
              </div>
              <div className='flex justify-center items-center font-reddit text-center h-full '>
                <div className='relative corner-borders w-5/6 p-2'>
                  I like to think that one of the reasons I got into computer science was in attempt to solve an unsolveable puzzle. The thought of being able to create a solution to any problem is mind-blowing!
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 flex flex-col p-3 lg:flex-grow  border-r-2 border-l-2 sm:border-r-0 sm:border-l-0 sm:border-t-2 sm:border-b-2 dark:border-white border-black '>
              <div className=' text-2xl flex flex-row font-reddit'>
                    <div>
                        <svg className="text-black dark:text-blue-200 h-5/6" width="90px" height="90px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M266.43 53.6046C265.826 53.3126 265.145 53.246 264.485 53.1153C264.042 53.0288 263.577 53 263.105 53C262.305 53 261.488 53.0847 260.73 53.1225C257.949 53.2541 255.174 53.4424 252.393 53.601C248.478 53.7136 244.561 53.6325 240.645 53.7172C236.092 53.8154 231.557 54.0686 227.014 54.3506C224.447 54.4263 221.88 54.4172 219.309 54.4497C216.332 54.4911 213.355 54.6605 210.378 54.8236C208.098 54.9047 205.829 54.9173 203.547 54.865C201.382 54.8155 199.216 54.7065 197.051 54.6749C192.346 54.6073 187.645 54.583 182.939 54.5055C178.101 54.4281 173.274 54.4776 168.432 54.5974C163.86 54.7137 159.283 54.8326 154.707 54.8119C152.59 54.8011 150.472 54.6569 148.355 54.5866C147.184 54.5479 146.017 54.5623 144.85 54.5794C144.028 54.5902 143.207 54.601 142.39 54.5902C141.256 54.5758 140.24 54.8011 139.346 55.5119C138.473 56.2021 137.917 57.2229 137.828 58.3032" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M269.804 147.131C270.138 146.423 270.386 145.728 270.405 144.994C270.426 144.398 270.332 143.707 270.205 143.098C270.044 142.286 268.158 65.3936 267.99 63.0228C267.877 61.4876 267.803 59.9556 267.501 58.4288C267.227 57.0506 266.826 55.6914 266.431 54.3258" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M140.48 55.6516C139.649 55.8254 138.898 56.3752 138.411 57.1649C137.882 58.0245 137.757 58.9795 137.862 60.0015C137.991 61.2295 138.068 62.4556 138.128 63.6884C138.242 70.0399 139.118 130.121 139.273 132.881C139.352 135.033 139.411 137.187 139.505 139.342C139.617 141.954 139.71 144.567 140.201 147.131" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M140.478 149.783C142.039 150.036 143.553 150.171 145.125 150.154C146.69 150.137 259.181 152.632 261.925 152.422C263.016 152.339 264.103 152.226 265.19 152.112C265.668 152.06 266.146 152.016 266.62 151.938C267.357 151.816 268.517 151.197 269.079 150.607" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M194.567 97.0262C194.211 93.527 194.756 89.3005 194.904 86.1448" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M218.03 97.0262C218.064 93.6313 218.094 90.2581 218.199 86.8701" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M278.045 263.801C278.217 261.721 293.122 200.108 291.95 199.5C291.567 199.301 261.809 174.227 243.245 174.787C218.872 175.523 185.383 176.66 159.989 177.531C139.35 178.239 108.037 213.019 107.332 213.019" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M107.333 213.021C107.988 215.621 116.719 257.102 116.992 259.566C117.096 260.517 107.206 212.647 107.333 213.021Z" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M169.644 266.452C169.531 268.854 169.347 277.005 169.205 279.401C169.064 281.786 169 284.176 168.905 286.565C168.707 291.518 168.082 327.674 167.88 330.335C167.692 332.782 167.494 335.233 167.418 337.684C167.371 339.12 167.388 340.566 167.562 341.995C167.622 342.501 155.809 344.326 155.061 344.674" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M239.912 345.847C239.629 345.821 233.144 345.799 230.693 346C230.187 346.04 232.976 304.826 232.908 295.185C232.841 285.569 232.799 277.395 232.946 267.778" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M282.835 281.842C283.902 281.949 284.983 281.637 285.821 280.975C286.745 280.248 287.137 279.304 287.348 278.185C287.576 276.966 287.808 275.747 288.03 274.526C288.12 274.043 288.195 273.555 288.27 273.068C288.579 271.051 288.007 268.865 286.239 267.639C284.769 266.623 283.059 266.105 281.41 265.453C280.313 265.015 279.215 264.577 278.118 264.142C276.893 263.655 275.635 263.235 274.361 262.87C273.259 262.554 272.145 262.279 271.033 262.036C270.548 261.931 270.065 261.83 269.583 261.733C268.561 261.534 267.427 261.223 266.392 261.425C264.929 261.709 263.721 262.277 262.657 263.32C261.599 264.357 260.752 265.515 259.966 266.762C259.363 267.72 259.042 268.707 259.229 269.85C259.403 270.933 260.014 271.918 260.911 272.564" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M130.999 275.361C131.944 274.854 132.665 273.991 132.989 272.974C133.349 271.854 133.146 270.852 132.694 269.807C132.202 268.669 131.713 267.529 131.213 266.393C131.018 265.942 130.807 265.496 130.597 265.049C129.725 263.205 128.028 261.713 125.876 261.685C124.089 261.663 122.382 262.191 120.65 262.572C119.495 262.822 118.34 263.072 117.187 263.325C115.899 263.606 114.622 263.961 113.361 264.371C112.27 264.725 111.193 265.119 110.135 265.54C109.675 265.724 109.218 265.91 108.763 266.099C107.805 266.505 106.691 266.882 105.946 267.628C104.892 268.681 104.208 269.827 103.91 271.287C103.612 272.738 103.558 274.171 103.604 275.644C103.64 276.775 103.925 277.773 104.72 278.616C105.47 279.417 106.527 279.892 107.633 279.926" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M165.105 182.088C164.455 183.012 164.392 183.93 164.459 185.014C164.473 185.227 164.486 185.44 164.498 185.652C164.897 194.868 164.443 204.092 164.775 213.307C164.95 218.247 165.125 223.183 165.206 228.122C165.28 232.668 165.346 237.236 164.971 241.771C164.74 244.57 164.508 247.366 164.409 250.173C164.312 252.904 164.297 255.71 164.522 258.439C164.613 259.562 164.894 260.799 165.644 261.667C166.669 262.85 167.967 263.389 169.514 263.449C170.543 263.491 171.605 263.29 172.626 263.148C173.808 262.985 174.981 262.765 176.142 262.482C177.418 262.169 205.149 261.274 207.054 261.337C209.226 261.408 211.369 261.55 213.53 261.724C217.14 262.014 220.729 262.588 224.336 262.904C226.301 263.073 228.265 263.229 230.234 263.346C231.779 263.436 233.364 263.412 234.885 263.715L235.18 263.779C236.135 263.867 236.63 263.679 237.51 263.385C238.59 263.028 239.492 261.883 239.871 260.827C240.298 259.642 240.101 258.338 239.997 257.094C239.849 252.698 239.931 248.324 240.193 243.933C240.262 242.788 241.914 229.918 242.755 215.072C243.632 199.601 243.699 182.138 243.728 181.34C243.752 180.581 243.784 179.823 243.816 179.068C243.868 177.694 244.072 176.252 243.447 174.973" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M283.949 205.391C286.282 208.52 299.662 197.539 299.439 198.099" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M116.995 215.722C116.725 215.722 111.393 213.844 101 210.089" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M174.947 302.283C173.193 302.277 171.436 302.249 169.681 302.249C169.111 302.249 168.541 302.253 167.971 302.26C165.363 302.303 162.918 302.866 160.363 303.575" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M241.237 302.283C239.483 302.277 237.726 302.249 235.971 302.249C235.401 302.249 234.831 302.253 234.261 302.26C231.653 302.303 229.208 302.866 226.653 303.575" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M269.08 95.4253L282.629 96.7511L291.619 95.4253" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M131.2 94.7625H112.639" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M291.95 86.4895V102.782" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M111.824 86.4895V102.782" stroke="currentColor" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </div>
                <div className='w-full'>
                  I really enjoy hardware projects
                </div>
              </div>
              <div className='flex justify-center items-center font-reddit text-center h-full '>
                <div className='relative corner-borders w-5/6 p-2'>
                  The first project that got me into computer science was actually an autoamous RC car. This car used HC-SR04 ultrasonic sensors controlled with an L298 motor controller and Arduino. 
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/3 rounded-r-lg flex flex-col p-3 lg:flex-grow xl:h-96 border-2 dark:border-white border-black'>
              <div className=' text-xl flex w-full flex-row font-reddit'>
                    <div className='p-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>                                
                    </div>
                <div className='w-full flex items-center justify-center'>
                  I LOVE The Office...
                </div>
              </div>
              <div className='flex justify-center items-center font-reddit text-center h-full'>
                <div className='relative corner-borders w-3/4 p-2'>
                  Like seriously, I think I've watched the series four times.
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  )
}

export default About
