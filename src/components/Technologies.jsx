import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { DiGithub, DiJava, DiMongodb, DiCss3, DiHtml5, DiDocker } from "react-icons/di";
import { SiExpress, SiPostman, SiTailwindcss, SiTypescript, SiGitlab, SiPytorch, SiGit } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { MdJavascript } from "react-icons/md";

const techIcons = [
  <RiReactjsLine className="text-5xl text-blue-500" />,
  <TbBrandNextjs className="text-5xl text-white" />,
  <SiTypescript className="text-5xl text-blue-600" />,
  <SiExpress className="text-5xl text-gray-500" />,
  <DiMongodb className="text-5xl text-green-500" />,
  <SiPostman className="text-5xl text-orange-500" />,
  <SiTailwindcss className="text-5xl text-sky-400" />,
  <DiHtml5 className="text-5xl text-orange-600" />,
  <DiCss3 className="text-5xl text-blue-500" />,
  <MdJavascript className="text-5xl text-yellow-500" />,
  <FaPython className="text-5xl text-yellow-400" />,
  <DiJava className="text-5xl text-red-600" />,
  <SiGit className="text-5xl text-red-500" />,
  <DiGithub className="text-5xl text-white" />,
  <SiGitlab className="text-5xl text-orange-600" />,
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, -5, 5, 0],
              borderColor: "#6366f1"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ 
              duration: 0.3, 
              hover: { duration: 0.2 }
            }}
            viewport={{ once: true }}
          >
            {icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;