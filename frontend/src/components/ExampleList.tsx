import { useEffect, useState } from "react";
import { fetchExamples } from "../api";

interface Example {
  id: number;
  name: string;
}

const ExampleList = () => {
  const [examples, setExamples] = useState<Example[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchExamples()
      .then(setExamples)
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Example Data</h2>
      <ul>
        {examples.map((example) => (
          <li key={example.id}>{example.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleList;
