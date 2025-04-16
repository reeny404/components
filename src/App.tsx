import { BrowserRouter, Route, Routes } from 'react-router-dom';

import EditorTestPage from './pages/editor/page';
import HomePage from './pages/page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<EditorTestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
