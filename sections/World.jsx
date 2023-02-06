'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Tokenomics" textStyles="text-center" />
      <TitleText title={<>Baby King Taxation</>} textStyles="text-center" />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="w-full h-full object-cover" />

        {/* <div className="absolute flex gap-4 items-center bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-01.png" alt="people" className="w-full h-full" />
          <TypingText title="| 11% Buy" textStyles="text-center" />
        </div>

        <div className="absolute flex gap-4 items-center top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
          <h4 className="text-xl font-medium text-white">11% Buy</h4>
        </div>

        <div className="absolute flex gap-4 items-center top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src="people-03.png" alt="people" className="w-full h-full" />
          <TypingText title="| 1M Supply" textStyles="text-center" />
        </div> */}
        <div className="px-4 absolute w-full py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-bold text-white lg:text-5xl xl:text-6xl">
                1M
              </h6>
              <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
                Total Supply
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-bold lg:text-5xl text-white xl:text-6xl">
                11%
              </h6>
              <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
                Buy
              </p>
            </div>
            <div className="text-center md:border-r">
              <h6 className="text-4xl font-bold lg:text-5xl text-white xl:text-6xl">
                11%
              </h6>
              <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
                Sell
              </p>
            </div>
            <div className="text-center">
              <h6 className="text-4xl font-bold lg:text-5xl text-white xl:text-6xl">
                2 BNB
              </h6>
              <p className="text-sm font-medium tracking-widest text-white uppercase lg:text-base">
                Starting LP
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
