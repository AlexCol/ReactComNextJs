export const fetchPosts = async () => {
  const rand = Math.floor(Math.random() * 4) + 1;
  if (rand === 4) {
    throw new Error("Erro ao buscar os posts");
  }

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (response.status !== 200) {
    throw new Error("Erro ao buscar os posts: " + response.status);
  }
  const data = await response.json();
  return data;
}