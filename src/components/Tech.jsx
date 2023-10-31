import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies} from '../constants'
import { fadeIn,textVariant } from '../utils/motion'
import { styles } from '../styles'
import { motion } from 'framer-motion'

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Technical
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skills
        </h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=>(
        <div className='w-28 h-28' key={technology.name}>
              < BallCanvas icon={technology.icon}/>
          </div>
      ))}
    </div>
    </>
  )
}

export default Tech