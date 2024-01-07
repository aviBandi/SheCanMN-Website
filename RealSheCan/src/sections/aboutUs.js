import React from 'react'
import Button from '../components/Button';
import { useState } from 'react';
const AboutUs = () => {
    const goals = [
        { title: "Empowerment", desc: "Empower Her" },
        { title: "Equity", desc: "Equality" },
        { title: "Inspiration", desc: "Inspire Her" },
        { title: "Mentorship", desc: "Mentor Her" }
    ]

    const [hoverOption, setHoverOption] = useState(-1);

    return (
        <div className='max-w-7xl mx-auto pt-7'>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-montserrat">
                Who <span className='text-purple-700'>we</span> are and our <span className='text-purple-700'>Goals</span>
            </h1>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10 pt-5'>
                <div>

                    <p className='text-slate-gray font-pallaquin mt-4'>
                        Girls face numerous barriers and societal expectations that have limited their participation and representation in the traditionally male-dominated computer science and engineering fields. Through our free resources and engaging opportunities, we hope to ignite a lifelong passion for these fields.
                    </p>
                    <div className='mt-6'>
                        <a href="https://shecantech.wixsite.com/shecan" target="_blank">
                            <Button label="Learn More" className="py-12" />
                        </a>
                    </div>
                </div>
                <div className='w-full h-full md:col-span-1 flex justify-center items-center'>
                    <div className='w-full h-full grid grid-cols-1 sm:rid-cols-2 justify-stretch rounded-xl overflow-hidden'>
                        {
                            goals.map((goal, index) => (
                                <div className='font-montserrat flex flex-col items-center justify-center border-4 bg-purple-200 border-black text-purple-700 font-bold text-2xl' onMouseOver={() => setHoverOption(index)} onMouseOut={() => setHoverOption(-1)}>

                                    {hoverOption === index ? (<div>{goal.desc}</div>) : (<h1>{goal.title}</h1>)}
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
