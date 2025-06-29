import { Routes, Route } from "react-router-dom"
import { AppProvider } from "./context/AppContext"
import LoginPage from "./pages/LoginPage"
import DashboardPage from "./pages/DashboardPage"
import HistoryPage from "./pages/HistoryPage"

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/history" element={<HistoryPage />} />
      </Routes>
    </AppProvider>
  )
}

export default App
