import { useEffect, useState } from "react";
import "./Preloader.css"; // Import the CSS file

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before hiding the preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (!loading) return null; // Remove the preloader when loading is done

  return <div id="preloader"></div>;
};

export default Preloader;
