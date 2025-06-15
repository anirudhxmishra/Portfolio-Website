import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { DiGithub, DiJava, DiMongodb, DiCss3, DiHtml5, DiDocker } from "react-icons/di";
import { SiExpress, SiPostman, SiTailwindcss, SiTypescript, SiTensorflow, SiPytorch, SiGit } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import { MdJavascript } from "react-icons/md";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-5xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-5xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandRedux className="text-5xl text-purple-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-5xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-5xl text-gray-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMongodb className="text-5xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-5xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-5xl text-sky-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiHtml5 className="text-5xl text-orange-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCss3 className="text-5xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <MdJavascript className="text-5xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-5xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJava className="text-5xl text-red-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiGit className="text-5xl text-red-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiGithub className="text-5xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTensorflow className="text-5xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPytorch className="text-5xl text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
