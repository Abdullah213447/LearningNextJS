'use client';

import { useState, useEffect } from 'react';

export default function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }


}
