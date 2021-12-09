import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const arr = ['dormir', 'comer', 'estudar', 'assistir']
function App() {
  return (
   arr.map((item) => Task (item))
  );
}

export default App;
