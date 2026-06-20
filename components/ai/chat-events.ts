// Tiny event bus so any button can open the floating chat (and prefill a prompt).
export const CHAT_OPEN_EVENT = "abhishek:open-chat";

export function openChat(prompt?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CHAT_OPEN_EVENT, { detail: { prompt } }));
}
