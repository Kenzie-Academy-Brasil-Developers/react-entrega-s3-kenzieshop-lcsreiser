import { Main } from "./style";

import { useSelector } from "react-redux";

import Product from "../../components/Product";

const Home = () => {
  const ListProduct = useSelector((store) => store.products);

  return (
    <Main>
      <section>
        {ListProduct.map((item) => (
          <Product Item={item} key={item.id} />
        ))}
      </section>
    </Main>
  );
};

export default Home;
