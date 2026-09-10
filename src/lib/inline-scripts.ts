/** Exact inline script bodies — must match layout HTML for CSP sha256 hashes. */

export const ANTI_CLICKJACK_SCRIPT = `if (window.top !== window.self) {
  window.top.location = window.self.location;
}`
