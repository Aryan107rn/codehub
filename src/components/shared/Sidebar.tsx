import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="h-screen w-60 bg-gray-900 text-white flex flex-col p-4">

      <h1 className="text-2xl font-bold mb-8">CodeHUB</h1>

      <nav className="flex flex-col gap-4">

        <Link
          to="/student"
          className="p-2 rounded hover:bg-gray-700"
        >
          Student Dashboard
        </Link>

        <Link
          to="/teacher"
          className="p-2 rounded hover:bg-gray-700"
        >
          Teacher Dashboard
        </Link>

        <Link
          to="/admin"
          className="p-2 rounded hover:bg-gray-700"
        >
          Admin Dashboard
        </Link>

        <Link
          to="/test/create"
          className="p-2 rounded hover:bg-gray-700"
        >
          Create Test
        </Link>

        <Link
          to="/editor"
          className="p-2 rounded hover:bg-gray-700"
        >
          Code Editor
        </Link>

        <Link
          to="/notifications"
          className="p-2 rounded hover:bg-gray-700"
        >
          Notifications
        </Link>

      </nav>

    </div>
  )
}
