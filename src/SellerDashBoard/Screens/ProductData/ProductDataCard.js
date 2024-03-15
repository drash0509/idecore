import React from 'react';
import editButtonImage from '../../images/bin.png'
import deleteButtonImage from '../../images/pencil.png';

function ProductDataCard({ image, title, price, stock, onEdit, onDelete }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
      <img src={image} alt={title} style={{ width: '100px', height: '100px', marginRight: '20px' }} />
      <div style={{ flex: 1 }}>
        <h3>{title}</h3>
      </div>
      <p style={{ margin: '0 20px' }}>${price}</p>
      <p style={{ margin: '0 20px' }}>{stock} in stock</p>
      <button onClick={onEdit} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: '10px' }}>
        <img src={editButtonImage} alt="Edit" style={{ width: '24px', height: '24px' }} />
      </button>
      <button onClick={onDelete} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <img src={deleteButtonImage} alt="Delete" style={{ width: '24px', height: '24px' }} />
      </button>
    </div>
  );
}

export default ProductDataCard;
