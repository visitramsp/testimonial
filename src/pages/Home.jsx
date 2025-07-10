import React, { useContext } from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { ThemeContext } from '../contaxts/ThemeContaxt';
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';

export default function Home() {
  const { darkMode, toggleDarkMode,loading } = useContext(ThemeContext);

  console.log(darkMode, "darkMode");

  const cards = [
    {
      title: "Improved Flexibility",
      img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      button: "View video",
    },
    {
      title: "Stress Reduction",
      img: "https://cdn.pixabay.com/photo/2016/03/27/23/08/woman-1284656_1280.jpg",
      button: "View video",
    },
    {
      title: "Join Us for a Yoga Class Today!",
      img: "https://cdn.pixabay.com/photo/2025/02/21/11/02/women-9421788_1280.jpg",
      button: "Join our class",
      isForm: true,
    },
  ];

  return (
    <div className='bg-gray-50 dark:bg-black'>
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-dashed border-white rounded-full animate-spin"></div>
        </div>
      )}
      <div className=' container mx-auto'>
        <div className='flex items-center py-4 justify-between'>
          <div className=' flex gap-2 items-center'>
            <div className='w-10 bg-black dark:bg-white rounded-full'>
              <div className='border h-7 w-7 shadow-md  text-center bg-white  border-black dark:border-white rounded-full'>s</div>
            </div>
            <span className='font-serif font-medium text-lg dark:text-white'>SERENITY YOGA</span>
          </div>
          <div className='flex flex-row items-center gap-5'>
            {
              ["About Us", "Revies", "Training", "Classes"].map((item, index) =>
                <div className=' bg-white p-2 w-24 text-center font-medium text-gray-600 rounded-full border border-gray-200 text-sm' key={index}>{item}</div>)
            }
            {darkMode ? <MdDarkMode onClick={toggleDarkMode} size={30} className='dark:text-white' /> : <MdOutlineLightMode onClick={toggleDarkMode} size={30} className='text-orange-300' />}
          </div>
        </div>
        <div className="bg-[#e7e0f9]  rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-lg mb-8 p-8 md:mb-0">
            <span className="inline-block border border-gray-500 text-gray-600 px-3 py-1 rounded-full text-sm mb-4">
              Mind-Body-Soul Balance
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium font-sans text-gray-900 mb-4">
              Achieve balance in <br /> mind, body, and soul.
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Semper malesuada ut ullamcorper sed tortor curabitur.
            </p>
          </div>
          <div className="relative flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Yoga Pose"
              className="w-[300px] md:w-[500px] object-cover"
            />

            <svg
              viewBox="0 0 500 500"
              className="absolute top-0 left-0 w-full h-full"
            >
              <path
                id="curve"
                d="M 50 250 Q 250 50 450 250 Q 250 450 50 250"
                fill="transparent"
              />
              <text>
                <textPath
                  href="#curve"
                  startOffset="0%"
                  className="fill-purple-600 text-xl"
                >
                  Increases flexibility, mental clarity and emotional balance while reducing stress.
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl overflow-hidden h-[400px] flex items-end text-white"
              style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >

              <div>
                <div className="absolute font-medium top-4 left-4 bg-white text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm cursor-pointer hover:bg-white">
                  {card.button}
                </div>
                <div className="absolute top-4 right-4 bg-white text-black px-2 py-2 rounded-full flex items-center gap-2 text-sm cursor-pointer hover:bg-white">
                  <FiArrowUpRight size={22} />
                </div>
              </div>

              <div className="p-6 bg-gradient-to-t from-black/60 to-transparent w-full">
                <h3 className="text-2xl font-medium mb-4">{card.title}</h3>
                {card.isForm && (
                  <div className="flex flex-col border rounded-full border-white w-full justify-between sm:flex-row items-center gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="px-4 py-2 rounded-full placeholder:text-white/80 bg-transparent w-full sm:w-auto text-black"
                    />
                    <button className="bg-white text-black px-4 mr-0.5 py-1.5 rounded-full font-semibold">
                      Get started
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${require("../assets/curve.PNG")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative py-20 px-8 overflow-hidden rounded-3xl">


        {/* Floating circle images */}
        {[
          { src: "https://cdn.pixabay.com/photo/2022/07/09/21/50/yoga-7311798_1280.jpg", style: "bottom-40 left-72" },
          { src: "https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053487_1280.jpg", style: "top-40 left-60" },
          { src: "https://cdn.pixabay.com/photo/2018/07/06/12/12/yoga-3520275_1280.jpg", style: "top-5 left-1/2" },
          { src: "https://cdn.pixabay.com/photo/2022/07/09/21/50/yoga-7311798_1280.jpg", style: "top-20 right-1/3" },
          { src: "https://cdn.pixabay.com/photo/2022/01/19/20/23/yoga-6950925_1280.jpg", style: "top-5 right-40" },
          { src: "https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053487_1280.jpg" },
        ].map((img, idx) => (
          <img key={idx} src={img.src} alt="Student" className={`absolute w-16 h-16 rounded-full object-cover border-4 border-white shadow-md ${img.style}`} />
        ))}

        <div className="relative z-10 flex flex-col w-full items-center justify-center text-center mx-auto">
          <span className="inline-block border px-4 py-1 rounded-full mb-4">Testimonial</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Student Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mb-8">See how our members have reduced stress and enhanced well-being with our support and guidance.</p>

          <div className="relative flex flex-col items-end">
            <div className="w-36 h-36 rounded-full bg-gradient-to-r from-purple-200 to-purple-100 flex items-center justify-center mb-4">
              <img src="https://cdn.pixabay.com/photo/2022/01/19/20/23/yoga-6950925_1280.jpg" alt="Main student" className="w-28 h-28 rounded-full object-cover" />
            </div>

            <div className="bg-gray-800 text-white text-left rounded-xl p-6 max-w-sm shadow-lg">
              <p className="mb-2">“Joining this yoga community has been life-changing. The instructors are incredibly knowledgeable, and the classes have helped me find inner peace and improve my flexibility.”</p>
              <p className="font-bold">Emily R.</p>
              <p className="text-sm text-gray-400">Graphic designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
