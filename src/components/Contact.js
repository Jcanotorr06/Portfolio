import {useState, useEffect} from 'react'

const Contact = ({setOpen, open}) => {
    const [clicked, setClicked] = useState(false)
    useEffect(() =>{
        if(clicked){
            setOpen(true)
        }
        if(!open){
            setClicked(false)
            document.getElementsByTagName('html')[0].style.overflowY = 'scroll'
        }
    }, [clicked, setOpen, open])
    return (
        <div className="relative overflow-hidden contact py-28">
            <div className="flex w-full justify-center">
            <div className="z-10 flex flex-col items-center justify-items-center text-center w-3/4">
                <h5 className="text-subtitle font-subtitle text-md">CONTACT</h5>
                <h2 className="font-title text-title text-7xl">GET IN TOUCH WITH ME</h2>
                <p className="text-subtitle font-body text-2xl mb-6">I’m interested in freelance oportunities, so if  you like what you see, shoot me an email. I would love to talk more about the products you seek to create. However, if you have any other request or question, do not hesitate to hit me up too. </p>
                <button onClick={() => setClicked(true)} className="font-util font-normal text-subtitle color-white border-2 rounded p-4 hover:bg-white hover:text-blue">Hit Me Up</button>
            </div>
            </div>
            <h1 className="absolute bottom-0 left-0 text-60xl font- opacity-5 leading-extra-none bgText">CONTACT</h1>
        </div>
    )
}

export default Contact
