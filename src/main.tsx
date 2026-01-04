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
import EditHero from "./pages/admin/EditHero.tsx";
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
    <AuthProvider>
      <ContentProvider>
        <BrowserRouter>
          <Routes>
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
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/edit-hero"
              element={
                <ProtectedRoute>
                  <EditHero />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/edit-services"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/edit-team"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/edit-news"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContentProvider>
    </AuthProvider>
  </React.StrictMode>,
);