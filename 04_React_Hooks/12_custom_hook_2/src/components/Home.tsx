import { fetchPosts } from "../function/fetchPosts";
import useAsync from "../hook/useAsync";

function Home() {
  const { run, result, status, error } = useAsync(fetchPosts, false);

  if (status === "pending")
    return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => { run() }}>Fetch Posts</button>
      {status === "error" && <pre>{JSON.stringify(error, null, 2)}</pre>}
      {status === "settled" && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>
  );
}

export default Home