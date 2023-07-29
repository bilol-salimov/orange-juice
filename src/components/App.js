import React, { Component } from "react";
import Card from "./Card";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Card
          img="https://cdn.shopify.com/s/files/1/0517/9133/1493/products/1610723922.87_succo-di-frutta-albicocca-2021-700923_600x.png?v=1629352126"
          title="Orange Juice"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            dolor?"
          price="$ 4.99"
          off="40"
          btn="View Product"
        />
        <Card
          img="https://cdn.shopify.com/s/files/1/0517/9133/1493/products/1610724148.63_succo-di-frutta-pesca-2021-743133_600x.png?v=1629352624"
          title="Peach Juice"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            dolor?"
          price="$ 5.99"
          off="10"
          btn="View Product"
        />
        <Card
          img="https://ordersgelmax.com/cdn/shop/products/1610723976.25_succo-di-frutta-arancia-rossa-2021-175208.png?v=1629352183"
          title="Orange Juice"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            dolor?"
          price="$ 6.49"
          off="40"
          btn="View Product"
        />
        <Card
          img="https://cdn.shopify.com/s/files/1/0517/9133/1493/products/1610724247.63_succo-di-frutta-melograno-2021-732343_600x.png?v=1629352647"
          title="Pomegranate Juice"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            dolor?"
          price="$ 4.99"
          off="30"
          btn="View Product"
        />
        <Card
          img="https://cdn.shopify.com/s/files/1/0517/9133/1493/products/1610723922.87_succo-di-frutta-albicocca-2021-700923_600x.png?v=1629352126"
          title="Orange Juice"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            dolor?"
          price="$ 4.99"
          off="20"
          btn="View Product"
        />
        <Card
          img="https://static.wixstatic.com/media/b650ce_2fdf1eeaefa446c3b816addea4606b64~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
          title="Orange Juice"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            dolor?"
          price="$ 4.99"
          off="40"
          btn="View Product"
        />
      </div>
    );
  }
}
