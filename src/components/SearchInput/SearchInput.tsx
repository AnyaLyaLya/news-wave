import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../../customstyle/Search';
import { ChangeEvent, FC } from 'react';
import { useNewsContext } from '../../contexts/NewsContext';

interface Props {
  searchQuery: string,
}

export const SearchInput: FC<Props> = ({searchQuery}) => {
  const { handleSearch } = useNewsContext();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleSearch(event); 
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleInputChange}
        value={searchQuery}
      />
    </Search>
  )
}

export default SearchInput;