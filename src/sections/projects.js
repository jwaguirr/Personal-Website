import React from 'react'
import { WobbleCard } from '../components/ui/card-wobble'
import ProjectButton from '../components/project-button'

function Projects() {

    // Defining the links to easily call it
    const links = {
        RoomAutomation : "https://medium.com/@jwaguirre13/automating-my-room-9cdfe53480d7",
        MetalSniffer : "https://github.com/jwaguirr/MetalSniffer",
        Hira : "https://hirajobs.com",
        DubTrack: "https://dubtrack.xyz/"
    }
    return (
        <>
        <div className='relative p-6'>
            <div className="text-6xl md:text-7xl font-bold italic text-center mt-48 font-reddit py-10 dark:text-[#EAE3D2] text-[##4B3F3A]">Projects</div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full font-reddit">
                {/* First card - added mx-auto to center it within its grid cell */}
                <WobbleCard containerClassName="col-span-1 min-h-[300px] mx-auto w-full">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Room Automation
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    I automated my room based on a schedule using Flask, Python, SQL, and various other components.             
                </p>
                <ProjectButton size={"px-6 py-3"} link={links.RoomAutomation}/>
                </WobbleCard>

                <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-[#7A2424] dark:bg-[#642020] duration-500 min-h-[350px] lg:min-h-[500px] lg:min-h-[300px]"
                className=""
                >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Metal Sniffer
                    </h2>
                    <p className="mt-4 text-left text-base/6 text-neutral-200">
                        Metal Sniffer is a macOS packet sniffer built with Rust, offering traffic analysis with filtering, protocol inspection, and source-destination grouping.
                    </p>
                </div>
                <ProjectButton size={"px-12 py-4"} link={links.MetalSniffer}/>
                </WobbleCard>

                <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-blue-900 dark:bg-[#142743] min-h-[450px] lg:min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Hira (Current)
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    An AI job application agent automates and submits tailored applications to multiple company websites at once, saving time and letting users focus on interviews. (Coming Soon)
                    </p>
                </div>
                <ProjectButton size={"px-6 py-3 md:px-12 md:py-6"} text={"View More!"} link={links.Hira}/>
                </WobbleCard>

                {/* Fourth card - added mx-auto to center it within its grid cell */}
                <WobbleCard containerClassName="col-span-1 min-h-[300px] mx-auto w-full bg-[#4B3F3A] dark:bg-[#4B3F3A]">
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Dubtrack
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    A free, open-source URL shortener with real-time QR scan analytics.
                </p>
                    <ProjectButton size={"px-6 py-3"} text={"View More!"} link={links.DubTrack}/>
                </WobbleCard>
            </div>
            </div>
        </>
    )
}

export default Projects