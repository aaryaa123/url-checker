export function getInputElement(id) {
    return document.getElementById(id);
}
export function getDivElement(id) {
    return document.getElementById(id);
}
export function updateStatus(message, className = "status") {
    const el = getDivElement("status");
    el.textContent = message;
    el.className = className;
}
//# sourceMappingURL=dom.js.map