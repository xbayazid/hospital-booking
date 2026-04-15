import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import DoctorDetails from "./pages/DoctorDetails";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import AccessibilityHelp from "./pages/AccessibilityHelp";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 bg-white px-4 py-2 rounded shadow"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<DoctorDetails />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/accessibility" element={<AccessibilityHelp />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}