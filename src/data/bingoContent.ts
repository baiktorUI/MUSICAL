import type { BingoNumber } from './types';

const bingoContent: Record<number, BingoNumber> = {};

// Generate content for numbers 1-69
for (let i = 1; i <= 69; i++) {
  bingoContent[i] = {
    song: `/assets/audio/number-${i}.mp3`,
    image: `/assets/images/number-${i}.jpg`
  };
}

export { bingoContent };