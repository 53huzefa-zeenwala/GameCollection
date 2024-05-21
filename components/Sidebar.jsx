import { ImHome } from 'react-icons/im'
import { HiTrendingUp } from 'react-icons/hi'
import { AiTwotoneStar } from 'react-icons/ai'
import { useStateContext } from "../context/useContext"
import { IoClose } from 'react-icons/io5'
import { MdUpcoming } from 'react-icons/md'
import Link from 'next/link'
import styles from '../styles/Sidebar.module.css'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const { sidebarHide, setSidebarHide } = useStateContext()
  const { pathname } = useRouter()

  return (
    <div data-fullhide={sidebarHide} className="w-screen h-screen bg-[rgba(0,0,0,0.005)] z-50 fixed top-0 SideBarMain" onClick={() => setSidebarHide(true)}>
      <div data-fullhide={sidebarHide} className="flex flex-col lg:w-64 w-56 h-full px-4 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700 transition-all duration-1000 SideBarMain" style={{ boxShadow: "7px 0px 14px 0px #0e0e0ebf" }}>
        <button className='text-gray-50 hover:text-gray-200 p-1 rounded hover:bg-gray-700 w-fit ml-[80%]' onClick={() => setSidebarHide(true)}>
          <IoClose className='text-3xl' />
        </button>

        <div className="flex flex-col justify-between flex-1 mt-2">
          <nav className='flex flex-col gap-5'>
            <Link href={'/'} passHref >
              <a className={pathname === '/' ? styles.sidebarActiveLink : styles.sidebarLink}>
                <ImHome />
                <span className="mx-4 font-medium">Home</span>
              </a>
            </Link>

            <Link href={'/latest'} passHref >
              <a className={pathname === '/latest' ? styles.sidebarActiveLink : styles.sidebarLink}>
                <HiTrendingUp />
                <span className="mx-4 font-medium">Latest</span>
              </a>
            </Link>

            <Link href={'/trending'} passHref >
              <a className={pathname === '/trending' ? styles.sidebarActiveLink : styles.sidebarLink}>
                <AiTwotoneStar />
                <span className="mx-4 font-medium">Trending</span>
              </a>
            </Link>

            <Link href={'/upcoming'} passHref >
              <a className={pathname === '/upcoming' ? styles.sidebarActiveLink : styles.sidebarLink}>
                <MdUpcoming />
                <span className="mx-4 font-medium">Upcoming</span>
              </a>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}
