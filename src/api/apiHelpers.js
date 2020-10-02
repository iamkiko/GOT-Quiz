export async function handleResponse(response) {
  if (response.ok) return response.json();
  if (response.status === 400) {
    // Handle validation fail on server side; returns a text instead of JSON, handle below
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Uh oh, something went wrong on the network.");
}

// Handle with toast/actual error redirecting/handling on enterprise app
export function handleError(error) {
  // eslint-disable-next-line no-console
  throw new Error("Here's what went wrong: " + error);
}
