export async function mockCheckUrl(
  url: string
): Promise<{ exists: boolean; type: "file" | "folder" | null }> {
  await new Promise((res) => setTimeout(res, 500)); // Simulate network latency

  // For"Not Found"
  if (url.includes("notfound")) return { exists: false, type: null };

  // Folder detection
  if (url.endsWith("/")) return { exists: true, type: "folder" };

  // File detection by extension
  if (/\.(txt|pdf|jpg|png|json)$/i.test(url)) {
    return { exists: true, type: "file" };
  }

  // Default — exists and is a file
  return { exists: true, type: "file" };
}
