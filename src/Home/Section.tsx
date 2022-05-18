import img from "../img/7.png"

export const Section = () => {
    return (
        <div>

            <div className="gradient  grid md:grid-cols-2 ">
            <div className="py-20 space-x-4  text-black  mt-10  md:ml-20 md:py-28">
   
          <span className="inline-block rounded-xl py-px px-2 mb-4 text-xl leading-5  bg-[#cce5f8] text-black uppercase rounded-9xl">Meet With</span>
          <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">AOur Best Doctors Online.</h1>
          <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">He preference connection astonished on of ye. Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we..</p>
          <div className="flex flex-wrap">
            <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 rounded-xl drop-shadow-2xl  font-medium text-center
            bg-black md:text-black text-gray-50
            md:bg-[#cce5f8] hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border  rounded-md shadow-sm" href="#">Schedule Appointment</a></div>
            <div className ="w-full md:w-auto py-1 md:py-0"><a className="inline-block rounded-2xl py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white  " href="#">Learn More</a></div>
          </div>
       
        
       
    </div>
                   <img src={img} alt="" />
                </div>
                
                
              
                    
                
            </div>
       

    )
}
