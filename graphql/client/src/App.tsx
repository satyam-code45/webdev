import { useQuery } from "@apollo/client";
import { users } from "./graphql/query/query";

function App() {
  const { data, loading, error } = useQuery(users);
  if (error) {
    return <h1>Some Erorr</h1>;
  }

  console.log("Data:", data);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <h2>Users:</h2>
      <ul>
        {data.users.map((user: any) => (
          <li key={user._id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
