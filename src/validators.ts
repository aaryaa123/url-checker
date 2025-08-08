export function isValidUrlFormat(url: string): boolean {
  const urlPattern = /^(https?:\/\/)([a-z0-9-]+\.)+[a-z]{2,}(\/.*)?$/i;

  if (!urlPattern.test(url)) return false;

  try {
    const parsedUrl = new URL(url);
    return (
      !!parsedUrl.hostname &&
      (parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:")
    );
  } catch {
    return false;
  }
}
