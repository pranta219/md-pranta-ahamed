import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook
} from "react-icons/ai";
import Image from 'next/image';
import deved from '../public/dev-ed-wave-2.png';
import desing from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import contact from '../public/contact.gif';
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import web6 from '../public/web6.png'
import web7 from '../public/web7.png'
import web8 from '../public/web8.png'
import web9 from '../public/web9.png'
import web10 from '../public/web10.png'
import web11 from '../public/web11.png'
import web12 from '../public/web12.png'
import web13 from '../public/web13.png'
import web14 from '../public/web14.png'
import web15 from '../public/web15.png'
import web16 from '../public/web16.png'
import { useState } from 'react';
import { useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import emailjs from '@emailjs/browser';
import React from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h9z9x2p', 'template_g6n89or', form.current, 'oXGlF_xXtkvlFjbLw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <div className={darkMode ? "dark" : ""}>


      <Head>
        <title>Md Pranta Ahamed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/dev-ed-wavep.png" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>

        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons dark:text-white'>PRANTA</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1G-AALUmWSjqUcekgEaEQvIqas3X2mU2j/view?usp=sharing" >Resume</a>
              </li>
            </ul>
          </nav>

          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Md Pranta Ahamed</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Mern Stack In HTML/Css and REACT-js.</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>Freelancer providing services for programming and design content needs. Join me down bellow and {"let's"} get cracking!</p>
          </div>
          <div className='text-4xl flex flex-wrap justify-center gap-5 py-3 text-gray-600 dark:text-white'>
              <a className='saturate-10 hover:saturate-800' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/md-pranta-ahamed221/'><AiFillLinkedin /></a>
              <a className='saturate-10 hover:saturate-800' target="_blank" rel="noreferrer" href='https://github.com/pranta219'><AiFillGithub /></a>
              <a className='saturate-10 hover:saturate-800' target="_blank" rel="noreferrer" href='https://x.com/MdPranta5'><AiFillTwitterCircle /></a>
              <a className='saturate-10 hover:saturate-800' target="_blank" rel="noreferrer" href='https://www.instagram.com/md_pranta_ahamed/'><AiFillInstagram /></a>
              <a className='saturate-10 hover:saturate-800' target="_blank" rel="noreferrer" href='https://www.facebook.com/md.pranta1243/'><AiFillFacebook /></a>
          </div>
          <div className='ralative bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 mb-20 mx-auto overflow-hidden md:h-96 md:w-96'>
            <Image alt='img' src={deved} objectFit='cover' />
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-5xl py-1 dark:text-white'>Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Since the beginning of <span className='text-teal-500'>my journey</span> as a freel developer, {"I've"} done  <span className='text-teal-500'>remote work</span> for You.</p>
          </div>
          <div className='lg:flex gap-10'>
            <Tilt>
              <div style={{ height: '500px' }} className='text-center shadow-lg p-10 rounded-xl my-10 mx-auto dark:bg-white'>
                <Image alt='img'src={code} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Codeing</h3>
                <p className='py-2'>
                  Creating elegant design suitedfor your needs design theory.
                </p>
                <h4 className='py-4 text-teal-600'>Development tools I use</h4>
                <p className='text-grey-800 py-1'>Html/Css</p>
                <p className='text-grey-800 py-1'>Javascript</p>
                <p className='text-grey-800 py-1'>Sass</p>
              </div>
            </Tilt>
            <Tilt>
              <div style={{ height: '500px' }} className='text-center shadow-lg p-10 rounded-xl my-10 mx-auto dark:bg-white'>
                <Image alt='img'src={desing} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                <p className='py-2'>
                  Creating elegant design suited for your needs design theory.
                </p>
                <h4 className='py-4 text-teal-600'>Degin tools I use</h4>
                <p className='text-grey-800 py-1'>Figma</p>
                <p className='text-grey-800 py-1'>PhotoShop</p>
              </div>
            </Tilt>
            <Tilt>
              <div style={{ height: '500px' }} className='text-center shadow-lg p-10 rounded-xl my-10 mx-auto dark:bg-white'>
                <Image alt='img'src={consulting} width={100} height={100} />
                <h3 className='text-lg font-medium pt-8 pb-2'>Somthing Else</h3>
                <p className='py-2'>
                  Creating elegant design suitedfor your needs design theory.
                </p>
                <h4 className='py-4 text-teal-600'>Others tools I use</h4>
                <p className='text-grey-800 py-1'>React</p>
                <p className='text-grey-800 py-1'>Firebase</p>
                <p className='text-grey-800 py-1'>MongoDb</p>
              </div>
            </Tilt>
          </div>
        </section>

        <section>
          <div className='flex flex-col gap-10 py-20 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <h3 className='text-5xl py-1 dark:text-white'>Portfolio</h3>
              <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Since the beginning of <span className='text-teal-500'>my journey</span> as a freel developer, {"I've"} done  <span className='text-teal-500'>remote work</span> for agencies consulted for <span className='text-teal-500'>startups</span> and collaboreted with talanted people to create <span className='text-teal-500'>digital products</span> for both business and consumer use. Freelancer providing services for <span className='text-teal-500'>programming</span> and design content needs. <span className='text-teal-500'>Join</span> me doen bellow and {"let's"} get cracking!</p>
            </div>
            <div className='basis-1/3 flex-1'>
              <div className=" mx-auto">
                <div className="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
                  <div className="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
                    <div className="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
                    </div>
                    <div className="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
                    </div>
                    <div className="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
                    </div>
                    <div className="mx-auto pr-16" id="terminaltitle">
                      <p className="text-center text-sm">Terminal</p>
                    </div>

                  </div>
                  <div className="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
                    <p className="pb-1">Last login: Fri March 20 09:11:04 on ttys002</p>
                    <p className="pb-1">Pranta:Devprojects Javascript$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/acadia-university-online-course-html5-template/52956190?s_rank=15">
                <Image alt='img'src={web16} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' /></a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/solub-solar-and-renewable-energy-html-template/55016394?s_rank=1">
                <Image alt='img'src={web14} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' /></a>
            </div> 
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/ishpat-construction-html-template/50120624?s_rank=33">
                <Image alt='img'src={web13} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' /></a>
            </div> 
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/bhumi-real-estate-html5-template/53930818?s_rank=4">
                <Image alt='img'src={web12} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' /></a>
            </div> 
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/visaho-immigration-and-visa-consulting-html-template/48073445?s_rank=34">
                <Image alt='img'src={web11} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' /></a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/meduca-medical-health-html-template/54710838?s_rank=2">
                <Image alt='img'src={web15} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' /></a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/finbest-banking-and-finance-html-template/46682487">
                <Image alt='img'src={web7} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' /></a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/futurenet-technology-it-solutions-html-template/45607497">
                <Image alt='img'src={web8} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
                </a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/dhora-movie-production-film-studio-html-template/47272701">
                <Image alt='img'src={web10} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' /></a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/realnest-real-estate-html-template/46085422">
                <Image alt='img'src={web9} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
                </a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/cetalog-marketing-seo-agency-html-template/42864907">
                <Image alt='img'src={web2} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
                </a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/kleaso-cleaning-services-html5-template/43766025">
                <Image alt='img'src={web3} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/technix-technology-it-solutions-html-template/44871472">
                <Image alt='img'src={web4} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://themeforest.net/item/donafund-fundraising-charity-html-template/42488004">
                <Image alt='img'src={web1} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
                </a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://dulcet-truffle-dc9870.netlify.app/">
                <Image alt='img'src={web5} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </a>
            </div>
            <div className='basis-1/3 flex-1 relative transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0'>
              <a target="_blank" rel="noreferrer" href="https://bicycle-parts-83ec4.web.app/">
                <Image alt='img'src={web6} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
              </a>
            </div>
          </div>
        </section>

        <section className='py-20'>
          <div className="relative lg:py-0">
            <div className="flex flex-col items-center justify-between pt-0 pb-0 mt-0 mr-auto mb-0 ml-auto max-w-7xl
                xl:px-5 lg:flex-row">
              <div className="flex flex-col items-center w-full pt-5 pb-20 xl:flex-row">
                <div className="w-full bg-cover relative max-w-md lg:pb-10 lg:max-w-2xl lg:w-7/12">
                    <Image alt='img'src={contact} width={600} height={600} />
                </div>

                <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 lg:pb-10 max-w-2xl lg:mt-0 xl:w-6/12">
                  <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
                      relative z-10">
                    <div className="isolate bg-white w-full">
                      <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{"Let's"} Talk With Me <br/> For Any Project!</h2>
                      </div>
                      <form ref={form} onSubmit={sendEmail} action="#" method="POST" className="mt-10 sm:mt-10">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-5 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">Full Name</label>
                            <div className="mt-2.5">
                              <input type="text" name="user_name" id="first-name" required className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 duration-[1s,15s] focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">Company</label>
                            <div className="mt-2.5">
                              <input type="text" name="company" id="company" required className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                            <div className="mt-2.5">
                              <input type="email" name="user_email" id="email" required className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                          </div>
                          <div className="sm:col-span-2">
                            <label className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                            <div className="mt-2.5">
                              <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none"></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="mt-10">
                          <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{"Let's"} talk</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

