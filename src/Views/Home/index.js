import React from "react";
import { Container, Row, Image, DivFooter, Button } from "./Styles";
import { WhatsApp } from "@material-ui/icons";
const data = [
  {
    id: 0,
    name: "Tequila 1",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/163985-1000-1000/1150-1.jpg?v=636576309761430000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 2",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/175612-1000-1000/1081-1.jpg?v=637169574089030000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 3",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/163985-1000-1000/1150-1.jpg?v=636576309761430000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 4",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/170772-1000-1000/29101_1.jpg?v=636937528532100000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 1",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/163985-1000-1000/1150-1.jpg?v=636576309761430000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 2",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/175612-1000-1000/1081-1.jpg?v=637169574089030000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 3",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/163985-1000-1000/1150-1.jpg?v=636576309761430000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 4",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/170772-1000-1000/29101_1.jpg?v=636937528532100000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 1",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/163985-1000-1000/1150-1.jpg?v=636576309761430000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 2",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/175612-1000-1000/1081-1.jpg?v=637169574089030000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 3",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/163985-1000-1000/1150-1.jpg?v=636576309761430000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 4",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/170772-1000-1000/29101_1.jpg?v=636937528532100000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 1",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/163985-1000-1000/1150-1.jpg?v=636576309761430000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 2",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/175612-1000-1000/1081-1.jpg?v=637169574089030000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 3",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/163985-1000-1000/1150-1.jpg?v=636576309761430000",
    precio: 10,
    precioComercial: 9
  },
  {
    id: 0,
    name: "Tequila 4",
    img:
      "https://bodegasalianza.vteximg.com.br/arquivos/ids/170772-1000-1000/29101_1.jpg?v=636937528532100000",
    precio: 10,
    precioComercial: 9
  }
];

const Home = () => {
  const renderRow = () => {
    return data.map(item => (
      <Row>
        <Image src={item.img} alt="#" />
        <h4 style={{ textAlign: "center" }}>{item.name}</h4>
        <DivFooter>
          <span className="span_1">${item.precioComercial.toFixed(2)}</span>{" "}
          <span className="span_2">${item.precio.toFixed(2)}</span>
          <Button
            onClick={() => {
              window.location.href = `https://wa.me/5215574641852?text=Hola. Me interesa ${
                item.name
              }, precio $${item.precio.toFixed(2)}`;

              //
            }}
          >
            {" "}
            <WhatsApp
              style={{
                fontSize: 30,
                color: "white",
                top: 5,
                position: "relative"
              }}
            />{" "}
            Comprar
          </Button>
        </DivFooter>
      </Row>
    ));
  };

  return <Container>{renderRow()} </Container>;
};

export default Home;
