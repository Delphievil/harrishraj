
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center gradient-cyber-2">
      <div className="text-center backdrop-blur-sm bg-black/30 p-12 rounded-lg border border-cyber-accent/30">
        <h1 className="text-6xl font-bold mb-4 text-cyber-accent">[404]</h1>
        <p className="text-xl text-cyber-text mb-6">System breach detected. Target not found.</p>
        <div className="font-mono text-sm text-cyber-muted mb-8">
          <code>{">> Access denied to " + location.pathname}</code>
        </div>
        <a href="/" className="px-6 py-3 bg-cyber-accent text-cyber-darker font-medium rounded hover:bg-cyber-accent/90 transition-all inline-block">
          Return to Secure Area
        </a>
      </div>
    </div>
  );
};

export default NotFound;
