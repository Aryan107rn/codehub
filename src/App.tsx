import { BrowserRouter, Routes, Route } from "react-router-dom"

import AuthPage from "./pages/AuthPage"
import StudentDashboard from "./pages/StudentDashboard"
import TeacherDashboard from "./pages/TeacherDashboard"
import AdminDashboard from "./pages/AdminDashboard"
import TestCreator from "./pages/TestCreator"
import TestTaker from "./pages/TestTaker"
import CodeEditor from "./pages/CodeEditor"
import NotificationsPage from "./pages/NotificationsPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth */}
        <Route path="/" element={<AuthPage />} />

        {/* Dashboards */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Features */}
        <Route path="/test/create" element={<TestCreator />} />
        <Route path="/test/:id" element={<TestTaker />} />
        <Route path="/editor" element={<CodeEditor />} />
        <Route path="/notifications" element={<NotificationsPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
