import React from 'react';

import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
        <Nav></Nav>
        <main>
            {/* About is a JSX element */}
            <About></About>
        </main>
    </div>
  );
}

export default App;
