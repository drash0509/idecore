import React, { useState } from 'react';
import ImageUpload from './ImageInput'; 

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: 'auto auto',
    flex:1
  },
  label: {
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '8px',
    color: '#333',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid rgba(110,89,75,1)',
    borderRadius: '4px',
  },
  textarea: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid rgba(110,89,75,1)',
    borderRadius: '4px',
    minHeight: '100px',
  },
  select: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid rgba(110,89,75,1)',
    borderRadius: '4px',
  },
  submitButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: 'rgba(110,89,75,1)',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  imageUploadContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    margin:'2vw'
  },
  imageCard: {
    width: '40%',
    padding: '10px',
    border: '1px solid rgba(110,89,75,1)',
    borderRadius: '4px',
    marginBottom: '10px',
  },
};

const ProductForm = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [imageURL1, setImageURL1] = useState('');
  const [imageURL2, setImageURL2] = useState('');
  const [imageURL3, setImageURL3] = useState('');
  const [imageURL4, setImageURL4] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      category,
      description,
      price: parseFloat(price),
      imageURL,
      imageURL1,
      imageURL2,
      imageURL3,
      imageURL4,
    };
    console.log(data);


  };

  const handleImageDrop = (setImage) => (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file));
  };

  const handleDeleteImage = (setImage) => () => {
    setImage('');
  };

  const isFormValid = () => {
    return title && category && price && description && imageURL && imageURL1 && imageURL2 && imageURL3 && imageURL4;
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>

    <div style={{paddingHorizontal:'1vw',marginTop:'3vw',border:'2px solid rgba(110,89,75,1)'}}>
      
    <div style={{fontWeight: '600',
    marginTop: '20px',
    marginBottom: '8px',
    textAlign:'center',
    color: '#333',}}>Drop Your product images here</div>
        <div style={styles.imageUploadContainer}>
        <ImageUpload index={0} image={{ imageURL }} onDrop={handleImageDrop(setImageURL)} onDelete={handleDeleteImage(setImageURL)} />
        <ImageUpload index={1} image={{ imageURL: imageURL1 }} onDrop={handleImageDrop(setImageURL1)} onDelete={handleDeleteImage(setImageURL1)} />
        <ImageUpload index={2} image={{ imageURL: imageURL2 }} onDrop={handleImageDrop(setImageURL2)} onDelete={handleDeleteImage(setImageURL2)} />
        <ImageUpload index={3} image={{ imageURL: imageURL3 }} onDrop={handleImageDrop(setImageURL3)} onDelete={handleDeleteImage(setImageURL3)} />
        <ImageUpload index={4} image={{ imageURL: imageURL4 }} onDrop={handleImageDrop(setImageURL4)} onDelete={handleDeleteImage(setImageURL4)} />
      </div>
    </div>

      <label style={styles.label}>Title <span style={{color: 'red'}}>*</span></label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={styles.input}
      />

      <label style={styles.label}>Category <span style={{color: 'red'}}>*</span></label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} required style={styles.select}>
        <option value="">Select a category</option>
        <option value="Home Decor">Home Decor</option>
        <option value="Bed Room">Bed Room</option>
        <option value="Kids">Kids</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Storage">Storage</option>
        <option value="Organizers">Organizers</option>
      </select>

  

      <label style={styles.label}>Description <span style={{color: 'red'}}>*</span></label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        style={styles.textarea}
      />

      <label style={styles.label}>Price <span style={{color: 'red'}}>*</span></label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        style={styles.input}
      />

      <button type="submit" disabled={!isFormValid()} style={styles.submitButton}>Submit</button>
    </form>
  );
};

export default ProductForm;
