import { DEBOUNCE_MS } from "./constants.js";
import { isValidUrlFormat } from "./validators.js";
import { mockCheckUrl } from "./mockServer.js";
import { getInputElement, updateStatus } from "./dom.js";

let debounceTimer: number | undefined;

function setupUrlChecker() {
  const urlInput = getInputElement("url-input");

  urlInput.addEventListener("input", () => {
    const val = urlInput.value.trim();
    clearTimeout(debounceTimer);

    if (!val) {
      updateStatus("");
      return;
    }

    if (!isValidUrlFormat(val)) {
      updateStatus("Invalid URL format.", "status invalid");
      return;
    }

    updateStatus("Checking existence...");

    debounceTimer = window.setTimeout(async () => {
      const result = await mockCheckUrl(val);
      if (result.exists) {
        updateStatus(
          `URL exists (${result.type === "file" ? "File" : "Folder"})`
        );
      } else {
        updateStatus("URL does not exist");
      }
    }, DEBOUNCE_MS);
  });
}

setupUrlChecker();
