const MUTATIONS = ['AAAA', 'TTTT', 'CCCC', 'GGGG'];
const MUTATIONS_REGEX = new RegExp(MUTATIONS.join('|'));
const Directions = { BottomToTop: 1, TopToBottom: 2 };

const getMutationsCount = str => (str.match(MUTATIONS_REGEX) || []).length;

const getDiagonalWords = (matrix, direction) => {
  // took it from https://stackoverflow.com/questions/35917734
  const yLength = matrix.length;
  const xLength = matrix[0].length;
  const maxLength = Math.max(xLength, yLength);
  let temp;
  const wordsArray = [];
  for (let k = 0; k <= 2 * (maxLength - 1); k += 1) {
    temp = [];
    for (let y = yLength - 1; y >= 0; y -= 1) {
      const x = k - (direction === Directions.BottomToTop ? yLength - y : y);
      if (x >= 0 && x < xLength) {
        temp.push(matrix[y][x]);
      }
    }

    if (temp.length >= 4) {
      wordsArray.push(temp.join(''));
    }
  }
  return wordsArray;
};

export const isMutantDNA = dna => {
  console.log('DNA: ', dna);

  let findingsCount = 0;
  for (let i = 0; i < dna.length; i += 1) {
    const row = dna[i];

    if (i === 0) {
      // search vertically 👇👆
      for (let j = 0; j < row.length; j += 1) {
        const vert = dna.map(r => r[j]).join('');
        findingsCount += getMutationsCount(vert);
        if (findingsCount > 1) return true;
      }
    }

    // search horizontally <==>
    findingsCount += getMutationsCount(row);
    if (findingsCount > 1) return true;
  }

  // search oblique words
  const obliqueWords = [
    ...getDiagonalWords(dna, Directions.TopToBottom),
    ...getDiagonalWords(dna, Directions.BottomToTop),
  ];

  findingsCount += obliqueWords
    .map(w => getMutationsCount(w))
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  return findingsCount > 1;
};

export default { isMutantDNA };
