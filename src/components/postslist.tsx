import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  // other fields from the API like body, userId, tags, reactions can be added if needed
}

interface PostsApiResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

// Moved and renamed from getPosts
async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://dummyjson.com/posts?limit=10');
  if (!res.ok) {
    // This will be caught by the nearest error.js or Next.js default error page
    throw new Error('Failed to fetch posts from dummyjson.com');
  }
  const data: PostsApiResponse = await res.json();
  return data.posts;
}

// PostsList now fetches its own data and is an async component
export default async function PostsList() {
  const posts = await fetchPosts();

  return (
    <div className="mt-6">
      <ul className="space-y-4">
        {/* Render the fetched posts */}
      {posts.map((post) => (
        <li key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-3">
          <Link href={`/posts/${post.id}`} className="text-xl text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-150">
            {post.title}
          </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}