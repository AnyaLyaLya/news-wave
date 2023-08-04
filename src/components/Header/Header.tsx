import { Link } from 'react-router-dom';
import './header.scss';
import { SearchInput } from '../SearchInput';
import { GiNewspaper } from 'react-icons/gi';
import { useNewsContext } from '../../contexts/NewsContext';

export const Header = () => {
  const { searchQuery } = useNewsContext();

  return (
    <header className="header">
      <div className='header__box'>
        <Link to='/' className='header__logo'>
          <GiNewspaper size={36}/>
        </Link>

        <SearchInput searchQuery={searchQuery} />
      </div>      
      
    </header> 
  );
};