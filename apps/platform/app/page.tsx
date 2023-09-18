import { Auth } from '../components/Auth/components/Auth';

async function getData() {
  const res = await fetch('https://devscale-lms-platform-api.vercel.app/api/hello', { cache: 'no-store' });
  const data = await res.json();
  return data;
}

export default async function Page() {
  const data = await getData();
  console.log(data);
  return <Auth />;
}
