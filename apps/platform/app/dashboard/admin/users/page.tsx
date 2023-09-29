import { pocketbase } from '../../../../utils/pocketbase';

async function getUsers() {
  const users = await pocketbase.collection('users').getFullList({
    expand: 'bootcampBatch',
  });
  return users;
}

export default async function Page() {
  const users = await getUsers();
  console.log({ users });
  return (
    <main className="space-y-12">
      <h3>All Users</h3>
      <div>
        {users.map(({ id, batch, avatar, username, name }: any) => {
          return (
            <div key={id}>
              <div>{name}</div>
              <div>@{username}</div>
              <div>{batch}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
