import { BrowserRouter, Routes , Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import HabitsPage from "./pages/HabitsPage.jsx";
import TodayPage from "./pages/TodayPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import { AuthProvider } from "./contexts/AuthContext";
import GlobalStyle from "./assets/GlobalStyle.jsx"
import { ProgressProvider } from "./contexts/ProgressContext";

export default function App(){

    return(
        <>
        <GlobalStyle />
        <AuthProvider>
        <ProgressProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/habitos" element={<HabitsPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
                <Route path="/hoje" element={<TodayPage />} />
                <Route path="/historico" element={<HistoryPage />} />
            </Routes>
        </BrowserRouter>
        </ProgressProvider>
        </AuthProvider>
        </>
    )
}

