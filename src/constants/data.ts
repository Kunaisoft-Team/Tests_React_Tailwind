export const DEMO_CREDENTIALS = {
  email: "demo@company.com",
  password: "demo123",
} as const

export const DUMMY_USER = {
  name: "Sarah Johnson",
  email: "sarah.johnson@techcorp.com",
  company: "TechCorp Inc.",
  role: "client",
} as const

export const DUMMY_PROJECTS = [
  {
    id: "1",
    name: "Brand Identity",
    progress: 85,
    status: "In Progress" as const,
    dueDate: "7/14/2024",
  },
  {
    id: "2",
    name: "Website Design",
    progress: 60,
    status: "In Progress" as const,
    dueDate: "7/29/2024",
  },
  {
    id: "3",
    name: "Marketing Materials",
    progress: 30,
    status: "Planning" as const,
    dueDate: "8/9/2024",
  },
]

export const DUMMY_STATS = [
  {
    label: "Total Projects",
    value: "3",
    color: "#4F7CFF",
  },
  {
    label: "Completed",
    value: "12",
    color: "#10B981",
  },
  {
    label: "In Progress",
    value: "3",
    color: "#4F7CFF",
  },
]

export const DUMMY_UPCOMING_TASKS = [
  {
    id: "1",
    name: "Brand Review",
    date: "July 15, 2024",
  },
  {
    id: "2",
    name: "Website Mockups",
    date: "July 30, 2024",
  },
]

export const DUMMY_DELIVERIES = [
  {
    id: "1",
    name: "Logo Package - Final",
    date: "6/19/2024",
    category: "Brand Assets",
    size: "12.4 MB",
    status: "Approved" as const,
  },
  {
    id: "2",
    name: "Website Wireframes v2",
    date: "6/14/2024",
    category: "Wireframes",
    size: "8.2 MB",
    status: "Under Review" as const,
  },
  {
    id: "3",
    name: "Color Palette & Typography",
    date: "6/9/2024",
    category: "Brand Guidelines",
    size: "5.1 MB",
    status: "Approved" as const,
  },
  {
    id: "4",
    name: "Initial Concepts",
    date: "5/31/2024",
    category: "Concepts",
    size: "15.8 MB",
    status: "Approved" as const,
  },
]

export const COLORS = {
  primary: "#4F7CFF",
  primaryHover: "#3B5FE8",
  secondary: "#6B7280",
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
}

export const LIGHT_THEME = {
  pageBackground: "#f8fafc",
  cardBackground: "#ffffff",
  inputBackground: "#f1f5f9",
  buttonSecondary: "#f1f5f9",
  textPrimary: "#0f172a",
  textSecondary: "#64748b",
  border: "#e2e8f0",
}

export const DARK_THEME = {
  pageBackground: "#0f172a",
  cardBackground: "#1e293b",
  inputBackground: "#334155",
  buttonSecondary: "#334155",
  textPrimary: "#f8fafc",
  textSecondary: "#94a3b8",
  border: "#334155",
}

export const getThemeColors = (isDark: boolean) => ({
  ...COLORS,
  ...(isDark ? DARK_THEME : LIGHT_THEME),
})
