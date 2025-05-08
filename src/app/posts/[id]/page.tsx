export default async function PostPage({ params }: { params: { id: string } }) {
  // The 'id' from the URL (e.g., '1' from /posts/1) is available in params.id
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await res.json(); // Fetches the specific post

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">{post.title}</h1> {/* Displays the title */}
      <p className="text-lg">{post.body}</p> {/* Displays the body */}
    </main>
  );
}