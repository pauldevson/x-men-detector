import DNA from '../models/dnaModel';

export const getStats = async (req, res) => {
  try {
    const xmenCount = await DNA.count({ isMutant: true });
    const humanCount = await DNA.count({ isMutant: false });

    return res.status(200).json({
      count_mutations: xmenCount,
      count_no_mutation: humanCount,
      ratio: xmenCount / humanCount,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default { getStats };
