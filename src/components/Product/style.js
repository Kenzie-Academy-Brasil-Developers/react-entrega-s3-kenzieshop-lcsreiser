import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  max-width: 270px;
  border-radius: 5px;
  background-color: #2a75bb;
  margin: 5px;
  figure {
    width: 100%;
    display: flex;
    padding: 10px 0;
    justify-content: center;
    border-bottom: 1px solid lightblue;
  }
  img {
    width: 70%;
  }
  h2 {
    font-weight: normal;
    margin: 5px 0;
    color: whitesmoke;
  }
  p {
    margin: 15px 0;
    color: whitesmoke;
  }
  div {
    padding: 15px;
    padding-top: 0;
  }
  button {
    width: 100%;
    padding: 10px 0;
    font-size: 14px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  button.button-add {
    background-color: whitesmoke;
    color: #2a75bb;
  }
  button.button-remove {
    background-color: red;
  }
`;
