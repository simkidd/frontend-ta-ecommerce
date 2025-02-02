# Ecommerce Dashboard - Frontend Developer Technical Assessment

## Project Overview

This project is an Ecommerce Dashboard built using **Next.js 14+, TypeScript, Redux (Redux Toolkit), Tailwind CSS, and ShadCN**. The purpose of this assessment is to demonstrate modern web development skills, including state management, responsive design, and reusable component architecture.

## Tech Stack

- **Next.js 14+** - React-based framework for server-side rendering and static site generation.
- **TypeScript** - Strongly typed JavaScript for improved code quality and maintainability.
- **Redux Toolkit** - State management for handling global application state.
- **Tailwind CSS** - Utility-first CSS framework for responsive styling.
- **ShadCN** - UI component library for consistent design.
- **Git** - Version control for project tracking.

---

## Features

### 1. **Product Management Dashboard**

- Displays key product analytics.
- Includes an interactive widget showing important metrics (e.g., sales overview, top-selling products).
- Fully responsive design ensuring usability across different screen sizes.

### 2. **Product Table**

- Displays a paginated table of products.
- Columns: **Product Image, Name, Price, Stock, Category**.
- Pagination: **10 items per page**.
- Sorting enabled for at least two columns.

### 3. **Shopping Cart Feature**

- "Add to Cart" functionality.
- Cart widget in the top navigation bar updating as items are added.
- "Remove from Cart" button replaces "Add to Cart" once a product is added.
- Cart state persists across page refreshes.

### 4. **State Management**

- Utilizes **Redux Toolkit** for managing application state.
- Implements proper **action creators** and **reducers**.
- Handles **loading and error states** effectively.

---

## Data Requirements

- A **mock dataset** of at least 30 products.
- Each product has the following fields:
  - `id`: Unique identifier
  - `name`: Product name
  - `price`: Product price
  - `description`: Product details
  - `category`: Product category
  - `image URL`: Image of the product (e.g., from [https://picsum.photos](https://picsum.photos))
  - `stock quantity`: Available stock count

---

## Project Structure

```
/src
├── app/
├── components/
│   ├── cart/
│   │   ├── Cart.tsx
│   │   ├── cartIcon.tsx
│   │   ├── CartItem.tsx
│   ├── product/
│   │   ├── columns.tsx
│   │   ├── DescriptionModal.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductsList.tsx
│   │   ├── ProductsView.tsx
│   │   ├── ProductTable.tsx
│   │   ├── ProductTableList.tsx
│   ├── shared/
│   │   ├── header/
│   │   ├── sidebar/
│   │   │   ├── AppSidebar.tsx
│   │   │   ├── UserComp.tsx
│   ├── theme/
│   ├── ui/
├── constants/
│   ├── app.constant.ts
├── data/
├── hooks/
├── interfaces/
│   ├── cart.interface.ts
│   ├── product.interface.ts
├── lib/
├── providers/
│   ├── StoreProvider.tsx
│   ├── ThemeProvider.tsx
├── store/
│   ├── features/
│   │   ├── cart/
│   │   │   ├── cartSlice.ts
│   │   ├── product/
│   │   │   ├── productSlice.ts
│   ├── hooks.ts
│   ├── store.ts
├── styles/
├── utils/
│   ├── config.ts
│   ├── formatCurrency.ts
```

---

## Getting Started

### 1. **Clone Repository**

```bash
 git clone https://github.com/simkidd/frontend-ta-ecommerce.git
 cd ecommerce-dashboard
```

### 2. **Install Dependencies**

```bash
npm install 
```

### 3. **Run Development Server**

```bash
npm run dev  
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

The application is deployed on [**Vercel**](https://vercel.com/).

- **Repository URL**: [GitHub Repo Link](https://github.com/simkidd/frontend-ta-ecommerce)
- **Deployed URL**: [Live Demo Link](https://frontend-ta-ecommerce.vercel.app/)

---


## Potential Improvements

- Implement **dark mode** for better UI accessibility.
- Enhance **search and filtering** capabilities in the product table.
- Add **user authentication** for a more realistic dashboard.
- Implement **backend integration** for real data handling.

---


## Author

**John Mason**\
Frontend Developer\
07033101706

---

### Thanks! 🚀

