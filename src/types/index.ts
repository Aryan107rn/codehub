// User roles
export type UserRole = "student" | "teacher" | "admin"

// User profile
export interface Profile {
  id: string
  email: string
  full_name: string
  role: UserRole
  created_at: string
}

// Test
export interface Test {
  id: string
  title: string
  subject: string
  teacher_id: string
  duration: number
  total_marks: number
  created_at: string
}

// Question
export interface Question {
  id: string
  test_id: string
  type: "mcq" | "coding" | "descriptive"
  question_text: string
  marks: number
}

// Test submission
export interface TestSubmission {
  id: string
  test_id: string
  student_id: string
  score: number
  submitted_at: string
}

// Live class
export interface LiveClass {
  id: string
  teacher_id: string
  title: string
  start_time: string
}

// Notification
export interface Notification {
  id: string
  user_id: string
  message: string
  created_at: string
  read: boolean
}
