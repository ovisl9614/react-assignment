# DevStack

DevStack is a responsive web application where users can explore different development technologies and build their ideal technology stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- React Icons
- DaisyUI

## Features

- Explore different technologies with their icons, descriptions, categories, and ratings.
- Add technologies to your own development stack.
- Responsive design for mobile, tablet, and desktop devices.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React UI code easier to write and understand.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component. I used it to manage the selected technologies in the user's stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component. I used it to load the technology data from the JSON file when the component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It allows React to efficiently update, add, or remove items.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing UI based on a condition.

For example, I used it to show a message when the user's stack is empty:

```jsx
{selectedStack.length === 0 && (
    <p>No technology selected</p>
)}


Note : README.md fully made by AI - Time is running out that's why -_- 