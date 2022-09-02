import React from 'react'

const HeadlineCards = () => {
    const cards = [
        {
            id: 1,
            url: "https://images.pexels.com/photos/588776/pexels-photo-588776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Brunch for you",
            desc: "Through 08/31"
        },
        {
            id: 2,
            url: "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Wake up coffee",
            desc: "Through 08/31"
        },
        {
            id: 3,
            url: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Treats you well",
            desc: "Through 08/31"
        }
    ]
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-10 grid md:grid-cols-3 gap-6">
            {cards.map(({id,title,url,desc}) => (

                <div className="relative rounded-lg" key={id}>
                    <div className="absolute text-gray-200 w-full h-full bg-black/40 rounded-xl">
                        <h1 className="font-bold text-2xl px-2 pt-4">{title}</h1>
                        <p className="px-2">{desc}</p>
                        <button className="absolute bg-white text-black border-none mx-2 bottom-4">Order Now</button>
                    </div>
                    <img
                        className="w-full object-cover rounded-xl max-h-[160px] md:max-h-[200px]"
                        src={url} alt="" />
                </div>
            ))}

        </div>
    )
}

export default HeadlineCards