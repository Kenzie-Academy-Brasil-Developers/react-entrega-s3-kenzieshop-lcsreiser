import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  max-width: 1500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5px;
  border-bottom: 1px solid lightblue;
  p {
    display: none;
    margin: 0 5px;
    color: #2a75bb;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  a {
    margin-left: 10px;
    font-weight: bolder;
    font-size: 30px;
    position: relative;
    color: #2a75bb;
  }
  a.icons {
    margin: 5px;
    font-weight: normal;
    font-size: 25px;
  }
  span {
    position: absolute;
    top: -5px;
    left: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    width: 15px;
    height: 15px;
    background-color: red;
    color: white;
    border-radius: 50%;
  }
  @media (min-width: 450px) {
    padding: 15px 30px;
    a {
      margin: 0 10px;
      display: flex;
    }
    p {
      display: block;
    }
    a.icons {
      font-size: 20px;
    }
    span {
      left: 10px;
    }
  }
`;
