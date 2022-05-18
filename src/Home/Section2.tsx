
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import img0 from '../img/5.png'
import img from '../img/6.jpg'
import "pure-react-carousel/dist/react-carousel.es.css";
import { FiArrowLeftCircle } from 'react-icons/fi'
import { FiArrowRightCircle } from 'react-icons/fi'
export default function Section2() {
    return (
        <div>
            <div className="flex items-center justify-between h-full w-full absolute z-0">
                <div className="w-1/3 bg-[#cce5f8] h-full" />
                <div className="w-4/6 ml-16 h-full" />
            </div>
            <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
                <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
                    <h1 className="text-5xl font-bold xl:block hidden leading-tight ">
                        What our customers are
                        <br />
                        saying
                    </h1>
                    <div className="flex items-center mt-8">
                        <ButtonBack className="cursor-pointer bg-black rounded-full " role="button" aria-label="previous slide">
                            <FiArrowLeftCircle color="white" size={40} />
                        </ButtonBack>

                        <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2 bg-black rounded-full">
                            <FiArrowRightCircle color="white" size={40} />
                        </ButtonNext>
                    </div>
                    <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 ">What our customers are saying</h1>
                    <Slider>
                        <Slide index={0} tabIndex="null">
                            <div className="flex">
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <img src={img0} alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose ">Some of the best work that was done!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 
                                            ">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                        </div>
                                        <div className="md:mt-0 mt-8">
                                            <p className="text-base font-medium leading-4 ">Julian vidal</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="flex relative" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <img src={img} alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose ">Some of the best work that was done!</h1>
                                            <p className="text-base font-medium leading-6 mt-4 ">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                        </div>
                                        <div className="md:mt-0 mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">Anna Smith</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                   
                </CarouselProvider>
            </div>
        </div>
    );
}