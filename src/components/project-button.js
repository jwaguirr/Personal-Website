import React from "react";

export default function ProjectButton({ className, size, text, link }) {
    return (
        <div className={`absolute bottom-0 p-10 right-0`}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <button className={`text-white ${size} backdrop-blur-sm hover:scale-105 rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-md transition duration-200`}>
                    {text ? text : "Read More!"}
                </button>
            </a>
        </div>
    );
}