import React from 'react'

const Banner = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
        {/*overlay */}
        <div className="max-h-[500px] relative">
            <div className="absolute w-full h-full text-gray-100 bg-black/30 max-h-[500px] font-bold 
            text-4xl sm:text-5xl md:text-6xl flex flex-col justify-center
            ">
                <h1 className="px-2">The <span className="text-orange-500"> Yummy</span> </h1>
                <h1 className="px-2"><span className="text-orange-500">Foods</span> Delivered</h1>
            </div>
            <img 
            className="max-h-[500px] w-full object-cover"
            src={"https://images.pexels.com/photos/3761662/pexels-photo-3761662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" />
        </div>
    </div>
  )
}

export default Banner