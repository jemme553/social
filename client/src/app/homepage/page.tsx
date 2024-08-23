import Link from 'next/link';
import Navbar from '../navbar/page'
import Sidebar from '../sidebar/page'

export default function Page() {
  const params = {
    top : '20'
  }
    return (
      <div className='mt-16'>
      <Navbar />
      <Sidebar params={params}/>
      <Link href='/profile/2543567'><h1>Go to profile with id</h1></Link>
      <Link href='/notifications' ><h1>Go to notifications</h1></Link>
      <Link href='/friends' ><h1>Go to friends</h1></Link>
      <Link href='/posts' ><h1>Go to posts</h1></Link>
      <Link href='/profile' ><h1>Go to profile</h1></Link>
      </div>
    )
  }