import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Masonry from '@mui/lab/Masonry';
import ArticleCard from '../ArticleCard/ArticleCard';
import { Item } from '../../customstyle/Item';
import { useNewsContext } from '../../contexts/NewsContext';
import './newslist.scss';

const NewsList: React.FC = () => {
  const { news, columns } = useNewsContext();

  return (
    news && (    
      <Masonry columns={columns} spacing={4}>
        {news.map((item) => (  
        <Item>
          <ArticleCard 
            key={uuidv4()}
            item={item}
          /> 
        </Item>  
        ))}
      </Masonry>
    )
  );
};

export default NewsList;