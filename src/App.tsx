import { Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { NewsContextProvider } from "./contexts/NewsContext";
import { PageNotFound } from './pages/PageNotFaund';
import { News } from './pages/News';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <NewsContextProvider>
      <div className="app">
        <Header />

        <main className="app__main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />

            <Route path="/news">
              <Route index element={<News />} />
              <Route path=":articleTitle" element={<ArticlePage />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </NewsContextProvider>
   
  );
}

export default App;
