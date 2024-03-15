import React from 'react';
import ProductDataCard from './ProductDataCard';
import items from '../../../CustomerDashboard/items'; 

const ProductData = () => {
  
// Function to extract all products from the items array
function getAllProducts(items) {
  let allProducts = [];
  items.forEach(item => {
    item.categories.forEach(category => {
      allProducts = allProducts.concat(category.products);
    });
  });
  return allProducts;
}

const Products = getAllProducts(items);

  const containerStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    gap: '2rem',
    marginBottom: '6vw',
    width: '80vw',
    padding: '2vw 2vw',
    alignItems: 'center',
  };

  const handleEdit = (productId) => {
    console.log("Edit product", productId);
  };

  const handleDelete = (productId) => {
    console.log("Delete product", productId);
  };

  return (
    <div style={{ alignItems: 'center' }}>
      <div style={containerStyles}>
      {Products.map((product) => (
            <ProductDataCard
              key={product.id}
              image={product['image-url']}
              title={product.title}
              price={product.price}
              stock={'N/A'} // Assuming stock isn't a part of your product object; adjust as needed
              onEdit={() => handleEdit(product.id)}
              onDelete={() => handleDelete(product.id)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ProductData;
