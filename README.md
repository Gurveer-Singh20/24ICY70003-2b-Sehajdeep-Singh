# Dynamic Product Filter

##  Description
The Dynamic Product Filter is a React-based web application that displays a list of products and allows users to filter them by category using a dropdown menu. The product list updates dynamically without reloading the page.

---

##  Aim
To create a dynamic product filter that sorts and displays items based on dropdown selection using React.

---

##  Objectives
- To implement filterable product data using JavaScript arrays  
- To use React state management for dynamic UI updates  
- To create a dropdown-based filtering interface  
- To design responsive product cards using CSS Grid  
- To display product images dynamically  

---

##  Technologies Used
- React.js  
- JavaScript (ES6)  
- HTML (JSX)  
- CSS  

---

##  Features
- Category-based product filtering  
- Dynamic UI updates using React state  
- Responsive grid layout  
- Product images displayed from public assets  
- Clean and simple user interface  
---

##  Project Structure
 Dynamic-Product-Filter/
├── public/
│ └── images/
├── src/
│ ├── App.js
│ ├── App.css
│ └── products.js
├── package.json
└── package-lock.json

---

##  How to Run the Project
1. Install Node.js  
2. Navigate to the project folder  
3. Install dependencies:
   ```bash
   npm install
   npm start
## Explanation
The application uses the useState hook to store the selected category. When the user selects a       category from the dropdown, the product list is filtered using the filter() method, and React re-    renders the UI dynamically.
## Result
The application successfully filters and displays products based on the selected category with     images and responsive layout.
## Conclusion
This project demonstrates effective use of React state management, array manipulation, and component-based UI design to build a dynamic and responsive web application.
