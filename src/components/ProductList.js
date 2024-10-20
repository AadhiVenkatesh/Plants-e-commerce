import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductList.css";
import Filters from "./Filter";
import CartPage from "./CartModel";

const ProductList = () => {
  const navigate = useNavigate();

  // product data
  const products = [
    {
      id: 1,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png",
    },
    {
      id: 2,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png",
    },
    {
      id: 3,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png",
    },
    {
      id: 4,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png",
    },
    {
      id: 5,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png",
    },
    {
      id: 6,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png",
    },
    {
      id: 7,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png",
    },
    {
      id: 8,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png",
    },
    {
      id: 9,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png",
    },
    {
      id: 10,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png",
    },
    {
      id: 11,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png",
    },
    {
      id: 12,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png",
    },
    {
      id: 13,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png",
    },
    {
      id: 14,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png",
    },
    {
      id: 15,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png",
    },
    {
      id: 16,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 459,
      discountedPrice: 399,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png",
    },
    {
      id: 17,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 459,
      discountedPrice: 399,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png",
    },
    {
      id: 18,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 459,
      discountedPrice: 399,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303656/ptxdmop4wepzaloormio.png",
    },
    {
      id: 19,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png",
    },
    {
      id: 20,
      name: "Monstera",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303663/b6hamfzkwu0lnmzv58g6.png",
    },
    {
      id: 21,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png",
    },
    {
      id: 22,
      name: "Pothos",
      description: "Indoor Plant, Low maintenance",
      rating: 4.9,
      originalPrice: 359,
      discountedPrice: 299,
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303662/twyn1jtbenhtbnnjguo8.png",
    },
  ];

  const productsPerPage = 9; // Number of products to show per page
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page

  const totalPages = Math.ceil(products.length / productsPerPage); // Calculate total pages

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Determine the products to display on the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const thankyou = () => {
    navigate("./thanks");
  };
  //  when user click on the add to cart the model should be open to reconfirm the product add to cart
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [setCart] = useState([]);
  // open the model
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  // close the model
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };
  // add to cart
  const addToCart = () => {
    if (selectedProduct) {
      setCart((prevCart) => [...prevCart, selectedProduct]);
      console.log(`${selectedProduct.name} added to cart!`);
    }
    closeModal();
  };

  // nursery data
  const nurseries = [
    {
      id: 1,
      description: "Lorem ipsum dolor sitamet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303047/bbbyisdmjr37eyqhmfgl.png",
    },
    {
      id: 2,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303120/b57gmhqbvm7tvq4ot7qn.png",
    },
    {
      id: 3,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/m8afy8wymd8blzs7fxbq.png",
    },
    {
      id: 4,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/qepwej0rg0n6wochhh3f.png",
    },
    {
      id: 5,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303047/bbbyisdmjr37eyqhmfgl.png",
    },
    {
      id: 6,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/m8afy8wymd8blzs7fxbq.png",
    },
    {
      id: 7,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/qepwej0rg0n6wochhh3f.png",
    },
    {
      id: 6,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/m8afy8wymd8blzs7fxbq.png",
    },
    {
      id: 7,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/qepwej0rg0n6wochhh3f.png",
    },
    {
      id: 6,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/m8afy8wymd8blzs7fxbq.png",
    },
    {
      id: 7,
      description: "Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum   ",
      imageUrl:
        "https://res.cloudinary.com/dyutmmnia/image/upload/v1729303127/qepwej0rg0n6wochhh3f.png",
    },
  ];

  return (
    <section className="product-list">
      <div className="buttons">
        <button className="first">Plants</button>
        <button className="second">Pots</button>
      </div>
      <p>
        Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
        necessitatibus enim ut internos accusantium a numquam autem ab rerum
        omnis.
        <br />
        Non molestiae ratione et laborum doloribus aut molestiae voluptates ut
        porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem
        eius. Et <br />
        architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
      </p>
      {/* nursery section  */}
      <div className="nursery-section">
        <h2>Nursery</h2>
        <div className="nursery-grid">
          {nurseries.map((nursery) => (
            <div key={nursery.id} className="nursery-card">
              <img src={nursery.imageUrl} alt={nursery.name} />
              <h3>{nursery.name}</h3>
              <p>{nursery.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* sorting producets */}
      <div className="product-header">
        <span>{products.length} products</span>
        <select className="sort-by">
          <option>Sort by</option>
          <option>Size</option>
          <option>Popularity</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      {/* produce section both footer and products */}
      <div className="column-filter-plants">
        <div className="filter-row">
          <Filters />
        </div>
        <div className="products-grid">
          {currentProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="border">
                <img src={product.imageUrl} alt={product.name} />
                <button className="view-product-btn" onClick={thankyou}>
                  View Product
                </button>
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐ {product.rating}</span>
              </div>
              <div className="price-section">
                <span className="original-price">
                  ₹ {product.originalPrice}
                </span>
                <span className="discounted-price">
                  ₹ {product.discountedPrice}
                </span>
              </div>
              <div className="action-buttons">
                <button
                  className="add-to-cart-btn"
                  onClick={() => openModal(product)}
                >
                  <i className="bi bi-plus-lg"></i>Add to cart
                  <i className="bi bi-dash-lg"></i>
                </button>
                <button className="buy-on-rent-btn">Buy on Rent</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`pagination-btn ${
              currentPage === i + 1 ? "active" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {isModalOpen && (
        <CartPage
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={closeModal}
          onAddToCart={addToCart}
        />
      )}
    </section>
  );
};

export default ProductList;
