import React from 'react'
import Img1 from "../../assets/5.jpg"
import Img2 from "../../assets/6.jpg"
import {motion} from "framer-motion";
import { SlideUp } from '../utility/animation';
import { data } from 'framer-motion/client';
 
const JournalData=[
    {
        id:1,
        title:"An  unforgattable",
        about:"Majuli Island is the one of the biggest river islands in the world and subsequently in India. The most unique of all the islands in India",
        date:"May 30 ,2022",
        url:"#",
        image:Img1,
        delay:0.2,
    },
    {
        id:2,
        title:"Symphonies in stell",
        about:"Majuli Island is the one of the biggest river islands in the world and subsequently in India. The most unique of all the islands in India",
        date:"April 30 ,2022",
        url:"#",
        image:Img2,
        delay:0.4,
    },
]
const Journal = () => {
  return <>
  <section className='container mt-40 ' id="journal">
    <motion.div initial={{opacity:0}}
         whileInView={{opacity:1}}
         transition={{duration:1.5,delay:0.2}}
        className ="text-center md:max-w-[650px] mx-auto space-y-4" >
           
            <p className='text-3xl'>
                The Ritik
            </p>
            <p>
            This small island of India has traces of
             Portuguese culture infused in it. The architectural beauty and serenity can stun 
             you to a surreal world
            </p>
        </motion.div>

    <div 
        className='grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center mt-20'>
            {JournalData.map((data)=>(
                <motion.div variants={SlideUp(data.delay)} initial="hidden" whileInView="visible" key={data.id}>
                  <div className='overflow-hidden'>
                     <img src={data.image} alt=""
                      className='w-full h-[350px] object-cover '/>
                    </div>
                    <div className='space-y-1 py-6 text-center px-12 '>
                        <p className='uppercase'>{data.date}</p>
                        <p className='text-xl font-semibold font-merriweather'>{data.title}</p>
                        <p className='!mt-8'>{data.about}</p>
                    </div>
                      
                </motion.div>  
                ))}
        </div>

        <button className='block mx-auto mt-6 text-brandBlue
        uppercase font-bold'>All post</button>
   

  </section>
  </>
}

export default Journal