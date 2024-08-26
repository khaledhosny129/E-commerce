
# E-commerce

This project with Node.js, Express, MongoDB. an e-commerce platform featuring secure user authentication with JWT, role-based access control, and comprehensive management of users, products, categories, brands, addresses, carts, coupons, orders, and reviews. It includes advanced API features like pagination, filtering, sorting, and searching, along with technical implementations using Mongoose middleware, Joi for validation, and Stripe for online payments. The platform is designed for both user and admin interactions, providing a robust foundation for scalable e-commerce applications.


## Key Features

- **SignUp/SignIn**: User registration and login functionality.
- **Authentication/Authorization**: 
  - Secure user authentication using JWT tokens.
  - Role-based access control to determine who can access various endpoints.
- **User Management**: 
  - Create a new user.
  - Get and update user profile.
  - Change user password (by admin).
  - Retrieve a specific user.
  - Retrieve all users (by admin).
  - Delete a user (by admin).
- **Product Management**: 
  - Retrieve all products.
  - Retrieve a specific product.
  - Add a new product.
  - Update or delete a product (by admin).
- **Category Management**: 
  - Retrieve all categories.
  - Retrieve a specific category.
  - Add, update, or delete a category (by admin).
- **SubCategory Management**: 
  - Retrieve all subcategories.
  - Retrieve a specific subcategory.
  - Create, update, or delete a subcategory (by admin).
- **Brand Management**: 
  - Retrieve all brands.
  - Retrieve a specific brand.
  - Add a new brand.
  - Update or delete a brand (by admin).
- **Address Management**: 
  - Add a new address.
  - Retrieve all addresses.
  - Delete an address.
- **Cart Management**: 
  - Add a product to the cart.
  - Remove a product from the cart.
  - Retrieve the logged user's cart.
  - Update product quantity in the cart.
  - Apply a coupon to the cart.
  - Clear the user's cart.
- **Coupon Management**: 
  - Retrieve all coupons (admin).
  - Retrieve a specific coupon (admin).
  - Create a new coupon (admin).
  - Update or delete a coupon (admin).
- **Order Management**: 
  - Retrieve all orders.
  - Create a cash order.
  - Retrieve a specific order.
  - Create an online order with Stripe payment integration.
- **Review Management**: 
  - Create a review (user).
  - Delete a review (by admin or user).
  - Retrieve all reviews.
  - Update a review (by user).
  - Retrieve a specific review.
- **API Features**: 
  - Pagination.
  - Filtering.
  - Sorting.
  - Searching.
  - Selecting specific fields.
- **Mongoose Middleware**: 
  - Hashing user passwords.
  - Returning full image paths.
- **Mongoose Virtuals**: 
  - Populate functionality to display all reviews related to a specific product.
- **Middleware**: 
  - `catchAsyncError` for handling errors asynchronously.
  - `globalErrorMiddleware` for handling global errors.
  - `fileUpload` using Multer for managing file uploads.
- **Utility Classes**: 
  - `ApiFeatures` for implementing API functionalities.
  - `AppError` for error handling.
- **Validation**: 
  - Using Joi for data validation.


