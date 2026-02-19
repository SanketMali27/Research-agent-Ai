const API_BASE_URL = "http://localhost:5000/api";

export async function runResearch(topic) {
  const response = await fetch(`${API_BASE_URL}/research`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ topic })
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.details || data?.error || "Request failed");
  }

  return data;
}
