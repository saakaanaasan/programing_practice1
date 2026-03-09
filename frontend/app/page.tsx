export default async function Root() {
  const res = await fetch("http://127.0.0.1:8000/");
  const data = await res.json();
  return (
    <div>{data.message}</div>
  )
}