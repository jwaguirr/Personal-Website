import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const randomClouds = (numClouds, width, height) => {
  const clouds = [];

  const checkOverlap = (x1, y1, size1, x2, y2, size2) => {
    const rect1 = { left: x1, right: x1 + size1, top: y1, bottom: y1 + size1 };
    const rect2 = { left: x2, right: x2 + size2, top: y2, bottom: y2 + size2 };

    return !(
      rect1.left > rect2.right ||
      rect1.right < rect2.left ||
      rect1.top > rect2.bottom ||
      rect1.bottom < rect2.top
    );
  };

  for (let i = 0; i < numClouds; i++) {
    let x, y, size, overlap;

    do {
      x = Math.random() * (width -150); // Adjusted to avoid positioning outside the container
      y = Math.random() * (height - 750);
      size = 300 + Math.random() * 100;
      overlap = clouds.some(cloud => checkOverlap(x, y, size, cloud.x, cloud.y, cloud.size));
    } while (overlap);

    clouds.push({ x, y, size });
  }

  return clouds;
};

const CloudSVG = ({ x, y, size }) => (  
  <svg className="absolute fill-current text-blue-200" style={{ top: `${y}px`, left: `${x}px`, width: `${size}px`, height: `${size}px` }} viewBox="0 -64.71 306.67 306.67" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs></defs> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M41.28,83.23c1.26-3.3,2.46-6.2,3.5-9.16,4-11.39,13-16.23,24-18.13,3.34-.58,6.85-.22,10.29-.26,1.94,0,3.88,0,6.38,0,.25-4.44.71-8.36.63-12.28-.12-5.51,2.1-9.82,5.47-14C106.7,10.54,126.84,1.49,150.4.08c11.91-.71,23.08,3.37,33.37,9.52,9.66,5.78,16.42,14.08,21.2,24.14.72,1.52,1.6,3,2.64,4.88,10.77-2.21,21.08-2,30,5.6a44.11,44.11,0,0,1,15.49,27.37c2.33,0,4.26,0,6.18,0,5.7.06,11.38-.22,17,1.34,8.39,2.3,15.06,6.66,19.71,14.09,6.67,10.63,11,21.94,10.65,34.73-.31,11.72-5,20.84-15,27.4a67.82,67.82,0,0,1-25.27,10.22,218.2,218.2,0,0,1-23.67,2.75,38,38,0,0,1-10.19-1.18c-4.74-1-9,0-13.36,1.87-7.58,3.28-15.13,6.66-22.88,9.49A70.68,70.68,0,0,1,181.39,176a120.42,120.42,0,0,1-33.33.09c-10.09-1.48-18.93-6.24-27.31-11.86-1.65-1.11-3.32-2.19-5.28-3.5-2.93,1.68-5.78,3.5-8.79,5-2.82,1.4-5.77,2.52-8.71,3.64a57.71,57.71,0,0,1-18.44,3.66c-9.45.38-18.84.75-28.17-1.66-22.79-5.86-39.45-19.08-48.67-40.85-3.94-9.29-3.27-19.06.18-28.51a17.64,17.64,0,0,1,3.66-5.71C14.28,88,23.7,83.12,35.33,83.23Zm74.85,64.11c5.7,6.59,13,10.5,20.82,13.3,11.57,4.11,23.62,4.44,35.66,3.24,10.28-1,20.41-3,29.54-8.32,3.21-1.87,6.57-3.5,9.78-5.37a10.77,10.77,0,0,1,8.24-1.24c15.54,3.57,30.82,1.14,45.89-2.59,6.88-1.71,13.84-3.7,19.79-8,4.81-3.49,8.72-7.76,9.77-13.63,1.31-7.34,1.88-14.8-2.24-21.72a39.64,39.64,0,0,1-2.82-6.26C288,90,282.66,86.4,276.33,84A38.16,38.16,0,0,0,268,82c-7.15-1-14.29-1.24-21.14,1.71-2.16.93-3.92.23-5.35-1.45s-1.78-3.6,0-5.33,1.52-3.6,1.32-5.6c-1-9.85-6-17.08-14.47-22-2.54-1.48-5.05-2.48-8.1-2.08-2.81.37-5.8-.14-8.49.56-2.93.77-5.62,2.49-8.24,3.72-3.39-1.06-4.78-3.19-5.2-6.38-.35-2.78-.65-5.82-2-8.21-5.85-10.59-14.1-18.42-25.84-22.6a53,53,0,0,0-31.18-1.54A69.85,69.85,0,0,0,101.9,35.59a23.63,23.63,0,0,0-5.79,12.27c-.53,4-.71,8-1.18,12-.61,5.13-3,7-8,6.62-3.7-.27-7.46-1-11.12-.63-13.51,1.25-20.39,6.81-23.27,18.92-.33,1.38-.49,2.81-.8,4.2a10,10,0,0,1-4.48,6.75c-1.77-.38-4-.81-6.14-1.32-10.94-2.54-25.68,5.4-29.34,15.87a17.19,17.19,0,0,0-.75,3.34,30.5,30.5,0,0,0,8,26.11C28.4,150.08,40.12,156,53.62,158.91c10,2.19,19.91,1.31,29.91.31,8.14-.81,15.72-2.95,22.48-7.67A23.84,23.84,0,0,1,116.13,147.34Z"></path> <path class="cls-1" d="M116.13,147.34A23.84,23.84,0,0,0,106,151.55c-6.76,4.72-14.34,6.86-22.48,7.67-10,1-19.93,1.88-29.91-.31-13.5-3-25.22-8.83-34.66-19.24a30.5,30.5,0,0,1-8-26.11,17.19,17.19,0,0,1,.75-3.34c3.66-10.47,18.4-18.41,29.34-15.87,2.18.51,4.37.94,6.14,1.32a10,10,0,0,0,4.48-6.75c.31-1.39.47-2.82.8-4.2,2.88-12.11,9.76-17.67,23.27-18.92,3.66-.34,7.42.36,11.12.63,5.07.37,7.42-1.49,8-6.62.47-4,.65-8,1.18-12a23.63,23.63,0,0,1,5.79-12.27,69.85,69.85,0,0,1,37.45-22.85,53,53,0,0,1,31.18,1.54c11.74,4.18,20,12,25.84,22.6,1.31,2.39,1.61,5.43,2,8.21.42,3.19,1.81,5.32,5.2,6.38,2.62-1.23,5.31-2.95,8.24-3.72,2.69-.7,5.68-.19,8.49-.56,3.05-.4,5.56.6,8.1,2.08,8.51,4.95,13.47,12.18,14.47,22,.2,2,.33,4-1.32,5.6s-1.49,3.58,0,5.33,3.19,2.38,5.35,1.45c6.85-3,14-2.67,21.14-1.71a38.16,38.16,0,0,1,8.32,2c6.33,2.4,11.68,6,14.23,12.73a39.64,39.64,0,0,0,2.82,6.26c4.12,6.92,3.55,14.38,2.24,21.72-1.05,5.87-5,10.14-9.77,13.63-6,4.32-12.91,6.31-19.79,8-15.07,3.73-30.35,6.16-45.89,2.59a10.77,10.77,0,0,0-8.24,1.24c-3.21,1.87-6.57,3.5-9.78,5.37-9.13,5.33-19.26,7.3-29.54,8.32-12,1.2-24.09.87-35.66-3.24C129.11,157.84,121.83,153.93,116.13,147.34Z"></path> </g> </g> </g></svg>
);

const CloudSVG2 = ({ x, y, size }) => (
  <svg className={`absolute fill-current text-blue-200 `} style={{ top: `${y}px`, left: `${x}px`, width: `${size}px`, height: `${size}px` }} viewBox="0 -56.89 259.31 259.31" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier2" stroke-width="0"></g><g id="SVGRepo_tracerCarrier2" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier2"> <defs></defs> <g id="Layer_22" data-name="Layer 22"> <g id="Layer_1-22" data-name="Layer 12"> <path d="M45.15,79.62A55.75,55.75,0,0,0,44.08,74c-4.16-13.68-.83-26.31,6.69-37.61A89.27,89.27,0,0,1,75.49,11.55c8.07-5.4,17.05-8,26.28-10,18.31-3.94,35.25-.28,50.77,10,8.07,5.34,13.84,12.84,18.35,21.24,3.78,7.05,6.8,14.46,7.84,22.25,1.81,1.63,3.46.74,5.06.34a34.4,34.4,0,0,1,26.48,3.7,30.46,30.46,0,0,1,12.79,13.46c1.71,3.59,3.15,7.3,4.91,11.42a45.47,45.47,0,0,0,6.6-.06c4.84-.7,8.85.92,12.94,3.36,11.12,6.61,13.05,16.49,11.16,26.5-2,10.67-7.72,18.76-17.9,23.69-12.22,5.92-25.18,7.69-38.4,7.61-12.88-.07-25.75-1-38.62-1.65-14.27-.78-28.53-2.13-42.81-2.48A195.75,195.75,0,0,0,91.8,142.4c-18.8,2.38-37.59,3.91-56.52,2.74a84.89,84.89,0,0,1-14.35-2.51c-8.43-2-13.66-7.76-17.36-15.36C.59,121.14-.16,114.78,0,108.1A20.59,20.59,0,0,1,5.11,94.72C14.69,83.8,26.29,77.42,41.4,79.61A35.79,35.79,0,0,0,45.15,79.62Zm172,13.58c-.48-2.65-.88-5.15-1.39-7.62-1.92-9.29-6.65-16.17-15.84-19.83-5.41-2.15-10.43-2.62-15.66.12a53.59,53.59,0,0,1-7,3.2c-4.37,1.53-7.15,0-8.45-4.55a11.51,11.51,0,0,1-.57-3.37c.16-7.43-2.78-14.08-5.8-20.49C156.15,27.43,146.26,18,132.21,13c-12.08-4.29-24.09-4.14-36.27-.67a51.11,51.11,0,0,0-14.71,6.84C73.26,24.51,67,31.55,61,38.85A36,36,0,0,0,53.29,55c-1.53,7.89-1.79,15.91,3.14,23.19a40.19,40.19,0,0,1,3.91,8.58,4.47,4.47,0,0,1-4.92,6,17,17,0,0,1-5.63-2C38.06,84.12,24.52,89,17,97.25c-2.09,2.27-4.33,5-5,7.85-1.91,8.17-.1,15.86,4.95,22.69,3.3,4.46,8.11,6.3,13.24,7.23a99.6,99.6,0,0,0,29.1,1c13.09-1.49,26.17-3.39,39.3-4.17a418.3,418.3,0,0,1,69.52,1.78,279,279,0,0,0,46.34,1.2c7.33-.43,14-2.74,20.49-5.9a20.7,20.7,0,0,0,7.64-6.76c3.09-4.29,4.55-9.22,5.74-14.25a8.75,8.75,0,0,0-2.6-8.65c-1-1-2-2.06-3.09-3-3.7-3.07-7.55-4.91-12.61-3C226.23,94.77,222.16,94.92,217.13,93.2Z"></path> <path class="cls-1" d="M217.13,93.2c5,1.72,9.1,1.57,12.87.14,5.06-1.93,8.91-.09,12.61,3,1.09.92,2.07,2,3.09,3a8.75,8.75,0,0,1,2.6,8.65c-1.19,5-2.65,10-5.74,14.25a20.7,20.7,0,0,1-7.64,6.76c-6.49,3.16-13.16,5.47-20.49,5.9a279,279,0,0,1-46.34-1.2,418.3,418.3,0,0,0-69.52-1.78c-13.13.78-26.21,2.68-39.3,4.17a99.6,99.6,0,0,1-29.1-1c-5.13-.93-9.94-2.77-13.24-7.23-5-6.83-6.86-14.52-4.95-22.69.67-2.86,2.91-5.58,5-7.85C24.52,89,38.06,84.12,49.79,90.8a17,17,0,0,0,5.63,2,4.47,4.47,0,0,0,4.92-6,40.19,40.19,0,0,0-3.91-8.58C51.5,70.88,51.76,62.86,53.29,55A36,36,0,0,1,61,38.85c6-7.3,12.26-14.34,20.23-19.71A51.11,51.11,0,0,1,95.94,12.3c12.18-3.47,24.19-3.62,36.27.67,14,5,23.94,14.46,30.17,27.69,3,6.41,6,13.06,5.8,20.49a11.51,11.51,0,0,0,.57,3.37c1.3,4.51,4.08,6.08,8.45,4.55a53.59,53.59,0,0,0,7-3.2c5.23-2.74,10.25-2.27,15.66-.12,9.19,3.66,13.92,10.54,15.84,19.83C216.25,88.05,216.65,90.55,217.13,93.2Z"></path> </g> </g> </g></svg>
)

const ParallaxClouds = () => {
  const clouds = randomClouds(4, 1500, 1300); // Adjust width and height as needed

  const scrolling = (e) =>{
    console.log("Scrolling", e)
  }

  return (
    <div className=''>
      <Parallax pages={2}>
        <ParallaxLayer sticky={true}>
          {/* <div className="bg-white h-96 w-[.1rem] absolute left-[3.35%] top-0"></div> */}
        </ParallaxLayer>
        <ParallaxLayer className='relative' >
          <div className='relative w-full h-full border-2'>
            {clouds.map((cloud, index) => {
              const type = Math.round(Math.random(2))
              return ( (type == 1) ? <CloudSVG2 key={index} x={cloud.x} y={cloud.y} size={cloud.size} /> : <CloudSVG key={index} x={cloud.x} y={cloud.y} size={cloud.size} /> )
            })}
            <div className='absolute h-32 w-full bg-blue-600 bottom-0'>

            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className='border-2 border-red-600'>
            <div className='w-full h-full'>
              Hello
            </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default ParallaxClouds;
 





/* 

Cloud 1:
<svg className="absolute" style={{ top: `${y}px`, left: `${x}px`, width: `${size}px`, height: `${size}px` }} viewBox="0 -64.71 306.67 306.67" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs></defs> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M41.28,83.23c1.26-3.3,2.46-6.2,3.5-9.16,4-11.39,13-16.23,24-18.13,3.34-.58,6.85-.22,10.29-.26,1.94,0,3.88,0,6.38,0,.25-4.44.71-8.36.63-12.28-.12-5.51,2.1-9.82,5.47-14C106.7,10.54,126.84,1.49,150.4.08c11.91-.71,23.08,3.37,33.37,9.52,9.66,5.78,16.42,14.08,21.2,24.14.72,1.52,1.6,3,2.64,4.88,10.77-2.21,21.08-2,30,5.6a44.11,44.11,0,0,1,15.49,27.37c2.33,0,4.26,0,6.18,0,5.7.06,11.38-.22,17,1.34,8.39,2.3,15.06,6.66,19.71,14.09,6.67,10.63,11,21.94,10.65,34.73-.31,11.72-5,20.84-15,27.4a67.82,67.82,0,0,1-25.27,10.22,218.2,218.2,0,0,1-23.67,2.75,38,38,0,0,1-10.19-1.18c-4.74-1-9,0-13.36,1.87-7.58,3.28-15.13,6.66-22.88,9.49A70.68,70.68,0,0,1,181.39,176a120.42,120.42,0,0,1-33.33.09c-10.09-1.48-18.93-6.24-27.31-11.86-1.65-1.11-3.32-2.19-5.28-3.5-2.93,1.68-5.78,3.5-8.79,5-2.82,1.4-5.77,2.52-8.71,3.64a57.71,57.71,0,0,1-18.44,3.66c-9.45.38-18.84.75-28.17-1.66-22.79-5.86-39.45-19.08-48.67-40.85-3.94-9.29-3.27-19.06.18-28.51a17.64,17.64,0,0,1,3.66-5.71C14.28,88,23.7,83.12,35.33,83.23Zm74.85,64.11c5.7,6.59,13,10.5,20.82,13.3,11.57,4.11,23.62,4.44,35.66,3.24,10.28-1,20.41-3,29.54-8.32,3.21-1.87,6.57-3.5,9.78-5.37a10.77,10.77,0,0,1,8.24-1.24c15.54,3.57,30.82,1.14,45.89-2.59,6.88-1.71,13.84-3.7,19.79-8,4.81-3.49,8.72-7.76,9.77-13.63,1.31-7.34,1.88-14.8-2.24-21.72a39.64,39.64,0,0,1-2.82-6.26C288,90,282.66,86.4,276.33,84A38.16,38.16,0,0,0,268,82c-7.15-1-14.29-1.24-21.14,1.71-2.16.93-3.92.23-5.35-1.45s-1.78-3.6,0-5.33,1.52-3.6,1.32-5.6c-1-9.85-6-17.08-14.47-22-2.54-1.48-5.05-2.48-8.1-2.08-2.81.37-5.8-.14-8.49.56-2.93.77-5.62,2.49-8.24,3.72-3.39-1.06-4.78-3.19-5.2-6.38-.35-2.78-.65-5.82-2-8.21-5.85-10.59-14.1-18.42-25.84-22.6a53,53,0,0,0-31.18-1.54A69.85,69.85,0,0,0,101.9,35.59a23.63,23.63,0,0,0-5.79,12.27c-.53,4-.71,8-1.18,12-.61,5.13-3,7-8,6.62-3.7-.27-7.46-1-11.12-.63-13.51,1.25-20.39,6.81-23.27,18.92-.33,1.38-.49,2.81-.8,4.2a10,10,0,0,1-4.48,6.75c-1.77-.38-4-.81-6.14-1.32-10.94-2.54-25.68,5.4-29.34,15.87a17.19,17.19,0,0,0-.75,3.34,30.5,30.5,0,0,0,8,26.11C28.4,150.08,40.12,156,53.62,158.91c10,2.19,19.91,1.31,29.91.31,8.14-.81,15.72-2.95,22.48-7.67A23.84,23.84,0,0,1,116.13,147.34Z"></path> <path class="cls-1" d="M116.13,147.34A23.84,23.84,0,0,0,106,151.55c-6.76,4.72-14.34,6.86-22.48,7.67-10,1-19.93,1.88-29.91-.31-13.5-3-25.22-8.83-34.66-19.24a30.5,30.5,0,0,1-8-26.11,17.19,17.19,0,0,1,.75-3.34c3.66-10.47,18.4-18.41,29.34-15.87,2.18.51,4.37.94,6.14,1.32a10,10,0,0,0,4.48-6.75c.31-1.39.47-2.82.8-4.2,2.88-12.11,9.76-17.67,23.27-18.92,3.66-.34,7.42.36,11.12.63,5.07.37,7.42-1.49,8-6.62.47-4,.65-8,1.18-12a23.63,23.63,0,0,1,5.79-12.27,69.85,69.85,0,0,1,37.45-22.85,53,53,0,0,1,31.18,1.54c11.74,4.18,20,12,25.84,22.6,1.31,2.39,1.61,5.43,2,8.21.42,3.19,1.81,5.32,5.2,6.38,2.62-1.23,5.31-2.95,8.24-3.72,2.69-.7,5.68-.19,8.49-.56,3.05-.4,5.56.6,8.1,2.08,8.51,4.95,13.47,12.18,14.47,22,.2,2,.33,4-1.32,5.6s-1.49,3.58,0,5.33,3.19,2.38,5.35,1.45c6.85-3,14-2.67,21.14-1.71a38.16,38.16,0,0,1,8.32,2c6.33,2.4,11.68,6,14.23,12.73a39.64,39.64,0,0,0,2.82,6.26c4.12,6.92,3.55,14.38,2.24,21.72-1.05,5.87-5,10.14-9.77,13.63-6,4.32-12.91,6.31-19.79,8-15.07,3.73-30.35,6.16-45.89,2.59a10.77,10.77,0,0,0-8.24,1.24c-3.21,1.87-6.57,3.5-9.78,5.37-9.13,5.33-19.26,7.3-29.54,8.32-12,1.2-24.09.87-35.66-3.24C129.11,157.84,121.83,153.93,116.13,147.34Z"></path> </g> </g> </g></svg>

Cloud 2:
<svg viewBox="0 -56.89 259.31 259.31" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs></defs> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M45.15,79.62A55.75,55.75,0,0,0,44.08,74c-4.16-13.68-.83-26.31,6.69-37.61A89.27,89.27,0,0,1,75.49,11.55c8.07-5.4,17.05-8,26.28-10,18.31-3.94,35.25-.28,50.77,10,8.07,5.34,13.84,12.84,18.35,21.24,3.78,7.05,6.8,14.46,7.84,22.25,1.81,1.63,3.46.74,5.06.34a34.4,34.4,0,0,1,26.48,3.7,30.46,30.46,0,0,1,12.79,13.46c1.71,3.59,3.15,7.3,4.91,11.42a45.47,45.47,0,0,0,6.6-.06c4.84-.7,8.85.92,12.94,3.36,11.12,6.61,13.05,16.49,11.16,26.5-2,10.67-7.72,18.76-17.9,23.69-12.22,5.92-25.18,7.69-38.4,7.61-12.88-.07-25.75-1-38.62-1.65-14.27-.78-28.53-2.13-42.81-2.48A195.75,195.75,0,0,0,91.8,142.4c-18.8,2.38-37.59,3.91-56.52,2.74a84.89,84.89,0,0,1-14.35-2.51c-8.43-2-13.66-7.76-17.36-15.36C.59,121.14-.16,114.78,0,108.1A20.59,20.59,0,0,1,5.11,94.72C14.69,83.8,26.29,77.42,41.4,79.61A35.79,35.79,0,0,0,45.15,79.62Zm172,13.58c-.48-2.65-.88-5.15-1.39-7.62-1.92-9.29-6.65-16.17-15.84-19.83-5.41-2.15-10.43-2.62-15.66.12a53.59,53.59,0,0,1-7,3.2c-4.37,1.53-7.15,0-8.45-4.55a11.51,11.51,0,0,1-.57-3.37c.16-7.43-2.78-14.08-5.8-20.49C156.15,27.43,146.26,18,132.21,13c-12.08-4.29-24.09-4.14-36.27-.67a51.11,51.11,0,0,0-14.71,6.84C73.26,24.51,67,31.55,61,38.85A36,36,0,0,0,53.29,55c-1.53,7.89-1.79,15.91,3.14,23.19a40.19,40.19,0,0,1,3.91,8.58,4.47,4.47,0,0,1-4.92,6,17,17,0,0,1-5.63-2C38.06,84.12,24.52,89,17,97.25c-2.09,2.27-4.33,5-5,7.85-1.91,8.17-.1,15.86,4.95,22.69,3.3,4.46,8.11,6.3,13.24,7.23a99.6,99.6,0,0,0,29.1,1c13.09-1.49,26.17-3.39,39.3-4.17a418.3,418.3,0,0,1,69.52,1.78,279,279,0,0,0,46.34,1.2c7.33-.43,14-2.74,20.49-5.9a20.7,20.7,0,0,0,7.64-6.76c3.09-4.29,4.55-9.22,5.74-14.25a8.75,8.75,0,0,0-2.6-8.65c-1-1-2-2.06-3.09-3-3.7-3.07-7.55-4.91-12.61-3C226.23,94.77,222.16,94.92,217.13,93.2Z"></path> <path class="cls-1" d="M217.13,93.2c5,1.72,9.1,1.57,12.87.14,5.06-1.93,8.91-.09,12.61,3,1.09.92,2.07,2,3.09,3a8.75,8.75,0,0,1,2.6,8.65c-1.19,5-2.65,10-5.74,14.25a20.7,20.7,0,0,1-7.64,6.76c-6.49,3.16-13.16,5.47-20.49,5.9a279,279,0,0,1-46.34-1.2,418.3,418.3,0,0,0-69.52-1.78c-13.13.78-26.21,2.68-39.3,4.17a99.6,99.6,0,0,1-29.1-1c-5.13-.93-9.94-2.77-13.24-7.23-5-6.83-6.86-14.52-4.95-22.69.67-2.86,2.91-5.58,5-7.85C24.52,89,38.06,84.12,49.79,90.8a17,17,0,0,0,5.63,2,4.47,4.47,0,0,0,4.92-6,40.19,40.19,0,0,0-3.91-8.58C51.5,70.88,51.76,62.86,53.29,55A36,36,0,0,1,61,38.85c6-7.3,12.26-14.34,20.23-19.71A51.11,51.11,0,0,1,95.94,12.3c12.18-3.47,24.19-3.62,36.27.67,14,5,23.94,14.46,30.17,27.69,3,6.41,6,13.06,5.8,20.49a11.51,11.51,0,0,0,.57,3.37c1.3,4.51,4.08,6.08,8.45,4.55a53.59,53.59,0,0,0,7-3.2c5.23-2.74,10.25-2.27,15.66-.12,9.19,3.66,13.92,10.54,15.84,19.83C216.25,88.05,216.65,90.55,217.13,93.2Z"></path> </g> </g> </g></svg>



<svg className="absolute" style={{ top: `${y}px`, left: `${x}px`, width: `${size}px`, height: `${size}px` }} viewBox="0 -56.89 259.31 259.31" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs></defs> <g id="Layer_2" data-name="Layer 2"> <g id="Layer_1-2" data-name="Layer 1"> <path d="M45.15,79.62A55.75,55.75,0,0,0,44.08,74c-4.16-13.68-.83-26.31,6.69-37.61A89.27,89.27,0,0,1,75.49,11.55c8.07-5.4,17.05-8,26.28-10,18.31-3.94,35.25-.28,50.77,10,8.07,5.34,13.84,12.84,18.35,21.24,3.78,7.05,6.8,14.46,7.84,22.25,1.81,1.63,3.46.74,5.06.34a34.4,34.4,0,0,1,26.48,3.7,30.46,30.46,0,0,1,12.79,13.46c1.71,3.59,3.15,7.3,4.91,11.42a45.47,45.47,0,0,0,6.6-.06c4.84-.7,8.85.92,12.94,3.36,11.12,6.61,13.05,16.49,11.16,26.5-2,10.67-7.72,18.76-17.9,23.69-12.22,5.92-25.18,7.69-38.4,7.61-12.88-.07-25.75-1-38.62-1.65-14.27-.78-28.53-2.13-42.81-2.48A195.75,195.75,0,0,0,91.8,142.4c-18.8,2.38-37.59,3.91-56.52,2.74a84.89,84.89,0,0,1-14.35-2.51c-8.43-2-13.66-7.76-17.36-15.36C.59,121.14-.16,114.78,0,108.1A20.59,20.59,0,0,1,5.11,94.72C14.69,83.8,26.29,77.42,41.4,79.61A35.79,35.79,0,0,0,45.15,79.62Zm172,13.58c-.48-2.65-.88-5.15-1.39-7.62-1.92-9.29-6.65-16.17-15.84-19.83-5.41-2.15-10.43-2.62-15.66.12a53.59,53.59,0,0,1-7,3.2c-4.37,1.53-7.15,0-8.45-4.55a11.51,11.51,0,0,1-.57-3.37c.16-7.43-2.78-14.08-5.8-20.49C156.15,27.43,146.26,18,132.21,13c-12.08-4.29-24.09-4.14-36.27-.67a51.11,51.11,0,0,0-14.71,6.84C73.26,24.51,67,31.55,61,38.85A36,36,0,0,0,53.29,55c-1.53,7.89-1.79,15.91,3.14,23.19a40.19,40.19,0,0,1,3.91,8.58,4.47,4.47,0,0,1-4.92,6,17,17,0,0,1-5.63-2C38.06,84.12,24.52,89,17,97.25c-2.09,2.27-4.33,5-5,7.85-1.91,8.17-.1,15.86,4.95,22.69,3.3,4.46,8.11,6.3,13.24,7.23a99.6,99.6,0,0,0,29.1,1c13.09-1.49,26.17-3.39,39.3-4.17a418.3,418.3,0,0,1,69.52,1.78,279,279,0,0,0,46.34,1.2c7.33-.43,14-2.74,20.49-5.9a20.7,20.7,0,0,0,7.64-6.76c3.09-4.29,4.55-9.22,5.74-14.25a8.75,8.75,0,0,0-2.6-8.65c-1-1-2-2.06-3.09-3-3.7-3.07-7.55-4.91-12.61-3C226.23,94.77,222.16,94.92,217.13,93.2Z"></path> <path class="cls-1" d="M217.13,93.2c5,1.72,9.1,1.57,12.87.14,5.06-1.93,8.91-.09,12.61,3,1.09.92,2.07,2,3.09,3a8.75,8.75,0,0,1,2.6,8.65c-1.19,5-2.65,10-5.74,14.25a20.7,20.7,0,0,1-7.64,6.76c-6.49,3.16-13.16,5.47-20.49,5.9a279,279,0,0,1-46.34-1.2,418.3,418.3,0,0,0-69.52-1.78c-13.13.78-26.21,2.68-39.3,4.17a99.6,99.6,0,0,1-29.1-1c-5.13-.93-9.94-2.77-13.24-7.23-5-6.83-6.86-14.52-4.95-22.69.67-2.86,2.91-5.58,5-7.85C24.52,89,38.06,84.12,49.79,90.8a17,17,0,0,0,5.63,2,4.47,4.47,0,0,0,4.92-6,40.19,40.19,0,0,0-3.91-8.58C51.5,70.88,51.76,62.86,53.29,55A36,36,0,0,1,61,38.85c6-7.3,12.26-14.34,20.23-19.71A51.11,51.11,0,0,1,95.94,12.3c12.18-3.47,24.19-3.62,36.27.67,14,5,23.94,14.46,30.17,27.69,3,6.41,6,13.06,5.8,20.49a11.51,11.51,0,0,0,.57,3.37c1.3,4.51,4.08,6.08,8.45,4.55a53.59,53.59,0,0,0,7-3.2c5.23-2.74,10.25-2.27,15.66-.12,9.19,3.66,13.92,10.54,15.84,19.83C216.25,88.05,216.65,90.55,217.13,93.2Z"></path> </g> </g> </g></svg>
*/