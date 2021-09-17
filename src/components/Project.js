const Project = ({title, skills, description, image, link, github, color}) => {
    return (
        <div className="relative z-10 p-5 flex items-center justify-end overflow-x-visible">
            <div className={`overflow-x-visible border-${color} border-t-4 h-3/4 w-2/5 bg-blue flex flex-col justify-around p-5 project`}>
                <p className="text-subtitle font-util">{skills}</p>
                <h3 className={`text-${color} font-title text-5xl capitalize`}>{title}</h3>
                <p className="text-subtitle font-body text-smd">
                   {description}
                </p>
                <div className="pt-5">
                    <a href={link} target="_blank" rel="noreferrer" className="font-util text-subtitle border-2 rounded p-2 hover:bg-white hover:text-blue mr-4">Live Site</a>
                    <a href={github} target="_blank" rel="noreferrer"  className="font-util text-subtitle border-2 rounded p-2 hover:bg-white hover:text-blue ml-4">Github Repo</a>
                </div>
            </div>
            <div className=" h-full">
                <img src={image} alt="640x360" className="projectImage" />
            </div>
        </div>
    )
}


const ProjectAlt = ({title, skills, description, image, link, github, color}) => {
    return (
        <div className="relative z-10 p-5 flex items-center justify-start overflow-x-visible">
            <div className="h-full">
                <img src={image} alt="640x360" className="projectImage" />
            </div>
            <div className={`overflow-x-visible border-${color} border-t-4 h-3/4 w-2/5 bg-blue flex flex-col justify-around p-5 projectalt`}>
                <p className="text-subtitle font-util">{skills}</p>
                <h3 className={`text-${color} font-title text-5xl`}>{title}</h3>
                <p className="text-subtitle font-body text-smd">
                   {description}
                </p>
                <div className="pt-5">
                    <a href={link} target="_blank" rel="noreferrer" className="font-util text-subtitle border-2 rounded p-2 hover:bg-white hover:text-blue mr-4">Live Site</a>
                    
                </div>
            </div>
        </div>
    )
}

export {
    Project,
    ProjectAlt
}
