import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EditorSample from './pages/editor/EditorSample';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<EditorSample />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
