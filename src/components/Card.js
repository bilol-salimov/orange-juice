import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    const {img, title, description, price, off, btn} = this.props;
    return (
        <div className="card">
          <img className='card-img'
            src={img}
            alt=""
          />
          <h2 className='card-title'>{title}</h2>
          <p className='card-description'>
            {description}
          </p>
          <h1 className="price">{price}</h1>
          <span className="price-off">-% {off}</span>
          <button className="btn">{btn}</button>
        </div>
    );
  }
}
