export function createId() {
  return Date.now();
}

export function cleanArea(area) {
  area.innerHTML = '';
}

export function clearInput(input) {
  input.value = '';
}
