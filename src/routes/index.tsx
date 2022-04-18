import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../views';
import CreateClient from '../views/createClient.view';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create/client" element={<CreateClient />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
