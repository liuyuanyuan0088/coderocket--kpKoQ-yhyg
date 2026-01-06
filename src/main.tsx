import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import NotFound from "./NotFound.tsx";
import CompanyCulture from "./pages/CompanyCulture.tsx";
import Services from "./pages/Services.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import News from "./pages/News.tsx";
import CompanyNews from "./pages/CompanyNews.tsx";
import IndustryNews from "./pages/IndustryNews.tsx";
import FAQ from "./pages/FAQ.tsx";
import Contact from "./pages/Contact.tsx";
import AppDownload from "./pages/AppDownload.tsx";
import AdminLogin from "./pages/admin/AdminLogin.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import EditSettings from "./pages/admin/EditSettings.tsx";
import EditHomePage from "./pages/admin/EditHomePage.tsx";
import EditHero from "./pages/admin/EditHero.tsx";
import EditFooter from "./pages/admin/EditFooter.tsx";
import EditAboutCards from "./pages/admin/EditAboutCards.tsx";
import EditCulture from "./pages/admin/EditCulture.tsx";
import EditValues from "./pages/admin/EditValues.tsx";
import EditServices from "./pages/admin/EditServices.tsx";
import EditTeam from "./pages/admin/EditTeam.tsx";
import EditTeamCulture from "./pages/admin/EditTeamCulture.tsx";
import EditNews from "./pages/admin/EditNews.tsx";
import EditFAQ from "./pages/admin/EditFAQ.tsx";
import EditAppDownload from "./pages/admin/EditAppDownload.tsx";
import EditContact from "./pages/admin/EditContact.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { ContentProvider } from "./contexts/ContentContext.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import "./globals.css";
// CODEROCKET
const setupRouteChangeBridge = () => {
  if (typeof window === "undefined") {
    return;
  }
  const bridgeWindow = window as Window & {
    __coderocketRouteBridgeInitialized?: boolean;
  };
  if (bridgeWindow.__coderocketRouteBridgeInitialized) {
    return;
  }
  bridgeWindow.__coderocketRouteBridgeInitialized = true;
  const notifyParent = () => {
    try {
      window.parent?.postMessage(
        {
          type: "coderocket-route-change",
          path:
            window.location.pathname +
            window.location.search +
            window.location.hash,
        },
        "*",
      );
    } catch {
      // Ignore cross-origin access errors
    }
  };
  type HistoryMethod = typeof window.history.pushState;
  const wrapHistoryMethod = (method: "pushState" | "replaceState") => {
    const original = window.history[method] as HistoryMethod;
    window.history[method] = function (...args) {
      const result = original.apply(this, args as Parameters<HistoryMethod>);
      notifyParent();
      return result;
    } as HistoryMethod;
  };
  wrapHistoryMethod("pushState");
  wrapHistoryMethod("replaceState");
  window.addEventListener("popstate", notifyParent);
  window.addEventListener("hashchange", notifyParent);
  notifyParent();
};
setupRouteChangeBridge();
// /CODEROCKET
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContentProvider>
          <Routes>
            {/* 前台页面 */}
            <Route path="/" element={<App />} />
            <Route path="/company-culture" element={<CompanyCulture />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/company" element={<CompanyNews />} />
            <Route path="/news/industry" element={<IndustryNews />} />
            <Route path="/news/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/app-download" element={<AppDownload />} />
            {/* 管理后台登录 */}
            <Route path="/admin/login" element={<AdminLogin />} />
            {/* 管理后台受保护的路由 */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <ProtectedRoute>
                  <EditSettings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/home"
              element={
                <ProtectedRoute>
                  <EditHomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/hero"
              element={
                <ProtectedRoute>
                  <EditHero />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/footer"
              element={
                <ProtectedRoute>
                  <EditFooter />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/about-cards"
              element={
                <ProtectedRoute>
                  <EditAboutCards />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/culture"
              element={
                <ProtectedRoute>
                  <EditCulture />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/values"
              element={
                <ProtectedRoute>
                  <EditValues />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/services"
              element={
                <ProtectedRoute>
                  <EditServices />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/team"
              element={
                <ProtectedRoute>
                  <EditTeam />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/team-culture"
              element={
                <ProtectedRoute>
                  <EditTeamCulture />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/news"
              element={
                <ProtectedRoute>
                  <EditNews />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/faq"
              element={
                <ProtectedRoute>
                  <EditFAQ />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/app-download"
              element={
                <ProtectedRoute>
                  <EditAppDownload />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/contact"
              element={
                <ProtectedRoute>
                  <EditContact />
                </ProtectedRoute>
              }
            />
            {/* 404 页面 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContentProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);