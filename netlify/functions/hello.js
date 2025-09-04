export async function handler(event, context) {
  return {
    statusCode: 200,
    headers: { "content-type": "text/plain" },
    body: "Hello from Netlify Functions!",
  };
}
