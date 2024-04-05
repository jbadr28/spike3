import './App.css';
import Dashboard from './components/dashboard';
import Figure1 from './components/figure1';
import Figure2 from './components/figure2';
import Figure3 from './components/figure3';
function App() {
  return (
  <div className="flex flex-col justify-center items-center p-8 gap-6">
    <Figure1 />
    <Figure2 />
    <Figure3 />
    <Dashboard />
  </div>
  );
}

export default App;
