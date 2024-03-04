import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';
import back from '../images/back.png';
import fav from '../images/favicon.png';
import favfilled from '../images/favfilled.png';
import Counter from '../components/Counter';
import { useFavorites } from './FavScreens/FavouriteContext';
import { useCart } from './Cart/CartContext';
import items from '../items'; 

const findProductById = (id) => {
  for (let item of items) {
    for (let category of item.categories) {
      const product = category.products.find(product => product.id.toString() === id);
      if (product) return product;
    }
  }
  return null;
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 
  const { favorites, toggleFavorite } = useFavorites();

  const product = findProductById(id);
  const [quantity, setQuantity] = useState(1); 
  const [isFavorite, setIsFavorite] = useState(favorites.includes(product?.id));
  const [selectedImageUrl, setSelectedImageUrl] = useState(product ? product['image-url'] : '');
  const [isAddToCartHovered, setIsAddToCartHovered] = useState(false);
  const [isBuyNowHovered, setIsBuyNowHovered] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.includes(product?.id));
  }, [favorites, product?.id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleBackClick = () => navigate(-1);
  const handleFavoriteToggle = () => toggleFavorite(product.id);
  const updateSelectedImage = (imageUrl) => setSelectedImageUrl(imageUrl);

  return (
    <>
      <img
        src={back}
        alt="Back"
        style={styles.backButton}
        onClick={handleBackClick}
      />
      <div style={styles.container}>
        <div style={styles.imagePreviewContainer}>
          <img src={selectedImageUrl} alt={product.title} style={styles.mainImage} />
        </div>
        <div style={styles.thumbnailContainer}>
          {[product['image-url'], product['image-url-first'], product['image-url-second'], product['image-url-third']].map((imageUrl, index) => (
            <div key={index} style={styles.thumbnail} onClick={() => updateSelectedImage(imageUrl)} onMouseEnter={() => updateSelectedImage(imageUrl)}>
              <img src={imageUrl} alt={`${product.title} ${index}`} style={styles.thumbnailImage} />
            </div>
          ))}
        </div>
        <div style={styles.detailsContainer}>
          <h2 style={styles.title}>{product.title}</h2>
          <p style={styles.description}>{product.description}</p>
          <div style={styles.rating}><Rating rating={product.rating}/></div>
          <p style={styles.price}>Price: ${product.price.toFixed(2)}</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2vh' }}>
          <Counter quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={handleFavoriteToggle} style={{ background: 'none', border: 'none', outline: 'none' }}>
              <img
                src={isFavorite ? favfilled : fav}
                alt="Favorite"
                style={{ width: '1.5vw', height: '1.5vw', cursor: 'pointer' }}
              />
            </button>
          </div>
          <div style={styles.actionButtons}>
          <button
              style={{
                ...styles.button,
                backgroundColor: isAddToCartHovered ? 'rgba(246,231,220,0.5)' : '#F6E7DC',
                color: isAddToCartHovered ? 'rgba(110,89,75,1)' : 'rgba(110,89,75,1)',
                border: isAddToCartHovered ? '1px solid rgba(110,89,75,1)' : '1px solid rgba(110,89,75,1)',
              }}
              onMouseEnter={() => setIsAddToCartHovered(true)}
              onMouseLeave={() => setIsAddToCartHovered(false)}
              onClick={() => addToCart(product, quantity)}
            >
              Add to Cart
            </button>
            <button
              style={{
                ...styles.button,
                backgroundColor: isBuyNowHovered ? 'rgba(110,89,75,0.5)' : 'rgba(110,89,75,1)',
                color: isBuyNowHovered ? 'rgba(246,239,234,1)' : 'rgba(246,239,234,1)',
                border: isBuyNowHovered ? '1px solid rgba(110,89,75,1)' : '1px solid rgba(110,89,75,1)',
              }}
              onMouseEnter={() => setIsBuyNowHovered(true)}
              onMouseLeave={() => setIsBuyNowHovered(false)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


export default ProductDetails;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '0 20px',
    gap: '20px', 

  },
  imagePreviewContainer: {
    width: '40vw', 
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',   
    border:"1px solid rgba(110,89,75,0.4)",
    borderRadius:'1vw', 
    padding:'2vw'
  },
  mainImage: {
    maxWidth: '100%', 
    maxHeight: '100%', 
    objectFit: 'contain',
     display: 'block', 
    borderRadius:'0.5vw', 

  },
  thumbnailContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', 
    maxHeight: '100vh',
    overflowY: 'auto', 
    
  },
  thumbnail: {
    cursor: 'pointer',
    width: '130px',
    height: 'auto',
    padding:'0.5vw',
    border:"1px solid rgba(110,89,75,0.4)",
    borderRadius:'1vw',
  },
  thumbnailImage: {
    width: '100%',
    height: 'auto',
    borderRadius:'0.5vw',
  },
  detailsContainer: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
    padding:'0 2vw'
  },
  title: {
    fontWeight: '700',
    fontSize: '2.1vw',
    color: '#49372B',
  },
  description: {
    fontWeight: '300',
    fontSize:'1.1vw',
    lineHeight:'1.3vw',
    color: '#49372B',
  },
  rating: {
    marginBottom: '1vw',
  },
  price: {
    fontWeight: '500',
    fontSize:'1.2vw',
    lineHeight:'1.3vw',
    color: '#49372B',
  },
  actionButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },
  backButton: {
    cursor: 'pointer',
    margin: '1vw 2vw',
    width: '20px',
    height: '20px',
    marginBottom:'1vw'
  },
  button: {
    width:'100%',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
  },}

