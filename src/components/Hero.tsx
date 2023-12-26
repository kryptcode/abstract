import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";


const Hero = () => {
  return (
    <div>
        {/* <div className="w-screen relative h-[80vh] ">
        <img 
        src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
        className="w-full object-cover blur h-full"
        alt="" />
        <div className="text-black text-7xl absolute top-0 left-0 w-full h-full bg-black/20">
          <div className="w-[90%] mx-auto uppercase font-semibold space-y-4 py-10 text-[#FFD700] ">
            <div>Roam</div>
            <div>Explore</div>
            <div>Convert</div>
          </div>
        </div>
      </div> */}

      <div className="w-screen relative h-[80vh] ">
          <div className="w-[90%] mx-auto flex justify-between ">
            <div className="flex-1 ">
            <div className="text-8xl font-bold text-black uppercase">Roam,</div>
            <div className="my-4 text-8xl font-bold text-black uppercase">Explore,</div>
            <div className="text-8xl font-bold text-black uppercase mb-2">Convert</div>
            <p className="text-lg text-black/45">
            Your Ultimate Guide to RVs and Schoolies. 
            </p>

            <Link href={'#showcase-start'} className="absolute bottom-3 hover:animate-pulse left-1/2 bg-black w-16 h-16 cursor-pointer z-10 -translate-x-1/2 rounded-full p-5 flex justify-center items-center">
            <FaChevronDown className='text-white text-4xl' />
            </Link>

            </div>

            <div className="flex-[1.5] ">
            <img 
              src="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              className="blur-[3px] rounded-lg"
              alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Hero