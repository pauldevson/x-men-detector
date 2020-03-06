import { isMutantDNA } from '../services/dnaMutationsDetector';

const addMutation = (req, res) => {
  const { dna } = req.body;

  if (!dna.length) return res.status(400).content('Invalid DNA.');

  // all rows must be the same length
  const firstLength = dna[0].length;
  if (!dna.every(d => d.length === firstLength)) {
    return res.status(400).content('Invalid DNA.');
  }

  if (!isMutantDNA(dna)) {
    // doesn't make any sense but 403 is the requirement 😅
    return res.status(403).send();
  }

  // todo: save the mutation
  return res.status(200).send();
};

export default {
  addMutation,
};
