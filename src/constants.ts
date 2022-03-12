export const ASSETS = {
  IDLE: 'grandpa_idle',
  ATTACK: new Array(19).fill(0).map((_, index) => `grandpa_attack_${index}`),
} as const
