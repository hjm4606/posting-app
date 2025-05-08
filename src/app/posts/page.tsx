// Import the refactored PostsList component from its new location
import PostsList from "@/components/postslist";


export default async function PostsPage() {
  
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      {/* Render the PostsList component; it no longer needs posts passed as a prop */}
      <PostsList />
    </div>
  );
}