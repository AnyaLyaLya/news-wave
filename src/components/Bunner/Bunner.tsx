import { useNewsContext } from '../../contexts/NewsContext';
import { SearchInput } from '../SearchInput';
import './bunner.scss';


export const Bunner = () => {
  const {searchQuery} = useNewsContext();

  return (
    <div className="bunner" id='bunner'>
      <div className='bunner__content'>
        <h1 className='bunner__title'>
          News
        </h1>

        <p className='bunner__subtitle'>
          Explore the Latest News 
            <br/>
          Start your search for discovering the latest updates and more on our website. 
        </p>

        <SearchInput searchQuery={searchQuery} />
      </div>
    </div>
  )
}