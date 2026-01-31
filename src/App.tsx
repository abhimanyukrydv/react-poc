import ToDo from "./ToDo"
import Login, {Sighnup, HomePage, UserKey} from "./UserComponents" // Default import cant be imported unde curly braces

function App() { // Primary component
  const name  = "Abhimanyu Kumar"


  return (
    <div>
      <h1>Hello, World!</h1>
      <h1>The sum is: {sum()}</h1>
      <Fruit />
      <Login />
      <Sighnup />
      <HomePage />
      <h2>User Key: {UserKey}</h2>
      <ToDo />
      <h3>Welcome, {name}!</h3> // assigning value to a variable and using it in JSX
      <h3> Fruit is, {Fruit()}</h3>
      <h3> Sum is: {sum()}</h3>
      <h3> Sum with params: {sumWitParams(5, 10)}</h3> // calling function with parameters inside JSX
      <h3> Calculate (multiply): {calculate(4, 5, "multiply")}</h3>
      <h3> Calculate (add): {calculate(4, 5, "add")}</h3>
      <h3> Object Name: {obj.name}, Age: {obj.age.toString()}, Is Student: {obj.isStudent.toString()}</h3>
      <h3> Check console for alert message function </h3>
      <button onClick={alertMessage}>Show Alert</button> // calling function on button click
      <br />
      <button onClick={() => showAlert(name)}>Show Alert with Name</button> // calling function with parameter on button click
      <br />
      <button onClick={() => showAlert("Guest")}>Show Alert with Guest</button> // calling function with different parameter on button click
      <br />
      
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
// Exporting default allows importing without curly braces in other files

function sumWitParams(a: number, b: number): number {
  return a + b;
}

function calculate(a: number, b: number, op: string): number {
  if (op === "multiply") {
    return a * b;
  } else {
    return a + b;
  }
}

const obj = {
  name: "Abhimanyu",
  age: 21,
  isStudent: true
};

function alertMessage(): void {
  alert("This is an alert message!");
}

function showAlert(name: string): void {
  alert(`Hello, ${name}!`);
}