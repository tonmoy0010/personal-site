import { motion } from 'framer-motion';

import { styles } from '../styles';

// new section
import { EarthCanvas } from "./canvas";


const Hero = () => {
	return (
		<section className={`relative w-full h-screen mx-auto`}>
			<div
				className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className='flex flex-col justify-center items-center mt-5'>
				<div className='w-7 h-7 rounded-full bg-[#915EFF]' />
				<div className='w-2 sm:h-80 h-40 violet-gradient' />
			</div>
			

			{/* Introduction */}
			<div>
				<h1 className={`${styles.heroHeadText} text-white`}>
					Hi, I'm <span className='text-[#915EFF]'>Tonmoy</span>
				</h1>
				<p className={`${styles.heroSubText} mt-2 text-white-100`}>
					I am a passionate software engineer with a deep fascination for cybersecurity. <br className='sm:block hidden' />
					<br className='sm:block hidden' />
					Devoted to honing my skills in pentesting and malware analysis, I am driven by a relentless pursuit of
					knowledge and a desire to fortify digital landscapes.
				</p>
			</div>
			</div>

			<EarthCanvas />
			
			{/* Hover Icon */}
			{/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
				<a href='#about'>
				<div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
					<motion.div
					animate={{
						y: [0, 24, 0],
					}}
					transition={{
						duration: 1.5,
						repeat: Infinity,
						repeatType: "loop",
					}}
					className='w-3 h-3 rounded-full bg-secondary mb-1'
					/>
				</div>
				</a>
			</div> */}
		</section>
	)
}

export default Hero;
