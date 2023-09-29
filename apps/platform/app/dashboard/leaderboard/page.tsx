import { LeaderboardCard } from '../../../../platform/components/Dashboard/components/Leaderboard/Leaderboard.Card';
import { pocketbase } from '../../../../platform/utils/pocketbase';

async function getLeaderboard() {
  const leaderboard = await pocketbase.collection('leaderboard').getFullList({});
  return leaderboard;
}

export default async function Page() {
  const data = await getLeaderboard();

  return (
    <main className="space-y-8">
      <div>
        <h3>Leaderboard</h3>
        <p>Here is the list of current available courses</p>
      </div>
      <section className="space-y-4">
        {data.map(({ id, fullname, points }: any) => {
          return <LeaderboardCard key={id} fullname={fullname} username={''} point={points} batch={''} />;
        })}
      </section>
    </main>
  );
}
