import Image from 'next/image'
import React from 'react'
import ReactStars from 'react-rating-stars-component'

export default function GameHeader({ backgroundImage, name, rating, website, released, ratings_count, description, shortDescription }) {
    return (
        <div className='md:mt-16 mt-32 text-white w-full md:h-[35rem] h-[32.5rem] relative'>
            {backgroundImage && <Image src={backgroundImage} layout='fill' objectFit='cover' priority={true} />}
            <div className='absolute w-full h-full bg-black opacity-60'></div>
            <div className='absolute lg:w-1/2 w-3/4 pl-6'>
                <h1 className='lg:text-5xl text-3xl text-left text-red-500 font-bold pt-28' style={{ fontFamily: 'Roboto Serif, serif', textShadow: "2px 2px 4px rgba(255,255,255,.5)" }}>{name}</h1>
                <div className='flex justify-between items-center'>
                    {rating && <div className="flex relative justify-center items-end gap-2">
                        <ReactStars
                            count={5}
                            edit={false}
                            value={rating}
                            size={24}
                            isHalf={true}
                            a11y={false}
                            activeColor="#ffd700"
                        />
                        <span className="text-yellow-300 pb-1">&#40;{ratings_count}&#41;</span>
                    </div>}
                    <p style={{ textShadow: "2px 2px 4px rgba(0,0,0,.5)" }} className="font-medium w-28 text-slate-200 text-lg pt-1">{released}</p>
                </div>
                <p className='text-[0.85rem] text-gray-200 hidden md:inline' dangerouslySetInnerHTML={{ __html: description }}></p>
                <p className='text-[0.85rem] text-gray-200 md:hidden'>{shortDescription.length >= 30 ? `${shortDescription.substring(0, 260)}...` : shortDescription}</p>
                {website && <a href={website} rel='noopener noreferrer' target='_blank'>
                    <button className='bg-white text-gray-800 font-bold text-xl py-2 px-3 rounded-lg mt-3 shadow-md shadow-gray-500 hover:bg-gray-200 mx-3'>
                        Official Website
                    </button>
                </a>}
            </div>
        </div>
    )
}
