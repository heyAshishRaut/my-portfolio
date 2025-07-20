import brief from "./ui_icons/brief5.jpg"
import stack from "./ui_icons/stack01.jpg"
import listly from "./ui_icons/lislty01.jpg"
import horizon from "./ui_icons/horizon02.jpg"
import parse from "./ui_icons/parse02.jpg"
import other from "./ui_icons/other.jpg"
import tools from "./ui_icons/featured.jpg"
import vector from "./ui_icons/vectorimg.svg"
import last from "./ui_icons/last2.jpg"

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import type { Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.5,
            delayChildren: 0.5,
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
            ease: [0.42, 0, 0.58, 1],
        },
    },
};

// Projects
const projectsData = [
    {
        title: "01. Stack",
        desc: "Stack helps you organize all your important links - categorized smartly by source and easily shareable for a limited time.",
        img: stack,
        github: "https://github.com/heyAshishRaut",
        live: "https://www.stackforweb.space/show"
    },
    {
        title: "02. Listly",
        desc: "A powerful to-do app with smart task management and beautiful clock themes.",
        img: listly,
        github: "https://github.com/heyAshishRaut/Listly",
        live: "https://www.listly.space/"
    },
    {
        title: "03. Horizon",
        desc: "A space random people meet, exchange ideas, and experience the world together, one live message at a time.",
        img: horizon,
        github: "https://github.com/heyAshishRaut/horizon-chats",
        live: "https://horizon-roan-three.vercel.app/"
    },
    {
        title: "04. Parse",
        desc: "A universal tokenizer for all OpenAI models, inspired by tiktoken.",
        img: parse,
        github: "https://github.com/heyAshishRaut/parse-tokenization-visualisation",
        live: "https://parse-app.vercel.app/"
    },
];

// Other Projects
const projectData = [
    {
        id: "01",
        title: "Create Password",
        desc: "A tool that lets users generate strong, secure passwords instantly based on selected rules.",
        github: "https://github.com/heyAshishRaut/password-generator"
    },
    {
        id: "02",
        title: "Persona AI Chats",
        desc: "A simple chat UI that allows users to interact with different AI-based personas via frontend.",
        github: "https://github.com/heyAshishRaut/persona-based-ai-chatbots"
    },
    {
        id: "03",
        title: "Generate Cards",
        desc: "Generate custom Pokémon cards instantly by entering the number of cards you want.",
        github: "https://github.com/heyAshishRaut/pokemon-cards"
    },
    {
        id: "04",
        title: "Zerodha Clone",
        desc: "A frontend clone of Zerodha’s homepage built with HTML, CSS, and JS. It mirrors layout and design.",
        github: "https://github.com/heyAshishRaut/zerodha-website-clone"
    },
    {
        id: "05",
        title: "Allen Clone",
        desc: "A homepage replica of the Allen coaching website built using React and TailwindCSS.",
        github: "https://github.com/heyAshishRaut/allen-website-clone"
    },
    {
        id: "06",
        title: "VS Code Web Clone",
        desc: "Built a basic clone of the Visual Studio Code website using only HTML and CSS to replicate its layout and design aesthetics.",
        github: "https://github.com/heyAshishRaut/vs-code-website-clone"
    },
];

const skills = [
    "HTML", "CSS", "JAVASCRIPT", "NODEJS", "EXPRESS", "TAILWIND",
    "MONGODB", "REACT", "TYPESCRIPT", "WEBSOCKET", "POSTGRESQL", "NEXTJS",
    "GIT", "POSTMAN", "PYTHON", "JAVA", "RESEND", "PYDANTIC"
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeIn"
        }
    })
};

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
    const [time, setTime] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    // @ts-ignore
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [isAlert, setIsAlert] = useState(false);
    const [alertMsg, setAlertMsg] = useState("");

    // @ts-ignore
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("https://formsubmit.co/ajax/theashish32@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded", 
                    Accept: "application/json",
                },
                body: new URLSearchParams(formData).toString(), 
            });
            const data = await res.json();

            if (data.success === "true") {
                setAlertMsg("Message sent successfully");
                setIsAlert(true);
                setTimeout(() => {
                    setIsAlert(false);
                }, 3000);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setAlertMsg("Failed to send message. Please try again.");
                setIsAlert(true);
                setTimeout(() => {
                    setIsAlert(false);
                }, 3000);

            }
        } catch (err) {
            setAlertMsg("Something went wrong!");
            setIsAlert(true);
            setTimeout(() => {
                setIsAlert(false);
            }, 3000);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const update = () => {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            setTime(`${h}:${m}:${s}`);
        };

        const interval = setInterval(update, 1000);
        update(); // initial

        return () => clearInterval(interval); // cleanup
    }, []);

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
                wordSpacing: "0.5rem",
            }}

            className="uppercase text-white min-h-screen w-screen bg-black
             tracking-wide
            md:px-[50px] md:tracking-widest
            lg:px-[120px]"
        >
            {/* ALERT */}
            {
                isAlert ? (
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="sticky top-4 left-[8px] md:left-0 flex justify-start items-start text-[12px]"
                    >
                        <div className="bg-white/80 backdrop-blur-xl border border-gray-400/70 px-6 py-4 text-black rounded-lg shadow-lg">
                            {alertMsg}
                        </div>
                    </motion.div>
                ) : ""
            }

            {/* Navbar */}
            <motion.div
                className="h-[10%] w-full flex items-center justify-between text-white
                pt-6 px-4
                md:pt-8 md:px-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-lg md:text-xl">Local - {time}</div>
                {/* <div className="text-lg md:text-xl flex gap-x-10">

                    <div className="h-[10%] w-full flex justify-end items-center">
                        <motion.div
                            className="relative w-fit cursor-pointer"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <span className="text-white pb-2 inline-flex
                                    text-sm
                                    md:text-lg">
                                <span>projects</span>
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

                    <div className="flex h-[10%] w-full justify-end items-center">
                        <motion.div
                            className="relative w-fit cursor-pointer"
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                        >
                            <span className="text-white pb-2 inline-flex
                                    text-sm
                                    md:text-lg">
                                <span>message</span>
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
                </div> */}
            </motion.div>

            {/* Landing Section */}
            <div className="w-full text-white flex flex-col items-center justify-center
            pt-64
            md:pt-32
            ">
                {/* Freelance badge */}
                <motion.div
                    onClick={() => window.location.href = "mailto:theashish32@gmail.com"}
                    className="cursor-pointer flex items-center justify-center gap-x-3 border-2 border-green-900/70 py-2 pl-3 pr-4 rounded-[25px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="relative h-3 w-3 flex-shrink-0 flex items-center">
                        <span className="absolute inset-0 h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
                        <span className="absolute inset-0 z-10 h-3 w-3 rounded-full bg-green-900"></span>
                    </div>
                    <div className="text-sm leading-none">AVAILABLE FOR WORK</div>
                </motion.div>

                {/* Name */}
                <motion.div
                    className="text-center font-bold
                    text-[50px] pt-10 
                    md:pt-0 md:text-[120px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.7 }}
                >
                    ASHISH RAUT
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    className="uppercase leading-none
                    text-lg text-center
                    md:text-start"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    EX LAUNCHPAD TRAINEE, PWC
                </motion.div>

                {/* Footer Info */}
                <motion.div
                    className="w-full flex items-center justify-between 
                    px-4 pb-36
                    md:pb-0
                    md:px-0
                    pt-24 text-sm
                    md:pt-36 md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                >
                    <div>BASED IN NAGPUR<span className="hidden md:inline-block">, IND</span> </div>
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
                    className="flex flex-wrap gap-10 px-2"
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
                            <div className="h-[55%] w-full overflow-hidden group">
                                <img
                                    src={project.img}
                                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    alt=""
                                />
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
                                <div className="pt-2 text-[#a3a3a3]
                                text-sm 
                                md:text-lg">{project.desc}</div>
                            </div>

                            {/* Buttons */}
                            <div className="h-[9%] md:h-[10%] w-full flex justify-end items-end
                            text-sm font-semibold
                            md:text-lg md:font-normal">
                                <div className="h-full w-[70%] md:w-[60%] flex gap-x-2">
                                    <div onClick={() => window.open(project.github, "_blank")} className="cursor-pointer h-full w-1/2 flex justify-center items-center border-2 border-white">
                                        github
                                    </div>
                                    <div onClick={() => window.open(project.live, "_blank")} className="cursor-pointer h-full w-1/2 flex justify-center items-center bg-white text-black">
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
                    text-3xl text-white
                    md:text-6xl md:text-black">Other projects</div>
                    <div className=" font-semibold
                    text-lg text-white
                    md:text-2xl md:text-black">small builds, big learning.</div>
                </div>
            </motion.div>

            {/* Other Project Showcase Div */}
            <div ref={projectsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 
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
                                <div className="text-[#a3a3a3]
                                text-sm
                                md:text-lg">{project.desc}</div>
                            </div>

                            <div onClick={() => window.open(project.github, "_blank")} className="cursor-pointer h-[10%] w-full flex justify-end items-center pr-4">
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

            {/* Other Project Title */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.5 }}
                className="pt-36 pb-12"
            >
                <div
                    style={{ backgroundImage: `url(${tools})` }}
                    className="h-[150px] md:h-[200px] w-full bg-cover flex flex-col items-start justify-end pl-4 pb-2"
                >
                    <div className="font-bold pt-2
                    text-3xl
                    md:text-6xl">tech stack</div>
                    <div className=" font-semibold
                    text-lg
                    md:text-2xl">The Tools Behind the Code.</div>
                </div>
            </motion.div>

            {/* Skills */}
            <motion.div
                className="grid grid-cols-3 md:grid-cols-6 gap-4 pb-36 w-full
                px-[8px]
                md:px-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill}
                        className="cursor-default border-2 py-4 border-neutral-500 text-center test-sm md:text-xl font-normal md:font-semibold bg-transparent"
                        // @ts-ignore
                        variants={fadeInUp}
                        custom={i}

                        // <-- add this for the hover lift
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {skill}
                    </motion.div>
                ))}
            </motion.div>

            {/* Message */}
            <div className="px-[8px] md:px-0">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeIn" }}
                    viewport={{ once: true, amount: 0.3 }}
                    style={{ background: "linear-gradient(to right, #fff, #076585)" }}
                    className="w-full flex flex-col rounded-xl"
                >
                    {/* Header Section */}
                    <div className="h-[150px] text-black md:h-[200px] w-full bg-cover flex flex-col items-start justify-end pb-2">
                        <div className="font-bold pt-2 pl-4 text-3xl md:text-6xl">message</div>
                        <div className="font-semibold pl-4 text-sm pr-4 md:text-2xl md:pr-4">
                            Need something specific or have a cool idea?{" "}
                            <span className="text-white">Let's build</span> it together!
                        </div>
                        <div className="h-8 md:h-14 w-full">
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
                                            <rect width="1" height="8" fill="white" />
                                        </pattern>
                                    </defs>
                                    <rect width="100%" height="100%" fill="transparent" />
                                    <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="h-[520px] w-full flex pt-4">
                        <div className="hidden md:block h-full w-1/2">
                            <img src={vector} alt="vector" className="h-[90%] w-full" />
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="h-full w-full md:w-1/2 flex flex-col px-4 md:px-20 gap-y-4 tracking-wide"
                        >
                            <div className="w-full flex flex-col gap-y-1">
                                <div className="text-lg font-semibold">Full Name</div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="py-3 rounded-lg px-4 outline-none text-black"
                                />
                            </div>

                            <div className="w-full flex flex-col gap-y-1">
                                <div className="text-lg font-semibold">Email</div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="py-3 rounded-lg px-4 outline-none text-black"
                                />
                            </div>

                            <div className="w-full flex flex-col gap-y-1">
                                <div className="text-lg font-semibold">Message</div>
                                <textarea
                                    name="message"
                                    placeholder="Drop your thoughts here"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={7}
                                    className="outline-none w-full rounded-lg text-black p-3 resize-none"
                                />
                            </div>

                            <div className="w-[30%] md:w-[30%] self-end flex pt-1">
                                <button
                                    type="submit"
                                    className="w-full py-3 rounded-lg bg-black text-white"
                                    disabled={loading}
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <div className="">
                <div className=" w-full bg-cover h-[800px]"
                    style={{ backgroundImage: `url(${last})` }}>
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="h-full w-full"
                    >
                        <div className="h-[50%] w-full flex items-end justify-center gap-x-10">
                            {/* GitHub */}
                            <div
                                onClick={() => window.open("https://github.com/heyAshishRaut", "_blank")}
                                className="h-10 w-10 cursor-pointer"
                            >
                                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#ffffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                            </div>

                            {/* LinkedIn */}
                            <div
                                onClick={() => window.open("https://www.linkedin.com/in/ashishraut0302/", "_blank")}
                                className="h-11 w-11 cursor-pointer"
                            >
                                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
                            </div>

                            {/* Twitter/X */}
                            <div
                                onClick={() => window.open("https://x.com/heyashishraut", "_blank")}
                                className="h-10 w-10 cursor-pointer"
                            >
                                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                            </div>
                        </div>

                        <div className="h-[50%] pt-6 overflow-hidden">
                            <div className="flex items-center justify-center gap-x-2 pt-8">
                                <div className="h-[45px] bg-black/30 backdrop-blur-2xl px-8 rounded-[25px] text-sm lowercase flex items-center justify-center">
                                    theashish32@gmail.com
                                </div>

                                <div
                                    onClick={() => (window.location.href = "mailto:theashish32@gmail.com")}
                                    className="cursor-pointer h-[45px] w-[45px] rounded-full lowercase bg-black/30 hover:bg-black/20 backdrop-blur-2xl flex items-center justify-center"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg> 
                                </div>
                            </div>

                            <div className="pt-32 text-center leading-none pb-4 text-lg">designed & developed by</div>

                            <div
                                style={{
                                    WebkitTextStroke: "2px #ffffff",
                                    color: "transparent",
                                }}
                                className="text-[100px] md:text-[170px] font-semibold text-center leading-none"
                            >
                                ashish
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
export default App