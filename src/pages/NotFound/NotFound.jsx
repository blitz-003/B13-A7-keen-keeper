import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-7xl font-bold">404</h1>

      <p className="text-xl mt-4 text-gray-500">Page not found</p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
