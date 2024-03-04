import React from 'react';
import items from '../../items';
import Homecard from '../../components/Homecard';


const DecoreH = () => {
  const homeDecorCategory = items[0].categories.find(category => category.name === "Home Decor");

  const homeDecorProducts = homeDecorCategory ? homeDecorCategory.products : [];

  return (
    <div style={{marginBottom:'6vw' }}>
    <div style={styles.header}>
        <p style={styles.headerText}>
        DECORE YOUR HOME
        </p>
        <div style={styles.subHeaderTextContainer}>
          <p style={styles.subHeaderText}>
          ELEVATE YOUR SPACE WITH ELEGANCE          </p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection:'row',justifyContent:'space-evenly',}}>
        {homeDecorProducts.map((product) => (
          <Homecard
          key={product.id}
          id={product.id}
            imageUrl={product['image-url']}
            title={product.title}
            price={`$${product.price.toFixed(2)}`}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
header: {
    textAlign: 'center',
    padding:'1vw 2vw',
  },
  headerText: {
    fontWeight: '700',
    lineHeight:'0.5',
    fontSize: '2.1vw',
    color: '#49372B',

  },
  subHeaderTextContainer: {
    margin: 'auto',
    paddingBottom:'0.2vw',
    width:'33vw',
    
  },
  subHeaderText: {
    fontWeight: '300',
    fontSize:'1.1vw',
    lineHeight:'1.3vw',
    color: '#49372B',

  },
};

export default DecoreH;
