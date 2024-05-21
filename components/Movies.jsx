import Image from "next/image";
import { useRouter } from "next/router";
import ReactStars from "react-rating-stars-component";

export default function Movies({ gamesResults }) {
    const { push } = useRouter()
    
    return (
        <section>
            {/* <section className="bg-white dark:bg-gray-900"> */}
            <div className="mx-auto px-8 pb-10 md:pt-16 pt-32">
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 sm:grid-cols-2 lg:grid-cols-3">

                    {gamesResults.map((result) => (
                        <button key={result.id} className="flex items-end overflow-hidden bg-cover rounded-lg h-80 relative hover:scale-105 transition-all duration-1000 ease-in shadow-xl shadow-slate-900" onClick={() => push(`/game/${result.id}`)} >
                            <Image src={result.background_image} layout='fill' objectFit="cover" quality={25} />
                            <div className="w-full px-3 pb-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                                <div className="flex justify-between items-center ">
                                    <h2 className="text-lg text-left font-bold text-gray-800 capitalize dark:text-white truncate w-[60%] my-2">{result.name}</h2>
                                    {result.rating && <div className="flex relative justify-center flex-col">
                                        <ReactStars
                                            count={5}
                                            edit={false}
                                            value={result.rating}
                                            size={24}
                                            isHalf={true}
                                            a11y={false}
                                            activeColor="#ffd700"
                                        />
                                        <span className="text-yellow-300 ">&#40;{result?.ratings_count}&#41;</span>
                                    </div>}
                                </div>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-sm font-semibold flex gap-2 tracking-wider text-gray-500 uppercase dark:text-gray-400 truncate w-[75%]">
                                        {result?.genres?.map((genre) => (
                                            <span key={genre.id}>{genre?.name}</span>
                                        ))}
                                    </p>
                                    <p className="font-medium w-28 text-base text-gray-200">{result?.released}</p>
                                </div>
                            </div>
                        </button>
                    ))}

                </div>
            </div>
        </section>
    )
}
