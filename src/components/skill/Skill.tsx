import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  icon: StaticImageData;
};

const Skill = ({ title, icon }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center w-[120px] h-[120px] rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 p-4 transition-all cursor-pointer"
    >
 
      <Image
        src={icon}
        alt={`${title} Icon`}
        width={50}
        height={50}
        className="mb-3"
        loading="lazy"
        priority={false} 
      />


      <h4 className="text-white text-center text-sm ">{title}</h4>
    </motion.div>
  );
};

export default Skill;
