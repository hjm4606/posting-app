export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4 mt-auto dark:bg-gray-800">
      <p className="text-gray-600 dark:text-gray-300">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </p>
    </footer>
  );
}