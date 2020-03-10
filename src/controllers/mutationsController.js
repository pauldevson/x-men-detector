import { isMutantDNA, hashDNA } from '../services/dnaMutationsDetector';
import DNA from '../models/dnaModel';

const addMutation = async (req, res) => {
  const { dna } = req.body;

  if (!dna.length) return res.status(400).content('Invalid DNA.');

  // all rows must be the same length
  const firstLength = dna[0].length;
  if (!dna.every(d => d.length === firstLength)) {
    return res.status(400).content('Invalid DNA.');
  }

  const hash = hashDNA(dna);
  const isMutant = isMutantDNA(dna);

  let savedDNA = await DNA.findOne({ hash });

  try {
    if (!savedDNA) {
      // save the dna
      savedDNA = await DNA.create({
        hash,
        dna,
        isMutant,
        analyzedCount: 1,
      });
    } else {
      savedDNA.analyzedCount += 1;

      await savedDNA.save();
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }

  return res.status(isMutant ? 200 : 403).json(savedDNA);
};

export default { addMutation };
