import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DynamicSecurity from "./components/DynamicSecurity"; // Adjust the path if necessary
import LoadingScreen from "./components/LoadingScreen"; // Adjust the path

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading screen for 3 seconds (adjust as necessary)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Show loading screen before loading other components */}
        {loading ? (
          <LoadingScreen />
        ) : (
          <>
            {/* Conditionally render the security background after loading */}
            <DynamicSecurity theme="dark" isAuthenticated={true} threatDetected={false} />
            {/* Your main page content */}
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/other" component={OtherPage} />
            </Switch>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;

