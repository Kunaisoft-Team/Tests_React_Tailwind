"use client"

import { useState } from "react"
import { Navigation } from "@/components/Navigation"
import { useAppContext } from "@/context/AppContext"
import { getThemeColors, DUMMY_DELIVERIES } from "@/constants/data"
import { FileText, Calendar, MessageCircle, Download } from "lucide-react"

export default function HistoryPage() {
  const context = useAppContext()
  const [feedback, setFeedback] = useState(
    "Thanks for the latest wireframes! Overall direction looks great. A few minor adjustments needed on the homepage layout - could we make the hero section more prominent? Also, the navigation feels a bit cluttered. Let's schedule a call this week to discuss.",
  )

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
              </div>
              <div className="h-64 bg-slate-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const { theme } = context
  const themeColors = getThemeColors(theme === "dark")

  const handleSaveFeedback = () => {
    console.log("Saving feedback:", feedback)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: themeColors.pageBackground }}>
      <Navigation />
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: themeColors.primary }}>
              Project History
            </h1>
            <p className="text-lg" style={{ color: themeColors.textSecondary }}>
              View and download all your deliveries
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold" style={{ color: themeColors.textPrimary }}>
                  Past Deliveries
                </h2>

                <div className="space-y-4">
                  {DUMMY_DELIVERIES.map((delivery) => (
                    <div
                      key={delivery.id}
                      className="p-6 rounded-lg border"
                      style={{ backgroundColor: themeColors.cardBackground, borderColor: themeColors.border }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className="p-3 rounded-lg" style={{ backgroundColor: themeColors.primary }}>
                            <FileText className="w-6 h-6 text-white" />
                          </div>

                          <div className="space-y-2 flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                              <h3 className="text-lg font-medium" style={{ color: themeColors.textPrimary }}>
                                {delivery.name}
                              </h3>
                              <span
                                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold"
                                style={{
                                  backgroundColor: delivery.status === "Approved" ? "#10b981" : "#f59e0b",
                                  color: "white",
                                }}
                              >
                                {delivery.status}
                              </span>
                            </div>

                            <div
                              className="flex flex-wrap items-center gap-4 text-sm"
                              style={{ color: themeColors.textSecondary }}
                            >
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" style={{ color: themeColors.textSecondary }} />
                                {delivery.date}
                              </div>
                              <span>{delivery.category}</span>
                              <span>{delivery.size}</span>
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

            <div>
              <div
                className="p-6 rounded-lg border"
                style={{ backgroundColor: themeColors.cardBackground, borderColor: themeColors.border }}
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-5 h-5" style={{ color: themeColors.success }} />
                    <h3 className="text-lg font-semibold" style={{ color: themeColors.textPrimary }}>
                      Feedback
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium" style={{ color: themeColors.textPrimary }}>
                      Current Status
                    </h4>
                    <p className="text-sm" style={{ color: themeColors.textSecondary }}>
                      Waiting for your feedback on the latest wireframes...
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium" style={{ color: themeColors.textPrimary }}>
                      Your Feedback
                    </h4>
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      className="w-full min-h-[120px] p-3 rounded-md border resize-none focus:outline-none focus:ring-2 transition-all"
                      style={{
                        backgroundColor: themeColors.inputBackground,
                        borderColor: themeColors.border,
                        color: themeColors.textPrimary,
                      }}
                      placeholder="Share your thoughts and feedback..."
                    />
                  </div>

                  <button
                    onClick={handleSaveFeedback}
                    className="w-full px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: themeColors.primary, color: "white" }}
                  >
                    Save Feedback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
