export async function fetchExamples() {
    const response = await fetch('/api/examples'); // Calls backend
    if (!response.ok) {
      throw new Error('Failed to fetch examples');
    }
    return response.json();
  }
  