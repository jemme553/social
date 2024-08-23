export default function Page({ params }: { params: { id: number } }) {
  return <h1>Profile {params.id}</h1>
}