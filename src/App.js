import { CenterLayout } from './app/containers/CenterLayout/index';
import { RickAndMortyApp } from "./app/containers/RickAndMortyApp/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <CenterLayout>
        <RickAndMortyApp />
      </CenterLayout>
    </div>
  );
}

export default App;
