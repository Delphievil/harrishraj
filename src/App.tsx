import React, { useState, useEffect } from "react";
import DynamicSecurityBg from "./components/DynamicSecuritybg"; // Ensure path is correct
import LoadingScreen from "./components/LoadingScreen"; // Ensure path is correct

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading screen for 3 seconds (adjust time as necessary)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds for the loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Show loading screen while loading */}
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* After loading, render DynamicSecurityBg */}
          <DynamicSecurity theme="dark" isAuthenticated={true} threatDetected={false} />
          {/* Main content here */}
          <div>
            <h1 className="text-white">Welcome to the Security-Themed App!</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
