"use client"

import type React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAppContext } from "@/context/AppContext"
import { DEMO_CREDENTIALS, DUMMY_USER, getThemeColors } from "@/constants/data"
import { Moon, Sun } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const context = useAppContext()
  const navigate = useNavigate()

  if (!context.mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900">
        <div className="w-full max-w-md mx-auto">
          <div className="animate-pulse">
            <div className="bg-slate-800 rounded-lg p-8 space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-slate-700 rounded-xl"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-700 rounded w-3/4 mx-auto"></div>
                <div className="h-3 bg-slate-700 rounded w-1/2 mx-auto"></div>
              </div>
              <div className="space-y-4">
                <div className="h-10 bg-slate-700 rounded"></div>
                <div className="h-10 bg-slate-700 rounded"></div>
                <div className="h-10 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const { theme, setUser, isLoading, setIsLoading, toggleTheme } = context
  const themeColors = getThemeColors(theme === "dark")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))
    setUser(DUMMY_USER)
    navigate("/dashboard")
    setIsLoading(false)
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{ backgroundColor: themeColors.pageBackground }}
    >
      <Card
        className="w-full max-w-md mx-auto shadow-lg"
        style={{ backgroundColor: themeColors.cardBackground, borderColor: themeColors.border }}
      >
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-xl"
              style={{ backgroundColor: themeColors.primary }}
            >
              CP
            </div>
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold" style={{ color: themeColors.primary }}>
              Client Portal
            </CardTitle>
            <CardDescription style={{ color: themeColors.textSecondary }}>
              Welcome back! Please sign in to continue
            </CardDescription>
          </div>
        </CardHeader>

        <div className="absolute top-4 right-4">
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
        </div>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-lg font-medium" style={{ color: themeColors.textPrimary }}>
              Sign In
            </h2>

            <div className="space-y-2">
              <Label htmlFor="email" style={{ color: themeColors.textPrimary }}>
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  backgroundColor: themeColors.inputBackground,
                  borderColor: themeColors.border,
                  color: themeColors.textPrimary,
                }}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" style={{ color: themeColors.textPrimary }}>
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  backgroundColor: themeColors.inputBackground,
                  borderColor: themeColors.border,
                  color: themeColors.textPrimary,
                }}
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              style={{ backgroundColor: themeColors.primary }}
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>

          <div
            className="p-4 rounded-lg border"
            style={{
              backgroundColor: themeColors.inputBackground,
              borderColor: themeColors.border,
            }}
          >
            <h3 className="text-sm font-medium mb-2" style={{ color: themeColors.textPrimary }}>
              Demo Credentials:
            </h3>
            <div className="text-sm space-y-1" style={{ color: themeColors.textSecondary }}>
              <p>Email: {DEMO_CREDENTIALS.email}</p>
              <p>Password: {DEMO_CREDENTIALS.password}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
