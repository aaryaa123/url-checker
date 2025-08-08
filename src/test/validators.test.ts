import { isValidUrlFormat } from "../validators";

describe("URL Validation", () => {
  test("valid URL with https passes", () => {
    expect(isValidUrlFormat("https://example.com")).toBe(true);
  });

  test("invalid URL without TLD fails", () => {
    expect(isValidUrlFormat("http://test")).toBe(false);
  });

  test("invalid protocol fails", () => {
    expect(isValidUrlFormat("ftp://example.com")).toBe(false);
  });
});
