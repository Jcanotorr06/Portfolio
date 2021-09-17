import React from 'react'
import Brain from './Brain'
import Nav from './Nav'

const Landing = ({open, setOpen}) => {
    return (
        <div className=" grid grid-rows-9 relative min-h-screen max-h-screen min-w-screen">
            <Nav setOpen={setOpen} open={open}/>
            <Brain/>
            <div className="title grid place-items-center row-span-7">
                <div className="flex flex-col">
                    <h5 className="font-subtitle text-subtitle">Hi, this is Joseph Cano's</h5>
                    <h1 className="font-title text-title z-10 text-13xl leading-none">PORTFOLIO</h1>
                    <h5 className="font-subtitle text-subtitle text-right">FullStack Developer</h5>
                </div>
            </div>
            <div className="px-4 py-5 scrollContainer">
                <div className="flex flex-col text-subtitle">
                    <p className="scrollSign font-util mb-2">scroll down</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="flex flex-col text-subtitle">
                    <p className="scrollSign font-util mb-2">scroll down</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Landing
