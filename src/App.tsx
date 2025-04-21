import React from "react";
import DynamicSecurity from "./components/DynamicSecurity"; // make sure path is correct

function App() {
  return (
    <>
      <DynamicSecurity
        theme="dark"
        isAuthenticated={true}
        threatDetected={true}
      />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">Harrish Raj's Cyber UI</h1>
        <p className="text-lg">This interface now features a custom security-themed background.</p>
      </div>
    </>
  );
}

export default App;

