// ============================================================
//  BOT CONFIGURATION — edit ONLY this file per bot
// ============================================================

module.exports = {

  // --- Identity ---
  name:       "My Bot",
  tagline:    "Ask me anything",
  avatar:     "",                  // paste base64 data URI here
  promptedBy: "Tally Brostowsky",  // shown in footer as "Prompted by ..."

  // --- API & Model ---
  api:   "anthropic",              // "anthropic" or "openai"
  model: "claude-haiku-4-5-20251001",
  // Anthropic models: claude-haiku-4-5-20251001 | claude-sonnet-4-6 | claude-opus-4-6
  // OpenAI models:    gpt-4o-mini | gpt-4o

  // --- Web search ---
  webSearch: false,   // true = live internet access (recommended with OpenAI)

  // --- Conversation starters (leave [] to hide) ---
  starters: [],

  // --- System prompt ---
  prompt: `You are a helpful assistant.`,

  // --- Knowledge base / RAG (server-side only, never sent to browser) ---
  knowledge: ``,

};
