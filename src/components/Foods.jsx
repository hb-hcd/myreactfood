import React from 'react'
import { useState } from 'react'
import {data} from '../data/data.js'


const Foods = () => {
  const [food, setFood] = useState(data)
  
  const filterFood = (category)=>{
//   let category = e.target.value;
    setFood(
        data.filter((item)=>
              item.category === category
            )
    )
  }

const filterPrice = (price)=>{
    setFood(
        data.filter((item)=>
            item.price === price
        )
    )
}

  return (
    <div className="max-w-[1640px] mx-auto p-4">
     <h1 className="text-orange-500 text-3xl font-bold text-center">Top Rated Items</h1>
        {/*filter row */}
        <div className="flex flex-col lg:flex-row justify-between">
            {/*filter type */}
            <div>
                <p className="font-bold">Filter Type</p>
                <div className="flex flex-wrap justify-between">
                    <button onClick={()=>setFood(data)} className="m-1 border-orange-500 font-bold hover:text-white hover:bg-orange-500">All</button>
                    <button onClick={()=>filterFood('burger')} className="m-1 border-orange-500 font-bold hover:text-white hover:bg-orange-500">Burger</button>
                    <button onClick={()=>filterFood('pizza')} className="m-1 border-orange-500 font-bold hover:text-white hover:bg-orange-500">Pizza</button>
                    <button  onClick={()=>filterFood('salad')} className="m-1 border-orange-500 font-bold hover:text-white hover:bg-orange-500">Salad</button>
                    <button  onClick={()=>filterFood('chicken')} className="m-1 border-orange-500 font-bold hover:text-white hover:bg-orange-500">Chicken</button>
                </div>
            </div>

            {/*filter price */}
            <div >
                <p className="font-bold">Filter price</p>
                <div className="flex flex-wrap justify-between max-w-[300px] w-full">
                <button onClick={()=>filterPrice('$')} className="m-1 border-orange-500 font-bold hover:text-white hover:bg-orange-500">$</button>
                <button onClick={()=>filterPrice('$$')} className="m-1 border-orange-500 font-bold hover:text-white hover:bg-orange-500">$$</button>
                <button onClick={()=>filterPrice('$$$')} className="m-1 border-orange-500 font-bold hover:text-white hover:bg-orange-500">$$$</button>
                <button onClick={()=>filterPrice('$$$$')} className="m-1 border-orange-500 font-bold hover:text-white hover:bg-orange-500">$$$$</button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 pt-4">
            {food.map(({id,name,image,price})=>(
                <div key={id}
                    className="max-h-[300px]  relative shadow-lg border rounded-lg hover:scale-105 duration-300"
                >
                    <img 
                    className="object-cover rounded-t-lg h-[240px] w-full"
                    src={image} alt="" />
                    <div className="flex justify-between m-2">
                        <p className="font-semibold">{name}</p>
                        <p className="font-semibold">{price}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Foods