import { Route, Routes } from 'react-router-dom';

import Home from './Screens/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<div>
                    <h2>Cart Page</h2>
                </div>} />
      </Routes>
    </div>
  );
}

export default App;
