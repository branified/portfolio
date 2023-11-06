import './App.scss';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element = {<Layout />} />
    </Routes>
    </>
  );
}

export default App;
