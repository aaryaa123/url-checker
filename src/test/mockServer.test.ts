import { mockCheckUrl } from "../mockServer";

describe("mockCheckUrl", () => {
  jest.setTimeout(10000);

  test('URL containing "notfound" returns does not exist', async () => {
    const result = await mockCheckUrl("http://example.com/notfound");
    expect(result.exists).toBe(false);
    expect(result.type).toBeNull();
  });

  test('URL containing "404" returns does not exist', async () => {
    const result = await mockCheckUrl("http://example.com/error404");
    expect(result.exists).toBe(false);
    expect(result.type).toBeNull();
  });

  test("URL ending with slash is identified as folder", async () => {
    const result = await mockCheckUrl("http://example.com/folder/");
    expect(result.exists).toBe(true);
    expect(result.type).toBe("folder");
  });

  test("URL ending with known file extensions is identified as file", async () => {
    const extensions = [
      ".txt",
      ".pdf",
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".json",
      ".html",
      ".js",
      ".css",
    ];
    for (const ext of extensions) {
      const url = `http://example.com/file${ext}`;
      const result = await mockCheckUrl(url);
      expect(result.exists).toBe(true);
      expect(result.type).toBe("file");
    }
  });

  test("URL without slash or known file extension defaults to file", async () => {
    const result = await mockCheckUrl("http://example.com/readme");
    expect(result.exists).toBe(true);
    expect(result.type).toBe("file");
  });

  test("Invalid URL format returns does not exist", async () => {
    const result = await mockCheckUrl("invalid-url");
    expect(result.exists).toBe(false);
    expect(result.type).toBeNull();
  });
});
