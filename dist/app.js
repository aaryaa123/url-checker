var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DEBOUNCE_MS } from "./constants.js";
import { isValidUrlFormat } from "./validators.js";
import { mockCheckUrl } from "./mockServer.js";
import { getInputElement, updateStatus } from "./dom.js";
let debounceTimer;
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
        debounceTimer = window.setTimeout(() => __awaiter(this, void 0, void 0, function* () {
            const result = yield mockCheckUrl(val);
            if (result.exists) {
                updateStatus(`URL exists (${result.type === "file" ? "File" : "Folder"})`);
            }
            else {
                updateStatus("URL does not exist");
            }
        }), DEBOUNCE_MS);
    });
}
setupUrlChecker();
//# sourceMappingURL=app.js.map