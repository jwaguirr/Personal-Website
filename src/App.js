import React, { useState } from "react";
import Landing from "./sections/landing";
import NavBar from "./components/navbar";
import { DarkModeProvider } from "./contexts/darkmode";
import About from "./sections/about";
import Projects from "./sections/projects";
import ContactForm from "./sections/contact";
import Footer from "./sections/footer";
import Alert from "./components/alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState();
  const [alertType, setAlertType] = useState("");
  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  return (
    <DarkModeProvider>
      <div className="fixed top-0 z-50">
        <Alert setShowAlert={setShowAlert} showAlert={showAlert} message={message} alertType={alertType} />
      </div>
      <div className="bg-[#F5F5DC] dark:bg-[#2C2C2C] duration-500 overflow-x-hidden">
        <NavBar />
        <div className="z-0" id="Home">
          <Landing />
        </div>
        <section id="About">
          <About />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Contact">
          <ContactForm toggleAlert={toggleAlert} setErrorMessage={setMessage} setAlertType={setAlertType} />
        </section>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
