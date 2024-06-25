import React from 'react'
import { WobbleCard } from '../components/ui/card-wobble'
import ProjectButton from '../components/project-button'

function Projects() {

    // Defining the links to easily call it
    const links = {
        RoomAutomation : "https://medium.com/@jwaguirre13/automating-my-room-9cdfe53480d7",
        StockFin : "https://medium.com/@jwaguirre13/servery-an-upcoming-app-ca1b05718bbe",
        Servery : "https://medium.com/@jwaguirre13/servery-an-upcoming-app-ca1b05718bbe"
    }
    return (
        <>
        <div className='relative p-6'>
            <div className="text-6xl md:text-7xl font-bold italic text-center mt-48 font-reddit py-10 dark:text-[#EAE3D2] text-[##4B3F3A]">Projects</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full font-reddit">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-[#7A2424] dark:bg-[#642020] duration-500 min-h-[350px] lg:min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Room Automation
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    I automated my room based on a schedule using Flask, Python, SQL, and various other components.               
                 </p>
                </div>
                <ProjectButton size={"px-12 py-4"} link={links.RoomAutomation}/>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                StockFin
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                A personalized AI financial assistant. 
                </p>
                <ProjectButton size={"px-6 py-3"} link={links.StockFin}/>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 dark:bg-[#142743] min-h-[450px] lg:min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Servery (Current)
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    A recipe recommendation app that curates new recipes based on your previous preferences. This app features a social network and much more! (Coming Soon)
                </p>
                </div>
                <ProjectButton size={"px-6 py-3 md:px-12 md:py-6"} text={"Read about me!"} link={links.Servery}/>
            </WobbleCard>
            </div>
        </div>
        </>
    )
}

export default Projects