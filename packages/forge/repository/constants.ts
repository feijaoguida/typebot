import { ForgedBlock } from './types'

export const forgedBlockIds = [
  'openai',
  'zemantic-ai',
  'cal-com',
  'chat-node',
  'qr-code',
  'dify-ai',
  'mistral',
  'elevenlabs',
  'anthropic',
  'together-ai',
  'open-router',
] as const satisfies ForgedBlock['type'][]