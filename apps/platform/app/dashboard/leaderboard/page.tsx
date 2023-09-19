import { LeaderboardCard } from '../../../../platform/components/Dashboard/components/Leaderboard/Leaderboard.Card';

async function getLeaderboard() {
  const response = await fetch('http://localhost:4201/api/v1/point');
  const data = await response.json();
  return data;
}

export default async function Page() {
  const { data: leaderboard } = await getLeaderboard();
  console.log(leaderboard);

  return (
    <main className="space-y-8">
      <div>
        <h3>Leaderboard</h3>
        <p>Here is the list of current available courses</p>
      </div>
      <section className="space-y-4">
        {leaderboard.map(({ id, user, point }: UserPointsProps) => {
          const { fullname, username, batch } = user;
          return <LeaderboardCard key={id} fullname={fullname} username={username} point={point} batch={batch} />;
        })}
      </section>
    </main>
  );
}
