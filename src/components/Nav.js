import React, {useState, useEffect} from 'react'

const Nav = ({setOpen, open}) => {
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
        <div className="flex min-w-screen justify-between items-center px-4 py-5 z-10">
            <a href={window.location.pathname}>
                <img src="/jclogo.png" alt="duck logo" width='50px' height='70px'/>
            </a>
            <a href="mailto: josephct06@gmail.com" className="font-util font-normal text-subtitle color-white border-2 rounded p-2 hover:bg-white hover:text-blue">Contact Me</a>
        </div>
        
    )
}

export default Nav
