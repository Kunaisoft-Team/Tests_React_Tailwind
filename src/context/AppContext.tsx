"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState, useCallback } from "react"

type Theme = "light" | "dark"

interface User {
  name: string
  email: string
  company: string
  role: string
}

interface AppContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  user: User | null
  setUser: (user: User | null) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  mounted: boolean
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)

    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(newTheme)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light")
  }, [theme, setTheme])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme
    if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
      setTheme(savedTheme)
    } else {
      setTheme("light")
    }
    setMounted(true)
  }, [setTheme])

  const value: AppContextType = {
    theme,
    toggleTheme,
    setTheme,
    user,
    setUser,
    isLoading,
    setIsLoading,
    mounted,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
