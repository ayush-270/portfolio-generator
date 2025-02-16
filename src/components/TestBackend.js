import React, { useEffect, useState } from "react";
import axios from "axios";

const TestBackend = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Backend Response:</h1>
      <div className="alert alert-info text-center" role="alert">
        {message}
      </div>
    </div>
  );
};

export default TestBackend;
