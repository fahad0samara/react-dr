import img from "../img/3.png"

const Section1 = () => {
  return (
    <div>
<section className=" py-6 relative ">
  <div className="container  mx-auto relative z-10 mt-8 md:mt-0">
    <div className=" lg:max-w-2xl mx-auto text-center">
      <span className=" uppercase text-3xl font-black" >About Us</span>
      <h1 className="text-xl md:text-5xl lg:text-6xl font-heading mt-2 mb-6">
        <span>Take</span>
        <span className="text-[#78b7eb]"> And residence for</span>
        <span> met the estimable disposing..</span>
      </h1>
      <p className="leading-8 mb-10"> Mean if he they
been no hold mr. ls at much do made took held help. Latter
person am secure of estate genius at.</p>
      <div className="flex flex-wrap -mx-2 -mb-2 justify-center items-center">
        <div className="  drop-shadow-one px-2 mb-2"><a className="block w-full md:w-auto py-3 px-8 text-center text-black font-bold bg-indigo-200 rounded-2xl hover:bg-indigo-300 transition duration-200" href="#"> more..</a></div>
    
      </div>
    </div>
  </div>
  <div className="absolute bottom-0 left-0 h-full md:flex md:flex-col md:justify-center">
    <div className="hidden md:block mb-8 h-32 lg:h-64 w-32 lg:w-64 ">
    <img src={img} alt="" />

    </div>
   
  
  </div>
  <div className="absolute top-0 right-0 h-full md:flex md:flex-col md:justify-center">
  
    <div className="hidden md:block mb-8 h-32 lg:h-64  lg:w-64  ">
        <img src={img} alt="" />
    </div>
   
  </div>
</section>

      <section className="py-24 2xl:pt-40 2xl:pb-44  ">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/5 px-4 mb-20 lg:mb-0">
              <span className="block mb-9 text-2xl font-medium uppercase leading-4  tracking-widest">
                How it works
              </span>
              <h2 className="mb-12 md:text-7xl sm:text-4xl text-2xl   font-medium font-heading leading-none">
                Easy to use. Really
              </h2>
              <p className="mb-16 lg:mb-20 text-xl lg:text-2xl leading-relaxed font-heading font-medium">
                Phasellus eget pretium mi, vestibulum lobortis neque. Nulla
                bibendum tempor velit, at hendrerit massa fringilla.
              </p>
              <div className="mb-12 font-heading">
                <button
                  className="py-5 px-10 mb-4 md:mb-0 mr-0 md:mr-5 w-full md:w-auto text-xl leading-none font-medium tracking-tighter font-heading  hover:bg-gray-100 focus:ring-2 focus:ring-gray-50 focus:ring-opacity-50 rounded-xl"
                  type="button"
                >
                  More
                </button>
                <button
                  className="py-5 px-10 w-full md:w-auto text-xl leading-none  text-black font-medium tracking-tighter font-heading bg-[#cce5f8] hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                  type="button"
                >
                  Get started
                </button>
              </div>
              <p className="text-lg leading-6 text-darkBlueGray-400 font-normal">
                Explore the plaftorm right here.
              </p>
            </div>
            <div className="w-full lg:w-3/5 px-4">
              <div className="flex flex-wrap -mx-4 items-start">
                <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0 md:mt-40 relative">
                  <div className="relative shadow-one text-black bg-[#cce5f8] pt-16 pb-20 px-8 md:px-12 2xl:px-16 -mx-1 border border-black border-opacity-10 z-10 rounded-3xl">
                    <div className="relative inline-flex items-center justify-center mb-8 w-12 h-12 leading-6  bg-blue-500 rounded-full">
                      <span className="text-2xl font-bold">1</span>
                    </div>
                    <h2 className="mb-14 text-6xl leading-tight font-medium font-heading">
                      Choose application
                    </h2>
                    <p className="text-lg text-darkBlueGray-400">
                      The nulla commodo, commodo eros a, tristique lectus.
                    </p>
                  </div>
                  <div className="absolute  left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl"></div>
                </div>
                <div className="w-full md:w-1/2 px-4 relative">
                  <div className="relative drop-shadow-one pt-16 pb-20 px-8 md:px-12 2xl:px-16 -mx-1 text-black bg-[#cce5f8]  border border-black border-opacity-10 z-10 rounded-3xl">
                    <div className="relative  inline-flex items-center justify-center mb-8 w-12 h-12 leading-6  bg-blue-500 rounded-full">
                      <span className="text-2xl font-bold">2</span>
                    </div>
                    <h2 className="mb-14 text-7xl 2xl:text-8xl leading-tight font-medium font-heading">
                      Feel free, take all
                    </h2>
                    <p className="text-lg text-darkBlueGray-400">
                      Proin nec nunc felis. In non tellus ultricies, rutrum
                      lacus et, pharetra elit.
                    </p>
                  </div>
                  <div className="absolute left-1/2 -bottom-3 transform -translate-x-1/2 w-11/12 h-24 border border-black border-opacity-10 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
