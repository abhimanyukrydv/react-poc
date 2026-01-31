
function Login() {
  return (
      <h2>Login Component</h2>
  )
  }
export default Login; // Default export

function Sighnup() {
  return (
      <h2>Sighnup Component</h2>
  )
  }
export {Sighnup}; // Named export

function HomePage() {
  return (
      <h2>HomePage Component</h2>
  )
  }
export {HomePage}; // Named export


export const UserKey = "USER_12345"; // Another named export as a constant


// This file demonstrates default and named exports in React components
// Default export can be imported without curly braces
// Named exports must be imported within curly braces
// A file can have only one default export but multiple named exports
// Components must start with a capital letter
// Each component must return a single element (can have nested elements inside)
