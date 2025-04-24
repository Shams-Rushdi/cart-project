import React from 'react'
import Product from '../components/Product'


const data = [
                {
                  "id": 1,
                  "title": "Home",
                  "short_des": "Good",
                  "price": "1000",
                  "image": "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjg0LTI0NS12LmpwZw.jpg",
                },
                {
                  "id": 2,
                  "title": "Ratul",
                  "short_des": "Good",
                  "price": "1000",
                  "image": "/product_images/4.jpg",
                },
                {
                  "id": 1,
                  "title": "Home",
                  "short_des": "Good",
                  "price": "1000",
                  "image": "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjg0LTI0NS12LmpwZw.jpg",
                },
                {
                  "id": 2,
                  "title": "Ratul",
                  "short_des": "Good",
                  "price": "1000",
                  "image": "/product_images/4.jpg",
                },
                {
                  "id": 1,
                  "title": "Home",
                  "short_des": "Good",
                  "price": "1000",
                  "image": "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjg0LTI0NS12LmpwZw.jpg",
                },
                {
                  "id": 2,
                  "title": "Ratul",
                  "short_des": "Good",
                  "price": "1000",
                  "image": "/product_images/4.jpg",
                },
                {
                  "id": 1,
                  "title": "Home",
                  "short_des": "Good",
                  "price": "1000",
                  "image": "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjg0LTI0NS12LmpwZw.jpg",
                },
                {
                  "id": 2,
                  "title": "Ratul",
                  "short_des": "Good",
                  "price": "1000",
                  "image": "/product_images/4.jpg",
                },
                {
                  "id": 1,
                  "title": "Home",
                  "short_des": "Good",
                  "price": "1000",
                  "image": "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvam9iNjg0LTI0NS12LmpwZw.jpg",
                },
                {
                  "id": 2,
                  "title": "Ratul",
                  "short_des": "Good",
                  "price": "1000",
                  "image": "/product_images/4.jpg",
                }
              ]
                 

const Products = () => {
  return (
                <div className="container">
                     <div className="row">
                                
                                <div className="col-md-4">
                                <Product product={{
                                        "title": "Home",
                                        "short_des": "Good",
                                        "price": "1000",
                                        "image":"/product_images/4.jpg"
                                }}/>
                                </div>
                      </div>
                </div>     
      )
}

export default Products