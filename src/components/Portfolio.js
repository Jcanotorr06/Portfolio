import {Project, ProjectAlt} from './Project'

const Portfolio = () => {
    return (
        <div className="min-h-screen relative py-10">
            <div className="grid grid-flow-row auto-rows-max">
                <div className="portTitle text-center py-5 mb-5">
                    <h5 className="text-subtitle font-subtitle">PORTFOLIO</h5>
                    <h2 className="text-title font-title text-10xl">MY PROJECTS</h2>
                </div>
                <Project/>
                <ProjectAlt/>
                <Project/>
                <ProjectAlt/>
            </div>
            <h1 className="absolute inset-y-1/3 -right-1/2 text-60xl font- opacity-5 leading-extra-none bgText">PORTFOLIO</h1>
        </div>
    )
}

export default Portfolio
