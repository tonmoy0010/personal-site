import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion";

const Contact = () => {
 
  return (
    <div className="xl:mt-12 xl:flex-row flex-rol-reverse flex gap-10 overflow-hidden">
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[2.3] bg-black-100 p-10 rounded-2xl">
        <p className={`${styles.sectionSubText} text-center`}>What's next?</p>
        <h3 className={`${styles.sectionHeadText} text-center`}>Get in touch</h3>
        <p className='text-center mt-4 text-secondary text-[17px] leading-[30px]'>
           My inbox is always open.
           Whether you have a question or just want to say hi, I’ll try my best to get back to you!
       </p>
       
       <div class='justify-center flex'>
        <button
              type='submit'
              className='bg-secondary mt-7 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold 
                      shadow-md shadow-primary'
            >
              <a href={`mailto:info@satyrsec.io`}> Say Hello </a>
          </button>
        </div>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");