import { motion } from 'framer-motion';
import CustomButton from '../ui/CustomButton';

const HeroSection = () => {
  return (
    <>
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-builder-navy">
  <div className="absolute inset-0 z-0">
   
    <motion.div
  className="absolute inset-0 overflow-hidden"

>
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="w-full h-full object-cover"
    poster="/hero.webp" 
  >
    <source src="hero-video.webm" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</motion.div>

    <div className="absolute inset-0 z-10" />
  </div>

  <div className="container mx-auto px-4 relative z-20">
    <motion.div
      className="max-w-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.span 
        className="text-builder-amber text-xl mb-4 block"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 4, x: 0 }}
        transition={{ duration: 2.0, delay: 1.0 }}
      >
        Professional Construction Services
      </motion.span>

      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.0 }}
      >
        <span className="inline-block">Building </span>
        <motion.span
          className="inline-block text-builder-amber"
          initial={{ y: 40 }}
          animate={{ y: 0 }}
          transition={{ duration: 4.0, delay: 2.0, type: "spring" }}
        >
          Dreams
        </motion.span>
        <span className="inline-block"> Into Reality</span>
      </motion.h1>

      <motion.p 
        className="text-white/90 text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        We're dedicated to providing superior construction services with quality, integrity, and excellence. From concept to completion, we build with precision.
      </motion.p>

      <motion.div 
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, delay: 1.0 }}
      >
        <CustomButton to="/contact" size="lg">
          Get a Quote
        </CustomButton>
        <CustomButton to="/projects" variant="outline" size="lg" className='mb-5 md:mb-0'>
          View Our Projects
        </CustomButton>
      </motion.div>
    </motion.div>
  </div>
</section>
    </>
  )
}

export default HeroSection