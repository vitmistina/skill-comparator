const basePlayerData = [
  { id: "Andrey", name: "Andrey" },
  { id: "Lucas", name: "Lucas" },
  {
    id: "Petr",
    name: "Petr"
  },
  { id: "Eduardo", name: "Eduardo" },
  { id: "Shadrack", name: "Shadrack" },
  { id: "Libor", name: "Libor" },
  { id: "Miguel", name: "Miguel" },
  { id: "Honza Š.", name: "Honza Š." },
  { id: "Vítek", name: "Vítek" },
  { id: "Naďa", name: "Naďa" },
  { id: "Adam", name: "Adam" }
];

const twoPlayerData = [
  { id: "janskola", name: "Jan Skola" },
  { id: "jankunes", name: "Jan Kunes" }
];

const getPlayers = () => basePlayerData.map(player => ({ ...player, elo: {} }));
const getTwoPlayers = () =>
  twoPlayerData.map(player => ({ ...player, elo: {} }));

export { getPlayers, getTwoPlayers };
