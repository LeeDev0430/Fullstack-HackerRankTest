import React, { useState } from 'react';
import './index.css';

function ProductValidation() {
  const [productName, setProductName] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [touched, setTouched] = useState({ name: false, quantity: false });

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductQuantityChange = (event) => {
    setProductQuantity(event.target.value);
  };

  const handleBlur = (field) => () => {
    setTouched({ ...touched, [field]: true });
  };

  const validate = () => {
    const errors = {
      name: '',
      quantity: '',
    };

    if (!productName) {
      errors.name = 'Product name is required';
    }

    if (!productQuantity) {
      errors.quantity = 'Quantity is required';
    }

    return errors;
  };

  const errors = validate();
  const isDisabled = Object.values(errors).some((error) => error);

  return (
    <div className="layout-column justify-contents-center align-items-center">
      <section className="card pa-50">
        <form className="layout-column" noValidate>
          <label>
            <input
              type="text"
              value={productName}
              onChange={handleProductNameChange}
              onBlur={handleBlur('name')}
              data-testid="name-input"
              className={`white large outlined ${errors.name ? 'error' : ''}`}
              placeholder="Product name"
            />
            {errors.name && (
              <p
                className="error-text form-hint"
                data-testid="name-input-error"
              >
                {errors.name}
              </p>
            )}
          </label>
          <label>
            <input
              type="number"
              value={productQuantity}
              onChange={handleProductQuantityChange}
              onBlur={handleBlur('quantity')}
              data-testid="quantity-input"
              className={`white large outlined ${
                errors.quantity ? 'error' : ''
              }`}
              placeholder="Quantity"
            />
            {errors.quantity && (
              <p
                className="error-text form-hint"
                data-testid="quantity-input-error"
              >
                {errors.quantity}
              </p>
            )}
          </label>

          <button
            className="mt-50"
            type="submit"
            data-testid="submit-button"
            disabled={isDisabled}
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ProductValidation;
