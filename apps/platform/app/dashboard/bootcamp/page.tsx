import { BootcampChart } from '../../../components/Dashboard/components/Bootcamp/Bootcamp.Tools';
import { BootcampProfile } from '../../../components/Dashboard/components/Bootcamp/Bootcamp.Profile';
import { BootcampReview } from '../../../components/Dashboard/components/Bootcamp/Bootcamp.Review';

export default async function Page() {
  return (
    <main className="grid grid-cols-4 gap-8">
      <BootcampChart />
      <div className="col-span-3 h-full">
        <BootcampProfile />
      </div>
      <div></div>
      <div className="col-span-3 h-full space-y-4">
        <BootcampReview />
      </div>
    </main>
  );
}
