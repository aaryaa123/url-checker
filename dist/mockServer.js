var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Simulates an asynchronous server request to check
 * if a URL exists and whether it is a file or folder.
 */
export function mockCheckUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        yield new Promise((res) => setTimeout(res, 500)); // Simulate network latency
        // Simulated "Not Found" rule
        if (url.includes("notfound"))
            return { exists: false, type: null };
        // Folder detection
        if (url.endsWith("/"))
            return { exists: true, type: "folder" };
        // File detection by extension
        if (/\.(txt|pdf|jpg|png|json)$/i.test(url)) {
            return { exists: true, type: "file" };
        }
        // Default — exists and is a file
        return { exists: true, type: "file" };
    });
}
//# sourceMappingURL=mockServer.js.map