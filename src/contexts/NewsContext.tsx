import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { Article } from '../types/Article';
import { fetchNews } from '../api/api';
import { SortBy } from '../types/SortBy';
import { Screen } from '../types/Screen';
import { useNavigate } from 'react-router-dom';

interface NewsContextType {
  news: Article[] | null;
  setNews: (news: Article[] | null) => void;
  article: Article | null;
  setArticle: (article: Article | null) => void;
  page: number;
  setPage: (page: number) => void;
  articlePerPage: number;
  setArticlePerPage: (articlePerPage: number) => void;
  searchQuery: string;
  setSearchQuery: (searchQuery: string) => void; 
  sortBy: SortBy;
  setSortBy: (sortBy: SortBy) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  error: string;
  setError: (error: string) => void;
  columns: number;
  setColumns: (columns: number) => void;
  screen: Screen;
  setScreen: (screen: Screen) => void;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const NewsContext = createContext<NewsContextType>({
  news: null,
  setNews: () => {},
  article: null,
  setArticle: () => {},
  page: 1,
  setPage: () => {},
  articlePerPage: 10,
  setArticlePerPage: () => {},
  searchQuery: '',
  setSearchQuery: () => {},
  sortBy: SortBy.NEWEST,
  setSortBy: () => {},
  isLoading: true,
  setIsLoading: () => {},
  error: '',
  setError: () => {},
  columns: 3,
  setColumns: () => {},
  screen: Screen.DESKTOP,
  setScreen: () => {},
  handleSearch: () => {},
});

export const useNewsContext = () => useContext(NewsContext);

export const NewsContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  
  const [news, setNews] = useState<Article[] | null>(null);
  const [article, setArticle] = useState<Article | null>(null);

  const [page, setPage] = useState(1);
  const [articlePerPage, setArticlePerPage] = useState(24)
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.NEWEST);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const [columns, setColumns] = useState(3);
  const [screen, setScreen] = useState<Screen>(Screen.DESKTOP);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    
    setNews([]);
    setPage(1);
    setSearchQuery(event.target.value);
    navigate('/news');
  };

  useEffect(() => {
    const setupNews = async () => {
      setIsLoading(true);
      
      try {
        const fetchedNews = await fetchNews(
          page,  
          sortBy,
          articlePerPage,
          searchQuery
        );
    
        setNews(fetchedNews);
        setIsLoading(false);
      } catch (error) {
        setError('An error occurred while fetching news.');
        setIsLoading(false);
        console.error('Error fetching news:', error);
      }
    };
    
    if (searchQuery) {
      setupNews();
    } else {
      navigate('/');
    }
    
  }, [sortBy, articlePerPage, page, searchQuery, navigate]);

  useEffect(() => {
    const updateColumnsBasedOnScreenWidth = () => {
      if (window.innerWidth <= 500) {
        setColumns(1); 
        setScreen(Screen.MOBILE);
      } else if (window.innerWidth <= 768) {
        setColumns(2); 
        setScreen(Screen.TABLET);
      } else {
        setColumns(3); 
        setScreen(Screen.DESKTOP);
      }
    };

    updateColumnsBasedOnScreenWidth();

    window.addEventListener('resize', updateColumnsBasedOnScreenWidth);

    return () => {
      window.removeEventListener('resize', updateColumnsBasedOnScreenWidth);
    };
  }, []);

  const newsContextValue: NewsContextType = {
    news,
    setNews,
    article,
    setArticle,
    page, 
    setPage,
    articlePerPage,
    setArticlePerPage,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    isLoading,
    setIsLoading,
    error,
    setError,
    columns,
    setColumns,
    screen, 
    setScreen,
    handleSearch,
  };

  return (
    <NewsContext.Provider value={newsContextValue}>
      {children}
    </NewsContext.Provider>
  );
};
