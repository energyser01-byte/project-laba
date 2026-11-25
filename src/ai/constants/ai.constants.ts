export const GEMINI_URL: string =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=' + encodeURIComponent(process.env.GEMINI_API_KEY ?? '');

export const GEMINI_EMBEDDING_MODEL = 'models/gemini-embedding-001';
export const GEMINI_BATCH_EMBEDDINGS_URL =
  `https://generativelanguage.googleapis.com/v1beta/${GEMINI_EMBEDDING_MODEL}:batchEmbedContents`;
