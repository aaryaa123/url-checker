export async function mockCheckUrl(
  url: string
): Promise<{ exists: boolean; type: "file" | "folder" | null }> {
  await new Promise((res) => setTimeout(res, 500));

  const lowerUrl = url.toLowerCase();

  try {
    new URL(url);
  } catch {
    return { exists: false, type: null };
  }

  if (lowerUrl.includes("notfound") || lowerUrl.includes("404")) {
    return { exists: false, type: null };
  }

  if (url.endsWith("/")) {
    return { exists: true, type: "folder" };
  }

  if (/\.(txt|pdf|jpg|jpeg|png|gif|json|html|js|css)$/i.test(url)) {
    return { exists: true, type: "file" };
  }

  return { exists: true, type: "file" };
}
