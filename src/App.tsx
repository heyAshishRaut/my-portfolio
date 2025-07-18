import brief from "./ui_icons/brief5.jpg"
import stack from "./ui_icons/stack.jpg"
import listly from "./ui_icons/listly.jpg"
import other from "./ui_icons/otherprojects.jpg"

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5, // Increased from 0.3 to 0.5
            delayChildren: 0.5,   // Initial delay before first child starts
        },
    },
};

const childVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.42, 0, 0.58, 1], // Custom easeOut
        },
    },
};

const projectsData = [
    {
        title: "01. Stack",
        desc: "Stack helps you organize all your important links - categorized smartly by source and easily shareable for a limited time.",
        img: stack,
    },
    {
        title: "02. Listly",
        desc: "A powerful to-do app with smart task management and beautiful clock themes.",
        img: listly,
    },
    {
        title: "03. Horizon",
        desc: "A space random people meet, exchange ideas, and experience the world together, one live message at a time.",
        img: stack,
    },
    {
        title: "04. Parse",
        desc: "A universal tokenizer for all OpenAI models, inspired by tiktoken.",
        img: listly,
    },
];

const projectData = [
    { id: "01", title: "Create Password", desc: "A tool that lets users generate strong, secure passwords instantly based on selected rules." },
    { id: "02", title: "Persona AI Chats", desc: "A simple chat UI that allows users to interact with different AI-based personas via frontend." },
    { id: "03", title: "Generate Cards", desc: "Generates styled cards for UI components with titles, images, and interactive links." },
    { id: "04", title: "Zerodha Clone", desc: "A frontend clone of Zerodha’s homepage built with HTML, CSS, and JS. It mirrors layout and design." },
    { id: "05", title: "Allen Clone", desc: "A homepage replica of the Allen coaching website built using React and TailwindCSS." },
    { id: "06", title: "VS Code Web Clone", desc: "A frontend clone of VS Code Web using React, mimicking its side menu and theme structure." },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.5,
            duration: 0.6,
            ease: "easeInOut",
        },
    }),
};

function App() {
    // PROJECT 
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);
    
    // OTHER 
    const { ref: projectsRef, inView: isInView } = useInView({
        triggerOnce: true,
    });


    return (
        <div
            style={{
                background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #2b0707 100%)",
                wordSpacing: "0.5rem",
            }}
            className="uppercase text-white min-h-screen w-screen
            px-[8px] tracking-wide
            md:px-[50px] md:tracking-widest
            lg:px-[120px]"
        >
            {/* Navbar */}
            <motion.div
                className="h-[10%] w-full flex items-center justify-between text-white 
                pt-2
                md:pt-4
                "
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="
                text-sm
                md:text-xl
                ">LOCAL / 08:39:36</div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960"
                        fill="#FFFFFF"
                        className="
                        h-[30px] w-[50px]
                        md:h-[50px] md:w-[50px]"
                    >
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                    </svg>
                </div>
            </motion.div>

            {/* Landing Section */}
            <div className="w-full text-white flex flex-col items-center justify-center
            pt-32
            ">
                {/* Freelance badge */}
                <motion.div
                    className="flex items-center justify-center gap-x-3 border-2 border-sky-900/70 py-2 pl-3 pr-4 rounded-[25px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="relative h-3 w-3 flex-shrink-0 flex items-center">
                        <span className="absolute inset-0 h-full w-full rounded-full bg-sky-500 opacity-75 animate-ping"></span>
                        <span className="absolute inset-0 z-10 h-3 w-3 rounded-full bg-sky-900"></span>
                    </div>
                    <div className="text-sm leading-none">AVAILABLE FOR FREELANCE</div>
                </motion.div>

                {/* Name */}
                <motion.div
                    className="text-center font-bold text-white
                    text-[60px] pt-10
                    md:pt-0
                    md:text-[120px] 
                    "
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                >
                    ASHISH RAUT
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    className="uppercase 
                    text-lg text-center
                    md:text-2xl md:text-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    I build ideas into interactive digital experiences
                </motion.div>

                {/* Footer Info */}
                <motion.div
                    className="w-full flex items-center justify-between 
                    pt-24 text-sm
                    md:pt-36 md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                >
                    <div>BASED IN NAGPUR, IND</div>
                    <div>DESIGNER + DEVELOPER</div>
                </motion.div>

                {/* Diagonal stripe separator */}
                <motion.div
                    className="w-full
                    h-8 
                    md:h-14"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                >
                    <div className="h-full w-full overflow-hidden">
                        <svg
                            className="h-full w-full"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <pattern
                                    id="diagonal-stripes"
                                    patternUnits="userSpaceOnUse"
                                    width="8"
                                    height="8"
                                    patternTransform="rotate(-45)"
                                >
                                    <rect width="1" height="8" fill="#ffffff" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="#000000" />
                            <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* Brief Image Section */}
            <motion.div
                className="py-2
                h-[500px]
                md:h-[700px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.7 }}
            >
                <div
                    style={{ backgroundImage: `url(${brief})` }}
                    className="h-full w-full bg-cover bg-center text-white flex items-center justify-center text-center uppercase
                    text-lg px-8
                    md:text-2xl md:px-20
                    "
                >
                    Design meets development — that's where I thrive. From styling sleek interfaces to building powerful backend systems, I enjoy turning concepts into real, working products that people love to use.
                </div>
            </motion.div>

            {/* Bottom Stripe */}
            <motion.div
                className="h-8 md:h-14 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.5 }}
            >
                <div className="h-full w-full overflow-hidden">
                    <svg
                        className="h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <pattern
                                id="diagonal-stripes"
                                patternUnits="userSpaceOnUse"
                                width="8"
                                height="8"
                                patternTransform="rotate(-45)"
                            >
                                <rect width="1" height="8" fill="#ffffff" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="#000000" />
                        <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
                    </svg>
                </div>
            </motion.div>

            {/* Project section */}
            <div ref={ref}>
                {/* Project Title */}
                <motion.div
                    className="pt-36 pb-10"
                    initial="hidden"
                    animate={controls}
                    variants={childVariants}
                >
                    <div className="font-bold
                    text-4xl
                    md:text-6xl">Projects</div>
                    <div className="
                    text-lg
                    md:text-2xl">Built with purpose. Designed to perform.</div>
                </motion.div>

                <motion.div
                    className="flex flex-wrap gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="w-full md:w-[48%] h-[600px] flex flex-col gap-y-2 p-2
                            border-2 border-neutral-600
                            md:border-0 md:border-transparent"
                            variants={childVariants}
                        >
                            {/* Image */}
                            <div className="h-[55%] w-full">
                                <img src={project.img} className="h-full w-full object-cover" alt="" />
                            </div>

                            {/* Details */}
                            <div className="h-[35%] w-full">
                                <div className="h-6 w-full overflow-hidden">
                                    <svg
                                        className="h-full w-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                    >
                                        <defs>
                                            <pattern
                                                id="diagonal-stripes"
                                                patternUnits="userSpaceOnUse"
                                                width="8"
                                                height="8"
                                                patternTransform="rotate(-45)"
                                            >
                                                <rect width="1" height="8" fill="#ffffff" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="#000000" />
                                        <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
                                    </svg>
                                </div>
                                <div className="font-bold pt-2
                                text-3xl
                                md:text-4xl">{project.title}</div>
                                <div className="pt-2 
                                text-sm 
                                md:text-lg">{project.desc}</div>
                            </div>

                            {/* Buttons */}
                            <div className="h-[9%] md:h-[10%] w-full flex justify-end items-end
                            text-sm font-semibold
                            md:text-lg md:font-normal">
                                <div className="h-full w-[70%] md:w-[60%] flex gap-x-2">
                                    <div className="h-full w-1/2 flex justify-center items-center border-2 border-white">
                                        desc
                                    </div>
                                    <div className="h-full w-1/2 flex justify-center items-center bg-white text-black">
                                        live
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Other Project Title */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.5 }}
                className="pt-36 pb-12"
            >
                <div
                    style={{ backgroundImage: `url(${other})` }}
                    className="h-[150px] md:h-[200px] w-full bg-cover flex flex-col items-start justify-end pl-4 pb-2"
                >
                    <div className="font-bold pt-2
                    text-3xl
                    md:text-6xl">Other projects</div>
                    <div className=" font-semibold
                    text-lg
                    md:text-2xl">small builds, big learning.</div>
                </div>
            </motion.div>

            {/* Other Project Showcase Div */}
            <div ref={projectsRef} className="pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 
            px-10
            md:px-0">
                {projectData.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className="w-full 
                        h-[280px]
                        md:h-[400px]"
                        custom={index}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        // @ts-ignore
                        variants={cardVariants}
                    >
                        <div className="w-full h-full border-2 border-neutral-600
                        p-4 pb-6">
                            <div className="h-[90%] w-full flex flex-col gap-y-4">
                                <div className="flex items-end gap-x-2">
                                    <div className="font-semibold
                                    text-3xl 
                                    md:text-4xl">{project.id}.</div>
                                    <div className="text-xl font-semibold">{project.title}</div>
                                </div>
                                <div className="h-4 w-full overflow-hidden">
                                    <svg
                                        className="h-full w-full"
                                        xmlns="http://www.w3.org/2000/svg"
                                        preserveAspectRatio="none"
                                    >
                                        <defs>
                                            <pattern
                                                id="diagonal-stripes"
                                                patternUnits="userSpaceOnUse"
                                                width="8"
                                                height="8"
                                                patternTransform="rotate(-45)"
                                            >
                                                <rect width="1" height="8" fill="#ffffff" />
                                            </pattern>
                                        </defs>
                                        <rect width="100%" height="100%" fill="#000000" />
                                        <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
                                    </svg>
                                </div>
                                <div className="text-white
                                text-sm
                                md:text-lg">{project.desc}</div>
                            </div>

                            <div className="h-[10%] w-full flex justify-end items-center pr-4">
                                <motion.div
                                    className="relative w-fit cursor-pointer"
                                    initial="rest"
                                    whileHover="hover"
                                    animate="rest"
                                >
                                    <span className="text-white pb-2 inline-flex items-center gap-x-2
                                    text-sm
                                    md:text-lg">
                                        <span>Github</span>
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 -960 960 960"
                                                className="h-5 w-5 md:h-7 md:w-7"
                                                fill="#FFFFFF"
                                            >
                                                <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                                            </svg>

                                        </span>
                                    </span>

                                    <motion.div
                                        className="absolute bottom-0 left-0 h-[3px] bg-white"
                                        variants={{
                                            rest: { width: 0 },
                                            hover: { width: "100%" },
                                        }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}


export default App