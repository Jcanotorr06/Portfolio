import {Project, ProjectAlt} from './Project'

const dumpsterfire = {
    title: 'Dumpster Fire',
    link: 'https://dumpsterfireblog.netlify.app/',
    image: 'https://raw.githubusercontent.com/Jcanotorr06/images/main/Proyects/dumpsterfire.png',
    github: 'https://github.com/Jcanotorr06/dumpsterfireTS',
    color: 'green',
    skills: 'NEXTJS • TAILWINDCSS • TYPESCRIPT • STRAPI • MONGODB',
    description: 'Dumpster Fire is my personal blog web site.The front end was built with Next JS, Typescript and styled with Tailwind CSS and animated with Framer Motion, while the backend was built using Strapi JS as a headless CMS built and deployed separately and MongoDB for cloud storage.'
}

const therecroom = {
    title: 'The Rec-Room',
    link: 'https://therec-room.netlify.app/#/',
    image: 'https://raw.githubusercontent.com/Jcanotorr06/images/main/Proyects/therecroom.png',
    github: 'https://github.com/Jcanotorr06/therecroom',
    color: 'yellow',
    skills: 'REACTJS • TAILWINDCSS • JAVASCRIPT • COMMERCEJS • STRIPEJS',
    description: "The Rec-Room is a fictional PWA store built using React JS and vanilla Javascript, and styled with Tailwind CSS. The backend of this storefront is made up of Commerce JS's API as a CMS and Stripe JS for payment procesing."
}

const foodies = {
    title: 'Foodies',
    link: 'https://jcanotorr06.github.io/Foodies/#/',
    image: 'https://raw.githubusercontent.com/Jcanotorr06/images/main/Proyects/foodies.png',
    color: 'pink',
    skills: 'REACTJS • TAILWINDCSS • JAVASCRIPT • SPOONACULAR API',
    description: "Foodies is an improvement on one of my first proyects ever. Built with React JS and styled with Tailwind CSS, this PWA uses Spoonacular's food API to provide users with a platform to look for recipies online. Users can search for specific recipies or try their luck with a random one."
}

const Portfolio = () => {
    return (
        <div className="min-h-screen relative py-10">
            <div className="grid grid-flow-row auto-rows-max">
                <div className="portTitle text-center py-5 mb-5">
                    <h5 className="text-subtitle font-subtitle">PORTFOLIO</h5>
                    <h2 className="text-title font-title text-10xl">MY PROJECTS</h2>
                </div>
                <Project title={dumpsterfire.title} link={dumpsterfire.link} image={dumpsterfire.image} github={dumpsterfire.github} color={dumpsterfire.color} skills={dumpsterfire.skills} description={dumpsterfire.description} />
                <ProjectAlt title={foodies.title} link={foodies.link} image={foodies.image} color={foodies.color} skills={foodies.skills} description={foodies.description}/>
                <Project title={therecroom.title} link={therecroom.link} image={therecroom.image} github={therecroom.github} color={therecroom.color} skills={therecroom.skills} description={therecroom.description} />
            </div>
            <h1 className="absolute inset-y-1/3 -right-1/2 text-60xl font- opacity-5 leading-extra-none bgText">PORTFOLIO</h1>
        </div>
    )
}

export default Portfolio
