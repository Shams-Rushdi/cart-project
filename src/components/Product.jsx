import React from 'react'

const Product = ({product}) => {
  return (
    <div>
<div className="card" style={{width: "18rem"}}>
  <img src={product.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.short_des}</p>
    <h4 className="card-text">{product.price} Tk</h4>
    <a href="#" className="btn btn-primary">Add To Cart</a>
  </div>
</div>
    </div>
  )
}

export default Product