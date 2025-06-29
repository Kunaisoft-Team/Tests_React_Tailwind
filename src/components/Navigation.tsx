"use client"

import { useNavigate, useLocation } from "react-router-dom"
import { Home, History, Sun, Moon, LogOut } from "lucide-react"
import { useAppContext } from "@/context/AppContext"
import { DUMMY_USER, getThemeColors } from "@/constants/data"

export function Navigation() {
  const navigate = useNavigate()
  const location = useLocation()
  const context = useAppContext()

  if (!context.mounted) {
    return (
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-slate-700 rounded-xl animate-pulse"></div>
                <div className="w-24 h-4 bg-slate-700 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-slate-700 rounded animate-pulse"></div>
              <div className="w-20 h-8 bg-slate-700 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>
    )
  }

  const { theme, toggleTheme } = context
  const handleLogout = () => navigate("/")
  const isHistoryPage = location.pathname === "/dashboard/history"
  const themeColors = getThemeColors(theme === "dark")

  return (
    <header
      style={{ backgroundColor: themeColors.cardBackground, borderBottomColor: themeColors.border }}
      className="border-b"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                style={{ backgroundColor: themeColors.primary }}
              >
                CP
              </div>
              <span className="font-semibold text-lg" style={{ color: themeColors.textPrimary }}>
                Client Portal
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-1">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{
                  color: !isHistoryPage ? "white" : themeColors.textSecondary,
                  backgroundColor: !isHistoryPage ? themeColors.primary : "transparent",
                }}
              >
                <Home className="w-4 h-4 mr-2" />
                Dashboard
              </button>
              <button
                onClick={() => navigate("/dashboard/history")}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{
                  color: isHistoryPage ? "white" : themeColors.textSecondary,
                  backgroundColor: isHistoryPage ? themeColors.primary : "transparent",
                }}
              >
                <History className="w-4 h-4 mr-2" />
                History
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border"
              style={{
                color: themeColors.textSecondary,
                borderColor: themeColors.border,
                backgroundColor: themeColors.inputBackground,
              }}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <div className="hidden sm:block text-right">
              <div className="font-medium" style={{ color: themeColors.textPrimary }}>
                {DUMMY_USER.name}
              </div>
              <div className="text-sm" style={{ color: themeColors.textSecondary }}>
                {DUMMY_USER.company}
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              style={{ color: themeColors.textSecondary }}
            >
              <LogOut className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          <nav className="flex items-center space-x-1">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors"
              style={{
                color: !isHistoryPage ? "white" : themeColors.textSecondary,
                backgroundColor: !isHistoryPage ? themeColors.primary : "transparent",
              }}
            >
              <Home className="w-4 h-4 mr-2" />
              Dashboard
            </button>
            <button
              onClick={() => navigate("/dashboard/history")}
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors"
              style={{
                color: isHistoryPage ? "white" : themeColors.textSecondary,
                backgroundColor: isHistoryPage ? themeColors.primary : "transparent",
              }}
            >
              <History className="w-4 h-4 mr-2" />
              History
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
