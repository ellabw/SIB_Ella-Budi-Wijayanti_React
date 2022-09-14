import logo from './logo.svg';
import Clock from './components/Clock'
import Halu from './components/Halu'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css';
import TodoFunction from './components/TodoFunction';

function App() {
  return (
    <div className="App">
      <Clock/>
      <hr/>

      {/* this Halu */}
      

      {/* this is error boundary */}
      <ErrorBoundary>
       <Halu/>
       {/* <TodoFunction/> */}
      </ErrorBoundary>
    </div>
  );
}

export default App;
