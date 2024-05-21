import Image from 'next/image'
import Link from 'next/link'
import { Result } from 'postcss'
import { BsFillImageFill } from 'react-icons/bs'

export default function DropDownSearchResults({ results }) {


  return (
    <div className='absolute z-10 mt-[8.75rem] md:mt-[5.75rem] w-full flex md:justify-end  justify-center items-center'>
      <ul className='bg-gray-800 w-11/12 md:max-w-[33vw] scrollbar-hide py-2 rounded-lg max-h-56 overflow-y-scroll md:mr-3 px-4 flex flex-col gap-2 shadow-lg shadow-gray-500'>

        {results.map((result, i) => (
          <Link href={`/game/${result.id}`}>
            <li className='text-lg text-gray-200 font-medium h-12 capitalize border-b-[1px] border-gray-600 flex justify-between py-2 items-center hover:bg-gray-600 px-4 rounded-md cursor-pointer' key={i}>
              {result?.background_image ?
                <div className='h-10 aspect-square relative'>
                  <Image src={result?.background_image} layout='fill' objectFit='cover' />
                </div>
                :
                <div className='h-10 aspect-square relative flex justify-center items-center bg-gray-600'>
                  <BsFillImageFill className='text-2xl' />
                </div>
              }
              <span className='truncate w-10/12 text-right'>{result.name}</span>
            </li>
          </Link>
        ))}

      </ul>
    </div>
  )
}
