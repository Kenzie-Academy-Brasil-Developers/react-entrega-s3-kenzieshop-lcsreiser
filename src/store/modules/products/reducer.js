const ListProduct = [
  {
    id: 1,
    name: "Psyduck Musculoso",
    price: 499.99,
    image:
      "https://www.bescexonline.com.br/images_1-52739/Figuras-de-anime-pokemon-psyduck-brinquedos-modelo_wp-upload.jpeg",
  },
  {
    id: 2,
    name: "Pikachu Musculoso",
    price: 799.99,
    image:
      "https://img.elo7.com.br/product/original/317E8DC/pikachu-musculoso-pokemon-impressao-3d-impressao-3d.jpg",
  },
  {
    id: 3,
    name: "Charmander Musculoso",
    price: 499.99,
    image:
      "https://img.elo7.com.br/product/original/31DD960/action-figure-charmander-maromba-3d-print-hand-painting-3d.jpg",
  },
  {
    id: 4,
    name: "Squirtle Musculoso",
    price: 599.99,
    image:
      "https://www.feriafriki.cl/wp-content/uploads/2020/10/SquirtleMusculoso-1.jpg",
  },
  {
    id: 5,
    name: "Bulbasaur Musculoso",
    price: 699.99,
    image:
      "https://www.feriafriki.cl/wp-content/uploads/2020/10/BulbasaurMusculoso-3.jpg",
  },
  {
    id: 6,
    name: "Gengar Musculoso",
    price: 999.99,
    image:
      "  https://www.casasbahia-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1891030948",
  },
];

const productsReducers = (state = ListProduct, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productsReducers;
