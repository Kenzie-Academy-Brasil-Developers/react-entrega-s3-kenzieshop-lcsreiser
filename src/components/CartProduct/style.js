import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightblue;
  background-color: #2a75bb;
  figure {
    width: 170px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 70%;
  }
  h2 {
    margin: 15px 0;
    color: whitesmoke;
    width: 200px;
  }
  p {
    color: whitesmoke;
  }

  .qtd--product {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  .qtd--product button {
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    border: 1px solid black;
    cursor: pointer;
  }
  .qtd--product button.add {
    border-radius: 0 3px 3px 0;
  }
  .qtd--product button.remove {
    border-radius: 3px 0 0 3px;
  }
  .qtd--product p {
    width: 60px;
    height: 30px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    .qtd--product {
      margin: 0;
    }
    figure {
      width: 100px;
    }
  }
`;
