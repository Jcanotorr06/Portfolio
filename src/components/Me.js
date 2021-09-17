import Carrousel from './Carrousel'

const Me = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-1 min-w-screen z-10">
            <Carrousel/>
            <div className="aboutInfo px-10 self-center">
                <h5 className="text-subtitle font-subtitle">About Me</h5>
                <h2 className="font-title text-title text-7xl">Hey, I'm Joseph</h2>
                <div>
                    <p className="text-subtitle font-body text-2xl mb-6">
                    You can call me designer, developer, programmer, engineer or any other market defined function-title. I don’t like to define myself by the work I’ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
                    </p>
                    <p className="text-subtitle font-body text-2xl">
                    Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Me
