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

const pokemonPager = async (offset, limit, setData, setPages) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    );
    let { count, results } = await res.json();

    setPages(Math.ceil(count / limit));
    setData(results);
    //setError(false);
  } catch (e) {
    // setError(true);
  }
};

export { getPokemon, pokemonPager };
