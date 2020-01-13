const recalculateElo = (elo1, elo2, result1) => {
  const K = 200;
  const probability = 1 / (1 + Math.pow(10, (elo2 - elo1) / 400));
  const diff = parseInt(K * (result1 - probability), 10);
  return [elo1 + diff, elo2 - diff];
};

export { recalculateElo };
