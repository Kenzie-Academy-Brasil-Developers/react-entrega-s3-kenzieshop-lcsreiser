import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 30px;
  }
`;

export const EmptyCart = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  background-color: #2a75bb;
  p {
    font-size: 25px;
    margin: 10px 0;
    color: whitesmoke;
  }
  svg {
    color: whitesmoke;
  }
  @media (min-width: 900px) {
    height: 400px;
  }
`;

export const CartSection = styled.section`
  width: 100%;
  min-height: 250px;
  background-color: #ffcb05;
  @media (min-width: 900px) {
    width: 60%;
    min-height: 400px;
    border-radius: 5px;
  }
`;

export const CartDescription = styled.section`
  width: 100%;
  max-width: 400px;
  padding: 15px;
  margin: 30px 0;
  background-color: white;
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    margin-bottom: 20px;
  }
  button {
    width: 100%;
    margin-top: 20px;
    padding: 10px 0;
    border-radius: 5px;
    cursor: pointer;
    background-color: rgb(0, 132, 255);
    color: white;
    text-transform: uppercase;
  }
  @media (min-width: 900px) {
    width: 30%;
    margin: 0;
    border-radius: 5px;
  }
`;
