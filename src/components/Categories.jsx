import React from 'react'
import {categories} from '../data/data.js'

const Categories = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4">
        <div>
            <h1 className="text-orange-500 text-3xl font-bold text-center">Top Rated Categories</h1>
        </div>
        {/*categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            {
                categories.map(({id,name,image})=>(
                    <div key={id} 
                        className="flex items-center justify-between  bg-gray-100 rounded-md p-2"
                    >
                        <p><span className="text-xl font-semibold">{name}</span></p>
                        <img
                        className="w-20"
                        src={image} alt="" />
                        </div>

                ))
            }

        </div>
        
        </div>
  )
}

export default Categories