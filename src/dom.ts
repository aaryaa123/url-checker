export function getInputElement(id: string): HTMLInputElement {
  return document.getElementById(id) as HTMLInputElement;
}

export function getDivElement(id: string): HTMLDivElement {
  return document.getElementById(id) as HTMLDivElement;
}

export function updateStatus(message: string, className = "status") {
  const el = getDivElement("status");
  el.textContent = message;
  el.className = className;
  console.log(el.className);
}
