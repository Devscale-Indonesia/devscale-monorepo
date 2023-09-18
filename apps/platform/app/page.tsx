import { Auth } from '../components/Auth/components/Auth';

async function getData() {
  const res = await fetch('http://localhost:4201/api/hello', { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return <Auth />;
}
