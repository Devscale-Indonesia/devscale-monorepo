import { Chart } from '../../components/Dashboard/components/Profile/Profile.Chart';
import { Profile } from '../../components/Dashboard/components/Profile/Profile';

export default async function Page() {
  return (
    <main className="grid grid-cols-4 gap-8">
      <Chart />
      <div className="col-span-3 h-full">
        <Profile />
      </div>
    </main>
  );
}
