import { LeaderboardCard } from '../../../../platform/components/Dashboard/components/Leaderboard/Leaderboard.Card';

export default async function Page() {
  return (
    <main className="space-y-8">
      <div>
        <h3>Leaderboard</h3>
        <p>Here is the list of current available courses</p>
      </div>
      <div>
        <LeaderboardCard />
      </div>
    </main>
  );
}
