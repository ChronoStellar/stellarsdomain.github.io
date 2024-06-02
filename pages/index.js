import Image from "next/image";
// import { Poppins } from "next/font/google";
import Head from "next/head";
import { useState } from "react";
 import { 
  SiStarship,
  SiStellar } from "react-icons/si";
 import { 
  IoLogoGithub,
  IoLogoLinkedin 
 } from "react-icons/io5";
import selfie from '../public/selfie.png'
import beeraile1 from '../public/Beeraile_1.png'
import beeraile2 from '../public/Beeraile_2.png'
import ml from '../public/ml_web.png'
import web from '../public/web.png'

// const poppins = Poppins({ subsets: ["latin"] });

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""} font-poppins bg-gray-100 min-h-screen`}>
      <Head>
        <title>Stellar's Domain | Hendrik Nicolas Carlo's Portofolio</title>
        <meta name="description" content="Welcome to the portfolio of Hendrik Nicolas, showcasing projects and skills." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-slate-700 dark:bg-slate-200">
        <nav className="py-10 px-8 flex justify-between text-white dark:text-slate-700">
            <h1 className="text-xl flex items-center">
              <SiStellar className="inline-block mr-2" /> Stellar's Domain
            </h1>
            <ul className="flex items-center">
              <li>
                <SiStarship
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl hover:text-black dark:hover:text-white"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-rose-500 text- to-red-600 hover:to-rose-700 text-white px-4 py-2 border-none rounded-md ml-8 dark:from-amber-400 dark:to-yellow-600 dark:hover:to-amber-300 dark:text-slate-700"
                  href="https://www.canva.com/design/DAGGszsI_rg/1tBB1VZ0FqksMuluVPcuHA/view?utm_content=DAGGszsI_rg&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
      </header>
      
      <main className="bg-gray-100 h-auto dark:text-gray-100 dark:bg-black">
        <section className="">
          <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 hover:text-red-400 transition-colors text-yellow-400 font-medium dark:hover:text-yellow-200 dark:text-rose-700 md:text-6xl">
            Hendrik Nicolas Carlo
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">
            AI developer & Aspiring Data Scientist
          </h3>
          <div className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-10 md:h-96 md:w-96">
              <Image src={selfie} layout="fill" objectFit="cover" />
          </div>
          <hr className="border-2 border-gray-600 mt-5" />
          <div className="pt-5 justify-center flex">
          <div className="border-black px-5 py-3 rounded-md w-auto text-center">
            <span className="text-2xl font-bold">My skills</span>
            <br />
            <ul className="flex flex-wrap gap-5 pt-5 sm:flex-row sm:items-center">
              <li>Web Development</li>
              <li>C/C++ Programming</li>
              <li>My SQL</li>
              <li>UI/UX Design</li>
              <li>Project Management</li>
              <li>AI Development</li>
              <li>Problem-Solving</li>
            </ul>
            </div>
          </div>

          </div>
        </section>
        <section className="p-10 " >
          <div className="text-justify">
          <h2 className="text-5xl py-2 text-yellow-400 font-medium dark:text-rose-700 md:text-6xl">
            My Projects
          </h2>
          <p className="text-xl">
            These are the projects I've made for personal Projects and Competitions. I didn't include my python notebooks here. Those consist of mostly Deep Learning models and transformers. You can see them in my github page.
          </p>
          </div>
          <div className="flex-row flex-wrap gap-5 overflow-auto items-baseline w-auto">
            <div className="flex flex-col sm:flex-row  text-center shadow-lg my-5 dark:shadow-gray-700 flex-1">
              <div className="p-2 h-full w-full sm:w-6/12">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={ml}
                />
              </div>
              <div className="align-middle text-justify flex-1 p-5">
                <p className="text-xl">
                This is Project is made with react for the front end and python for the backend. The purpose of this webite is for Obesity Classification Prediction. Using Machine Learning, namely Random Forest Classifier, the ML model is used through Django API.<br />
                  I made the model, data analysis, and API.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  text-center shadow-lg my-5 dark:shadow-gray-700 flex-1">
              <div className="align-middle text-justify p-5 w-full sm:w-3/6">
                <p className="text-xl">
                  A collaborative project for a hackathon. This mobile app is made with react native and microsoft azure AI service for speech. The Idea is that by using sounds and vibration user can learn braille even if they have visual impairment. I was resposible for the management, concepts, reports and the sort. While I didn't help with the coding much since the time was limited, I helped with making the AI API.
                </p>
              </div>
              <div className="p-2 h-full w-full sm:w-3/12 flex sm:flex-row gap-3">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={beeraile1}
                />
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={beeraile2}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  text-center shadow-lg my-5 dark:shadow-gray-700 flex-1">
              <div className="p-2 h-full w-full sm:w-6/12">
                <Image
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={web}
                />
              </div>
              <div className="align-middle text-justify flex-1 p-5">
                <p className="text-xl">
                This is Project is made with simple HTML, CSS, and JavaScript. All frontend no backend, made for an assignment.<br />
                Notable feature is that I code it all myself, used my own design and photos for this project.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-blue-100 min-h-screen dark:bg-cyan-950">
          <div className="text-center p-5 flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-center lg:py-10">
            <div className="bg-green-100 dark:bg-emerald-900 w-full lg:w-8/12 p-5 lg:p-10">
              <h2 className="font-bold text-4xl">About Me:</h2>
              <p className="text-justify px-2 sm:px-10 pt-5 text-xl">
                Hello! It's a pleasure meeting you, my name is Hendrik Nicolas Carlo, and I am a computer science undergraduate from Binus University. I've been coding since High School and I'm quite passionate about it. I mostly specialize in AI development, where I have honed my skills in Python. However, I also dabble in web development and software development, hence this site is made with Next.js. In my free time, I love to play Monster Hunter, build model kits, and such other hobbies.
                <br />I am excited to bring my skills and self to new challenges and opportunities. Once Again, Nice to meet you!
              </p>
            </div>
            <div className="bg-amber-100 dark:bg-amber-900 w-full lg:w-5/12 p-5 lg:p-10 text-left">
              <div>
                <h3 className="text-2xl font-bold">Contact me:</h3>
                <ol className="pt-2 text-xl">
                  <li className="hover:font-bold"><a href="mailto:hendrik.carlo@binus.co.id">hendrik.carlo@binus.ac.id</a></li>
                  <li className="hover:font-bold">(+62) 878 2487 6058</li>
                  <li className="hover:font-bold"><a href="https://www.linkedin.com/in/hendrik-nicolas-carlo-95ba3a275/" target="_blank"><IoLogoLinkedin className="inline"/> Linkedin</a></li>
                  <li className="hover:font-bold"><a href="https://github.com/ChronoStellar" target="_blank"><IoLogoGithub className="inline"/> ChronoStellar</a></li>
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-slate-700 p-10 text-slate-50 text-center w-full dark:bg-slate-200 dark:text-slate-700">
        <p>&copy; 2024 Hendrik Nicolas. All rights reserved.</p>
      </footer>
    </div>
  );
}
