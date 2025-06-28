import { Navigation } from "@/components/Navigation"
import { useAppContext } from "@/context/AppContext"
import { getThemeColors, DUMMY_USER, DUMMY_PROJECTS, DUMMY_STATS, DUMMY_UPCOMING_TASKS } from "@/constants/data"
import { TrendingUp, Calendar, CheckCircle, Download } from "lucide-react"

export default function DashboardPage() {
  const context = useAppContext()

  if (!context.mounted) {
    return (
      <div className="min-h-screen bg-slate-900">
        <div className="bg-slate-800 border-b border-slate-700 h-16"></div>
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="animate-pulse space-y-8">
            <div className="space-y-4">
              <div className="h-8 bg-slate-800 rounded w-1/2"></div>
              <div className="h-4 bg-slate-800 rounded w-1/3"></div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2 space-y-4">
                <div className="h-64 bg-slate-800 rounded"></div>
                <div className="h-64 bg-slate-800 rounded"></div>
              </div>
              <div className="space-y-4">
                <div className="h-32 bg-slate-800 rounded"></div>
                <div className="h-32 bg-slate-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const { theme } = context
  const themeColors = getThemeColors(theme === "dark")

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeColors.pageBackground }}>
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: themeColors.textPrimary }}>
              Welcome back, <span style={{ color: themeColors.primary }}>{DUMMY_USER.name}</span>!
            </h1>
            <p className="text-lg" style={{ color: themeColors.textSecondary }}>
              Here's your project overview
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" style={{ color: themeColors.primary }} />
                  <h2 className="text-xl font-semibold" style={{ color: themeColors.textPrimary }}>
                    Active Projects
                  </h2>
                </div>
                <div className="space-y-4">
                  {DUMMY_PROJECTS.map((project) => (
                    <div
                      key={project.id}
                      className="p-6 rounded-lg border"
                      style={{ backgroundColor: themeColors.cardBackground, borderColor: themeColors.border }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-3 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <h3 className="text-lg font-medium" style={{ color: themeColors.textPrimary }}>
                              {project.name}
                            </h3>
                            <span
                              className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                              style={{
                                backgroundColor:
                                  project.status === "In Progress" ? themeColors.primary : themeColors.buttonSecondary,
                                color: project.status === "In Progress" ? "white" : themeColors.textPrimary,
                              }}
                            >
                              {project.status}
                            </span>
                          </div>
                          <div className="flex items-center text-sm" style={{ color: themeColors.textSecondary }}>
                            <Calendar className="w-4 h-4 mr-1" style={{ color: themeColors.textSecondary }} />
                            Due: {project.dueDate}
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span style={{ color: themeColors.textSecondary }}>{project.progress}% Complete</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className="h-2 rounded-full transition-all duration-300"
                                style={{ backgroundColor: themeColors.primary, width: `${project.progress}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="px-4 py-2 rounded-md text-sm font-medium border shrink-0 hover:opacity-80 transition-opacity"
                          style={{
                            backgroundColor: themeColors.buttonSecondary,
                            borderColor: themeColors.border,
                            color: themeColors.textPrimary,
                          }}
                        >
                          <Download className="w-4 h-4 mr-2 inline" style={{ color: themeColors.textPrimary }} />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div
                className="p-6 rounded-lg border"
                style={{ backgroundColor: themeColors.cardBackground, borderColor: themeColors.border }}
              >
                <h3 className="text-lg font-semibold mb-4" style={{ color: themeColors.textPrimary }}>
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  {DUMMY_STATS.map((stat) => (
                    <div key={stat.label} className="flex justify-between items-center">
                      <span style={{ color: themeColors.textSecondary }}>{stat.label}</span>
                      <span className="text-2xl font-bold" style={{ color: stat.color }}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="p-6 rounded-lg border"
                style={{ backgroundColor: themeColors.cardBackground, borderColor: themeColors.border }}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-5 h-5" style={{ color: themeColors.success }} />
                  <h3 className="text-lg font-semibold" style={{ color: themeColors.textPrimary }}>
                    Upcoming
                  </h3>
                </div>
                <div className="space-y-4">
                  {DUMMY_UPCOMING_TASKS.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-start space-x-3 p-3 rounded-lg"
                      style={{ backgroundColor: themeColors.inputBackground }}
                    >
                      <div className="w-5 h-5 rounded-full mt-0.5 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4" style={{ color: themeColors.success }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium" style={{ color: themeColors.textPrimary }}>
                          {task.name}
                        </h4>
                        <p className="text-sm" style={{ color: themeColors.textSecondary }}>
                          {task.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
