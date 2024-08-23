import Sidebar from '../sidebar/page'

export default function Page() {
  const params = {
    top : '2'
  }
  return (
    <>
      <Sidebar  params={params} />
      <h1>Profile</h1>
    </>
  )
}