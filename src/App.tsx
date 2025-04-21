import React, { useState } from "react";
import DynamicSecurityBg from "./components/DynamicSecurity";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [threatDetected, setThreatDetected] = useState(false);

  return (
    <>
      <DynamicSecurityBg
        theme={isDark ? "dark" : "light"}
        isAuthenticated={isAuthenticated}
        threatDetected={threatDetected}
      />

      <div className="relative z-10 p-8 text-white">
        <h1 className="text-3xl font-bold">Cybersecurity Dashboard</h1>
        <div className="mt-4 space-x-4">
          <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
          <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
            Toggle Auth
          </button>
          <button onClick={() => setThreatDetected(!threatDetected)}>
            Toggle Threat
          </button>
        </div>
      </div>
    </>
  );
};

export default App;

