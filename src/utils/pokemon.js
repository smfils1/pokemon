const displayName = (rawName) =>
  rawName
    .split("-")
    .map((str) => str[0].toUpperCase() + str.substring(1))
    .join(" ");

const getPokemon = async (id, setData, setError) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let { name, weight, stats, types, sprites } = await res.json();

    let sprite = sprites.other["official-artwork"].front_default;
    stats = stats.map(({ base_stat, stat }) => {
      return {
        name: displayName(stat.name),
        value: base_stat,
      };
    });
    types = types.map(({ type }) => type.name);
    setData({ name: displayName(name), sprite, types, weight, stats });
    setError(false);
  } catch (e) {
    setError(true);
  }
};

const pokemonPager = async (offset, limit, setData, setPages) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    );
    let { count, results } = await res.json();

    setPages(Math.ceil(count / limit));
    setData(results);
  } catch (e) {}
};

export { getPokemon, pokemonPager, displayName };
