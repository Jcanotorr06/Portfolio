import React from 'react'

const Footer = () => {
    return (
        <div className="relative flex flex-col items-center py-10">
            <div className=" border-t-4 w-4/5 mb-10">
            </div>
            <div className="flex justify-around items-center w-full">
                <div>
                    <a href={window.location.pathname}>
                        <img src="./jclogo.png" alt="" className="max-h-20" />
                    </a>
                </div>
                <div>
                    <p className="font-body text-subtitle medium text-smd">Made and designed by Joseph Cano</p>
                </div>
                <div>
                    <a href="https://github.com/Jcanotorr06/Portfolio"><img src="./github.png" alt="" className="max-h-20" /></a>
                </div>

            </div>
        </div>
    )
}

export default Footer
