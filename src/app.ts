import { DEBOUNCE_MS } from "./constants.js";
import { isValidUrlFormat } from "./validators.js";
import { mockCheckUrl } from "./mockServer.js";
import { getInputElement, updateStatus } from "./dom.js";

let debounceTimer: number | undefined;
let lastQueriedUrl = "";

function showSpinner() {
  const spinner = document.getElementById("spinner");
  if (spinner) spinner.style.display = "block";
}

function hideSpinner() {
  const spinner = document.getElementById("spinner");
  if (spinner) spinner.style.display = "none";
}

function setupUrlChecker() {
  const urlInput = getInputElement("url-input");

  urlInput.addEventListener("input", () => {
    const val = urlInput.value.trim();
    clearTimeout(debounceTimer);

    updateStatus("");
    hideSpinner();

    debounceTimer = window.setTimeout(async () => {
      if (!val) {
        updateStatus("");
        return;
      }

      if (!isValidUrlFormat(val)) {
        updateStatus("Invalid URL format.", "status invalid");
        return;
      }

      updateStatus("Checking existence...");
      showSpinner();

      lastQueriedUrl = val;
      const result = await mockCheckUrl(val);
      hideSpinner();

      if (urlInput.value.trim() !== lastQueriedUrl) {
        return;
      }

      if (result.exists) {
        updateStatus(
          `URL exists (${result.type === "file" ? "File" : "Folder"})`,
          "status valid"
        );
      } else {
        updateStatus("URL does not exist", "status invalid");
      }
    }, DEBOUNCE_MS);
  });
}

setupUrlChecker();
