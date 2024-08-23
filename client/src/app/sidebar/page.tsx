import Image from 'next/image';
import Link from 'next/link';

export default function Page({ params }: { params: { top: string } }) {
  return (
    <div className={`dropdown dropdown-bottom absolute top-${params.top} right-5`} >
      <div tabIndex={0} className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Image alt='live' src='/icons/menu.png' width={80} height={80} />
        </button>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-[1] w-fit py-2 px-0 shadow">
        <li>
          <Link href='/' data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center  rounded-full hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-400 group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>
        </li>
        <li>
          <Link href='/notifications' data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center rounded-full hover:bg-gray-800 group">
            <svg className="w-7 h-7 mb-1 text-gray-400 group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" strokeWidth="3" strokeLinecap="butt" stroke-line-join="arcs" viewBox="0 0 24 24">
              <path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="sr-only">Notifications</span>
          </Link>
        </li>
        <li>
          <Link href='/chat' data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center rounded-full hover:bg-gray-800 group">
            <svg stroke="currentColor" strokeLinecap="butt" stroke-line-join="arcs" strokeWidth="2" className="w-7 h-7 mb-1 text-gray-400 group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className="sr-only">chat</span>
          </Link>
        </li>
        <li>
          <Link href='/profile' data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center  rounded-full hover:bg-gray-800 group">
            <svg className="w-7 h-7 mb-1 text-gray-400 group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span className="sr-only">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
  )
}