import { BootcampProfile } from '../../../components/Dashboard/components/Bootcamp/Bootcamp.Profile';
import { BootcampReview } from '../../../components/Dashboard/components/Bootcamp/Bootcamp.Review';

export default async function Page() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8">
      <div className="space-y-3">
        <h5>Student Profile</h5>
        <BootcampProfile />
      </div>
      <div className="space-y-3 col-span-1 lg:col-span-2">
        <h5>Assignment Review</h5>
        <BootcampReview />
      </div>
    </main>
  );
}
