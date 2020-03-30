import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: ${100}%;
  flex-wrap: wrap;
  padding-top: 50px;
  padding-left: 100px;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding-left: 0px;
  }
`;

const Row = styled.div`
  border: 1px solid #d1d1d1;
  width: ${100 / 3 - 5}%;
  display: block;
  margin: 0 auto;
  margin: 10px;
  @media (max-width: 1024px) {
    width: ${95}%;
  }
`;

const Image = styled.img`
  width: 60%;
  display: block;
  margin: 0 auto;
`;

const DivFooter = styled.div`
  width: 100%;
  display: block;
  & .span_1 {
    color: red;
    font-size: 18px;
    padding: 10px;
    text-decoration: line-through;
  }
  & .span_2 {
    color: #000000;
    font-size: 18px;
    padding: 10px;
  }
`;

const Button = styled.button`
  color: white;
  background-color: #1ebea5;
  width: 100%;
  height: 60px;
  font-size: 22px;
`;

export { Container, Row, Image, DivFooter, Button };
