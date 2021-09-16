const Project = () => {
    return (
        <div className="relative z-10 p-5 flex items-center justify-end overflow-x-visible">
            <div className="overflow-x-visible border-green border-t-4 h-3/4 w-2/5 bg-blue flex flex-col justify-around p-5 project">
                <p className="text-subtitle font-util">REACT • MATERIAL UI • JAVASCRIPT • API</p>
                <h3 className="text-green font-title text-5xl">Project</h3>
                <p className="text-subtitle font-body text-smd">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sapien tempor commodo velit est adipiscing lectus. 
                    Mus consequat laoreet amet tristique adipiscing elit. 
                    Pellentesque purus amet, donec varius aliquam tempus mi,
                </p>
                <div className="pt-5">
                    <button className="font-util text-subtitle border-2 rounded p-2 hover:bg-white hover:text-blue mr-4">Live Site</button>
                    <button className="font-util text-subtitle border-2 rounded p-2 hover:bg-white hover:text-blue ml-4">Github Repo</button>
                </div>
            </div>
            <div className=" h-full">
                <img src="https://via.placeholder.com/853x480" alt="640x360" className="projectImage" />
            </div>
        </div>
    )
}


const ProjectAlt = () => {
    return (
        <div className="relative z-10 p-5 flex items-center justify-start overflow-x-visible">
            <div className="h-full">
                <img src="https://via.placeholder.com/853x480" alt="640x360" className="projectImage" />
            </div>
            <div className="overflow-x-visible border-pink border-t-4 h-3/4 w-2/5 bg-blue flex flex-col justify-around p-5 projectalt">
                <p className="text-subtitle font-util">REACT • MATERIAL UI • JAVASCRIPT • API</p>
                <h3 className="text-pink font-title text-5xl">Project</h3>
                <p className="text-subtitle font-body text-smd">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sapien tempor commodo velit est adipiscing lectus. 
                    Mus consequat laoreet amet tristique adipiscing elit. 
                    Pellentesque purus amet, donec varius aliquam tempus mi,
                </p>
                <div className="pt-5">
                    <button className="font-util text-subtitle border-2 rounded p-2 hover:bg-white hover:text-blue mr-4">Live Site</button>
                    <button className="font-util text-subtitle border-2 rounded p-2 hover:bg-white hover:text-blue ml-4">Github Repo</button>
                </div>
            </div>
        </div>
    )
}

export {
    Project,
    ProjectAlt
}
