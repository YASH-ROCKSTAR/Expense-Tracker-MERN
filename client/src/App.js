import './App.css';
import Graph from './Component/Graph';
import Form from './Component/Form';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-15xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Expense Tracker</h1>
      {/* grid column */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* chart */}
        <Graph/>
        {/* form */}
        <Form/>
        
      </div>
      </div>
    </div>
  );
}

export default App;
