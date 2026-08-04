import { Route, Routes } from "react-router";

import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { Hero } from "@/components/home/hero";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <Hero />
            <AboutSection />
            <ContactSection />
          </main>
        }
      />
    </Routes>
  );
}

export default App;
