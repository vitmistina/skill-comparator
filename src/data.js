const basePlayerData = [
  { id: "janskola", name: "Jan Skola" },
  { id: "jankunes", name: "Jan Kunes" },
  {
    id: "martinnovotny",
    name: "Martin Novotny"
  },
  { id: "eduardofleck", name: "Eduardo Fleck" },
  { id: "lukasgregora", name: "lukasgregora" },
  { id: "liborcopak", name: "liborcopak" },
  { id: "shadracklimbua", name: "shadracklimbua" },
  { id: "nadabednarova", name: "nadabednarova" },
  { id: "janberan", name: "janberan" },
  { id: "adamstepanek", name: "adamstepanek" },
  { id: "andreydennisyuk", name: "andreydennisyuk" },
  { id: "miguelmora", name: "miguelmora" },
  { id: "lucassaito", name: "lucassaito" },
  { id: "janwdvorak", name: "janwdvorak" },
  { id: "renatabreznova", name: "renatabreznova" },
  { id: "gabinahurtova", name: "gabinahurtova" },
  { id: "petrabartosova", name: "petrabartosova" },
  { id: "jansuchopar", name: "jansuchopar" },
  { id: "hana", name: "hana" },
  { id: "petra", name: "petra" },
  { id: "jaroslavcepelka", name: "jaroslavcepelka" },
  { id: "veronikablablova", name: "veronikablablova" },
  { id: "nikola", name: "nikola" },
  { id: "vitmistina", name: "Vit Mistina" }
];

const getPlayers = () =>
  basePlayerData.map(player => ({ ...player, elo: { javascript: 1000 } }));

export { getPlayers };
