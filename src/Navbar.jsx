import React from 'react';

const Navbar = ({ cartQuantity }) => {
  return (
    <nav>
      <div className="navbar">
        <h1>Plant Shop</h1>
        <div className="cart-icon">
          <span>Cart ({cartQuantity})</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
