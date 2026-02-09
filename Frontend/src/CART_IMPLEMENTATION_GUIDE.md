# Cart System Implementation Guide

## Overview
This guide explains how to use the cart system with Context API and localStorage in your Okhai Mern e-commerce application.

## Files Created

### 1. **CartContext.jsx** (`src/context/CartContext.jsx`)
- Manages global cart state
- Handles localStorage persistence
- Provides cart methods to all components

### 2. **useCart.js** (`src/hooks/useCart.js`)
- Custom hook for easy access to cart context
- Prevents errors if used outside CartProvider

### 3. **Cart.jsx** (Updated)
- Side drawer showing cart items
- Features: Add/Remove items, Quantity control
- Orange buttons for checkout and continue shopping
- Clear cart functionality

### 4. **Checkout.jsx** (`src/Checkout/Checkout.jsx`)
- Complete checkout page
- Order summary, Delivery address form, Payment method selection
- Price breakdown with shipping calculation
- Orange themed buttons

### 5. **ProductExample.jsx** (`src/components/ProductExample.jsx`)
- Example implementation of adding products to cart
- Size and quantity selection
- Can be used as reference for ProductView.jsx

## How to Use in Components

### Adding Items to Cart

```javascript
import { useCart } from "../hooks/useCart";

function ProductView() {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.image[0],
      size: selectedSize,
      qty: quantity
    });
  };

  return <button onClick={handleAddToCart}>Add to Cart</button>;
}
```

### Accessing Cart Items

```javascript
import { useCart } from "../hooks/useCart";

function CartDisplay() {
  const { cartItems, getTotalPrice, getTotalItems } = useCart();

  return (
    <>
      <p>Total Items: {getTotalItems()}</p>
      <p>Total Price: ₹{getTotalPrice()}</p>
      {cartItems.map(item => (
        <div key={`${item.id}-${item.size}`}>
          {item.name} - {item.qty}x ₹{item.price}
        </div>
      ))}
    </>
  );
}
```

### Removing Items

```javascript
const { removeFromCart } = useCart();

<button onClick={() => removeFromCart(product.id, product.size)}>
  Remove
</button>
```

### Updating Quantity

```javascript
const { updateQuantity } = useCart() ;

<button onClick={() => updateQuantity(product.id, product.size, newQty)}>
  Update
</button>
```

## Context Methods

| Method | Parameters | Description |
|--------|-----------|-------------|
| `addToCart` | `product` object | Add/update item in cart |
| `removeFromCart` | `productId, size` | Remove item from cart |
| `updateQuantity` | `productId, size, newQuantity` | Update item quantity |
| `clearCart` | None | Empty entire cart |
| `getTotalPrice` | None | Get total cart value |
| `getTotalItems` | None | Get total items count |

## Product Object Structure

```javascript
{
  id: "product_id",           // Unique identifier
  name: "Product Name",       // Product name
  price: 1999,               // Unit price
  image: "image_url",        // Product image URL
  size: "M",                 // Selected size
  qty: 1                     // Quantity
}
```

## LocalStorage Key
- Key: `"okhaiCart"`
- Stores serialized cart items array
- Auto-syncs on cart changes

## Button Colors
- **Orange-500**: Primary actions (Checkout, Add to Cart)
- **Orange-600**: Hover state for primary buttons
- **Orange-400**: Secondary actions (Continue Shopping)
- **Orange-50**: Hover state for outline buttons

## Features Implemented

✅ Add items to cart
✅ Remove items from cart
✅ Increment/Decrement quantity
✅ LocalStorage persistence
✅ Free shipping threshold (₹5000)
✅ Cart total calculation
✅ Checkout page with form
✅ Order summary display
✅ Orange theme buttons
✅ Cart drawer UI
✅ Continue shopping option
✅ Clear cart functionality

## Integration Steps

1. **Import CartProvider in App.jsx** ✓ (Done)
2. **Wrap app with CartProvider** ✓ (Done)
3. **Import useCart in product components**
4. **Add product to cart on button click**
5. **Display cart items in Cart component** ✓ (Done)
6. **Navigate to checkout route** ✓ (Done)

## Next Steps

1. Update **ProductView.jsx** with:
   - Size selection
   - Quantity controls
   - Add to cart button using `addToCart()`

2. Update **Navbar.jsx** to:
   - Show cart count badge
   - Display Cart drawer with toggle

3. Update **ProductCard.jsx** to:
   - Add "Add to Cart" button
   - Show cart count when added

## Testing

```javascript
// Open browser console
// Check localStorage
localStorage.getItem("okhaiCart")

// Should return JSON array of cart items
```

## Troubleshooting

- **useCart is not defined**: Make sure component is inside CartProvider
- **LocalStorage not saving**: Check browser privacy settings
- **Cart empty on refresh**: Check console for JSON parsing errors
