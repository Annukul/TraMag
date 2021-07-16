import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import SinglePost from './components/pages/Single/SinglePost';
import Create from './components/pages/Create/Create';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact render={() => <Home />} />
        <Route path="/view/:id" render={() => <SinglePost />} />
        <Route path="/create" render={() => <Create />} />
      </div>
    </Router>
  );
}

export default App;
