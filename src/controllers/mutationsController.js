export default {
  addMutation: (req, res) => {
    console.log(req.body);
    // todo: do some magic to find out if the adn has mutation
    /*
      1. Get all possible strings / words
      2. Try to find the words like AAAA, CCCC in the possible words
      3. If any, eureka!
    */
    const hasMutation = true;
    if (hasMutation) {
      // save the mutation
      return res.status(201).send();
    }

    // doesn't make any sense but 403 is the requirement 😅
    return res.status(403).send();
  },
};
