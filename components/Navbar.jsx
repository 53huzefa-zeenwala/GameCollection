import { GiHamburgerMenu } from 'react-icons/gi'
import { BiSearchAlt } from 'react-icons/bi'
import Image from 'next/image'
import { useStateContext } from '../context/useContext'

export default function Navbar() {
  const { setSidebarHide, setSearchTerm, gameSearchResults } = useStateContext()
  return (
    <nav className="absolute Navbar top-0 w-full py-4 sm:pr-6 sm:pl-5 pr-4 pl-3 flex flex-col md:justify-between md:flex-row bg-gray-800" style={{ boxShadow: "0px 4px 12px 0px #0e0e0ebf" }} >
      <div className="md:w-1/2 w-2/3 justify-between flex items-center">
        <button onClick={() => setSidebarHide(false)} className='hover:bg-gray-700 text-white hover:text-gray-200 p-1 rounded'>
          <GiHamburgerMenu className=' text-3xl' />
        </button>
        <div className='flex justify-center items-center gap-2'>
          <div className='h-10 aspect-square relative'>
            <Image src={'/logo.png'} layout="fill" objectFit='contain' />
          </div>
          <h1 className="text-2xl font-medium font-mono text-green-400">GAMING</h1>
        </div>
      </div>
      <div className="relative mt-4 md:mt-0 md:w-1/3 w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <BiSearchAlt className="text-2xl text-gray-400" />
        </span>
        <input type="search" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" onChange={e => setSearchTerm(e.target.value)} />
      </div>
    </nav>
  )
}
