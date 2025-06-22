import React from "react";
import { motion } from "framer-motion";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { DiGithub, DiJava, DiMongodb, DiCss3, DiHtml5, DiDocker } from "react-icons/di";
import { SiExpress, SiPostman, SiTailwindcss, SiTypescript, SiGitlab, SiPytorch, SiGit } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { MdJavascript } from "react-icons/md";
const techIcons = [
  { icon: RiReactjsLine, color: 'text-blue-500' },
  { icon: TbBrandNextjs, color: 'text-white' },
  { icon: SiTypescript, color: 'text-blue-600' },
  { icon: SiExpress, color: 'text-gray-500' },
  { icon: DiMongodb, color: 'text-green-500' },
  { icon: SiPostman, color: 'text-orange-500' },
  { icon: SiTailwindcss, color: 'text-sky-400' },
  { icon: DiHtml5, color: 'text-orange-600' },
  { icon: DiCss3, color: 'text-blue-500' },
  { icon: MdJavascript, color: 'text-yellow-500' },
  { icon: FaPython, color: 'text-yellow-400' },
  { icon: DiJava, color: 'text-red-600' },
  { icon: SiGit, color: 'text-red-500' },
  { icon: DiGithub, color: 'text-white' },
  { icon: SiGitlab, color: 'text-orange-600' },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techIcons.map(({ icon: Icon, color }, index) => (
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
            <Icon className={`text-5xl ${color}`} />
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Technologies;