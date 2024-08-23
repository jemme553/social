import Image from 'next/image';
import Link from 'next/link';
// social\public\icons\match3.png
export default function Page() {
  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 top-0 left-1/2 bg-[#000000]">
      <div className="grid h-full w-full max-w-lg grid-cols-5 mx-auto">
        <Link href='/live' data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5  hover:bg-gray-800 group">
          <Image alt='live' src='/gifs/live.gif' width={80} height={80} />
        </Link>
        <Link href='/random' data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
          <Image alt='match' src='/icons/match3.png' width={80} height={80} />
        </Link>
        <div className="flex items-center justify-center">
          <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:outline-none focus:ring-blue-800">
            <Image alt='add' src='/icons/add2.png' width={25} height={25} />
          </button>
        </div>
        <div id="tooltip-new" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip bg-gray-700">
          Create new item
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <Link href='/videos' data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
          <Image alt='Videos' src='/icons/video.png' width={40} height={40} />
        </Link>
        <Link href='/photos' data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
          <Image alt='Photos' src='/icons/gallery.png' width={40} height={40} />
        </Link>
      </div>
    </div>
  )
}