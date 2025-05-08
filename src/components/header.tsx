import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 dark:bg-black dark:text-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300 dark:hover:text-gray-400">
          MyLogo
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300 dark:hover:text-gray-400">Home</Link>
            </li>
            <li>
              <Link href="/posts" className="hover:text-gray-300 dark:hover:text-gray-400">Posts</Link>
            </li>
            <li>
              <Link href="/create-post" className="hover:text-gray-300 dark:hover:text-gray-400">Create Post</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}