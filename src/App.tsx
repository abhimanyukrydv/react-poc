function App() { // Primary component
  return (
    <div>
      <h1>Hello, World!</h1>
      <h1>The sum is: {sum()}</h1>
      <Fruit />
    </div>
  )
}
// Secondary component
function Fruit() {
  return (
      <h1>Hello, Fruit!</h1>
  )
  }
  function sum(){
    return 2 + 2
  }
export default App
// components always start with a capital letter
// each component must return a single element (can have nested elements inside)
// JSX allows embedding JavaScript expressions within curly braces {}
//TSX files use TypeScript syntax along with JSX
// React components can be functional (like above) or class-based (less common now)
// React components must be exported to be used in other files

