import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

import img0 from "../img/5.png";
import img from "../img/6.jpg";
import img5 from "../img/11.jpg";
import img6 from "../img/12.jpg";
import img1 from "../img/8.jpg";
import img3 from "../img/9.jpg";
import img4 from "../img/10.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";
import {FiArrowLeftCircle} from "react-icons/fi";
import {FiArrowRightCircle} from "react-icons/fi";
import {FaArrowAltCircleRight} from "react-icons/fa";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {GiDoughRoller} from "react-icons/gi";
export default function Section2() {
  return (
    <div>
      <div className="container mx-auto">
          
        <div className="flex items-center overflow-hidden scrollbar-hide justify-center  py-24 sm:py-8 px-4">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            className=""
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={5}
          
            visibleSlides={3}
            isPlaying={true}
            step={1}
            infinite={false}
          >
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded-full bg-black"
                id="next"
              >
                <FaArrowAltCircleRight size={40} color="white"/>
              </ButtonNext>
             
                <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 left-0 ml-8  focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-40 bg-black rounded-full cursor-pointer"
                id="prev"
              >
                <FaArrowAltCircleLeft size={40} color="white"/>
              </ButtonBack>
            <div className=" relative flex items-center    justify-center">
            
              <div className="    h-full mx-auto overflow-x-hidden overflow-y-hidden ">
                <Slider
           
                >
                  <div
                    id="slider"
                    className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                  >
                 <Slide index={0}>
                    <div className="max-w-sm mx-auto scrollbar-hide  overflow-hidden ">
            <img className="object-cover object-center w-full h-56" src={img3} alt="avatar"/>
            
            <div className="flex items-center px-6 py-3 bg-gray-900">
           < GiDoughRoller color=" white"/>

                <h1 className="mx-3 text-lg font-semibold text-white">Dr. lane</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold ">Oncologist</h1>

                <p className="py-2 ">Full And excellence partiality estimating terminated
day everylhing</p>
                
                <div className="flex items-center mt-4 ">
                   
                   <button className=" bg-blue-200 hover:bg-green-500 rounded-xl py-3 px-2">schedule Appointment</button>
                </div>

                

                <div className="flex items-center mt-4  ">
                   <AiOutlineMail color=" red"/>
                    
                    <h1 className="px-2 text-sm">lean@gmail.com</h1>
                </div>
            </div>
        </div>
                    </Slide>
                    <Slide index={1}>
                    <div className="max-w-sm mx-auto overflow-hidden ">
            <img className="object-cover object-center w-full h-56" src={img4} alt="avatar"/>
            
            <div className="flex items-center px-6 py-3 bg-gray-900">
           < GiDoughRoller color=" white"/>

                <h1 className="mx-3 text-lg font-semibold text-white">Dr. Brown</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold ">physicians</h1>

                <p className="py-2 ">Full And excellence partiality estimating terminated
day everylhing</p>
                
                <div className="flex items-center mt-4 ">
                   
                   <button className=" bg-blue-200 hover:bg-green-500 rounded-xl py-3 px-2">schedule Appointment</button>
                </div>

                

                <div className="flex items-center mt-4  ">
                   <AiOutlineMail color=" red"/>
                    
                    <h1 className="px-2 text-sm">brown@gmail.com</h1>
                </div>
            </div>
        </div>
                    </Slide>
                    <Slide index={2}>
                    <div className="max-w-sm mx-auto overflow-hidden ">
            <img className="object-cover object-center w-full h-56" src={img1} alt="avatar"/>
            
            <div className="flex items-center px-6 py-3 bg-gray-900">
           < GiDoughRoller color=" white"/>

                <h1 className="mx-3 text-lg font-semibold text-white">Dr. fahad</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold ">Oncologist</h1>

                <p className="py-2 ">Full And excellence partiality estimating terminated
day everylhing</p>
                
                <div className="flex items-center mt-4 ">
                   
                   <button className=" bg-blue-200 hover:bg-green-500 rounded-xl py-3 px-2">schedule Appointment</button>
                </div>

                

                <div className="flex items-center mt-4  ">
                   <AiOutlineMail color=" red"/>
                    
                    <h1 className="px-2 text-sm">fahad@gmail.com</h1>
                </div>
            </div>
        </div>
                    </Slide>
                    <Slide index={3}>
                    <div className="max-w-sm mx-auto overflow-hidden ">
            <img className="object-cover object-center w-full h-56" src={img5} alt="avatar"/>
            
            <div className="flex items-center px-6 py-3 bg-gray-900">
           < GiDoughRoller color=" white"/>

                <h1 className="mx-3 text-lg font-semibold text-white">Dr. samara</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold ">Pediatricians</h1>

                <p className="py-2 ">Full And excellence partiality estimating terminated
day everylhing</p>
                
                <div className="flex items-center mt-4 ">
                   
                   <button className=" bg-blue-200 hover:bg-green-500 rounded-xl py-3 px-2">schedule Appointment</button>
                </div>

                

                <div className="flex items-center mt-4  ">
                   <AiOutlineMail color=" red"/>
                    
                    <h1 className="px-2 text-sm">samara@gmail.com</h1>
                </div>
            </div>
        </div>
                    </Slide>
                    <Slide index={4}>
                    <div className="max-w-sm mx-auto overflow-hidden ">
            <img className="object-cover object-center w-full h-56" src={img6} alt="avatar"/>
            
            <div className="flex items-center px-6 py-3 bg-gray-900">
           < GiDoughRoller color=" white"/>

                <h1 className="mx-3 text-lg font-semibold text-white">Dr. mokdad</h1>
            </div>

            <div className="px-6 py-4">
                <h1 className="text-xl font-semibold ">Neurologists</h1>

                <p className="py-2 ">Full And excellence partiality estimating terminated
day everylhing</p>
                
                <div className="flex items-center mt-4 ">
                   
                   <button className=" bg-blue-200 hover:bg-green-500 rounded-xl py-3 px-2">schedule Appointment</button>
                </div>

                

                <div className="flex items-center mt-4  ">
                   <AiOutlineMail color=" red"/>
                    
                    <h1 className="px-2 text-sm">mokdad@gmail.com</h1>
                </div>
            </div>
        </div>
                    </Slide>
                    
                  </div>
                </Slider>
              </div>
              
            </div>
          </CarouselProvider>

         
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between h-full w-full absolute z-0">
          <div className="w-1/3 bg-[#cce5f8] h-full" />
          <div className="w-4/6 ml-16 h-full" />
        </div>
        <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={2}
          >
            <h1 className="text-5xl font-bold xl:block hidden leading-tight ">
              What our customers are
              <br />
              saying
            </h1>
            <div className="flex items-center mt-8">
              <ButtonBack
                className="cursor-pointer bg-black rounded-full "
                role="button"
                aria-label="previous slide"
              >
                <FiArrowLeftCircle color="white" size={40} />
              </ButtonBack>

              <ButtonNext
                role="button"
                aria-label="next slide"
                className="cursor-pointer ml-2 bg-black rounded-full"
              >
                <FiArrowRightCircle color="white" size={40} />
              </ButtonNext>
            </div>
            <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 ">
              What our customers are saying
            </h1>
            <Slider>
              <Slide index={0} tabIndex="null">
                <div className="flex">
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <img
                        src={img0}
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose ">
                          Some of the best work that was done!
                        </h1>
                        <p
                          className="text-base font-medium leading-6 mt-4 
                                            "
                        >
                          Our core values are at the heart of all that we do.
                          They are integrated into our daily work lives and help
                          us to remember our customers always comes first, the
                          last thank you should always comes from us.
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 ">
                          Julian vidal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div
                  className="flex relative"
                  style={{transform: "translateX(0%)"}}
                >
                  <div className="mt-14 md:flex">
                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                      <img
                        src={img}
                        alt="image of profile"
                        className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                      />
                      <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                          alt="commas"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                      <div>
                        <h1 className="text-2xl font-semibold xl:leading-loose ">
                          Some of the best work that was done!
                        </h1>
                        <p className="text-base font-medium leading-6 mt-4 ">
                          Our core values are at the heart of all that we do.
                          They are integrated into our daily work lives and help
                          us to remember our customers always comes first, the
                          last thank you should always comes from us.
                        </p>
                      </div>
                      <div className="md:mt-0 mt-8">
                        <p className="text-base font-medium leading-4 text-gray-800">
                          Anna Smith
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
