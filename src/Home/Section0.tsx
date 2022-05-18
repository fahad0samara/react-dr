import img from '../img/1.png'
import img0 from '../img/2.png'

const Section0 = () => {
  return (
    <div>
   <div className='grid md:grid-cols-5   mt-5'>
   <img className='hidden md:block w-1/2 ml-5' src={img} alt=""  />
    <div className='mt-10 space-y-4 col-span-3 '>
<h1 className=' font-black text-2xl text-center text-[#9dccf1] '>Our Stats show that we've
Happy Potients

</h1>
<h3 className='text-center text-xl  font-semibold m-4 md:m-0  md:text-2xl'>And excellence partiality estimating terminated day everything</h3>
        </div>
    <img className=' hidden md:block w-1/2 ml-20' src={img0} alt=""  />


   </div>

<div className="px-4 md:mt-0 mt-5   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 gap-10   md:grid-cols-4">
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            144K
          </h6>
          <p className="font-bold">Patients Sewed</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            32.1K
          </h6>
          <p className="font-bold">consultations
          </p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            12.9K
          </h6>
          <p className="font-bold">Subscribers</p>
        </div>
        <div className="text-center">
          <h6 className="text-3xl font-bold text-deep-purple-accent-400">
            85%
          </h6>
          <p className="font-bold">Success Rate</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Section0