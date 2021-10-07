const getPokemon = async (id, setData, setError) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let { name, weight, stats, types } = await res.json();

    setData({ name, weight, stats, types });
    setError(false);
  } catch (e) {
    setError(true);
  }
};

export { getPokemon };
