import React from 'react';
import { Article } from '../../types/Article';
import { useNavigate } from 'react-router-dom';
import './articleCard.scss'
import { useNewsContext } from '../../contexts/NewsContext';

interface Props {
  item: Article;
}

const ArticleCard: React.FC<Props> = ({ item }) => {
  const navigate = useNavigate();

  const { setArticle } = useNewsContext();

  const handleSubmit = () => {
    setArticle(item);
    navigate(`/news/${item.title}`)
  };

  return (
    <button className='article-card' onClick={handleSubmit}>
      <h2 className='article-card__title'>{item.title}</h2>
      <p className='article-card__description'>{item.description}</p>
      <img className='article-card__img' src={item.urlToImage ? item.urlToImage : 'https://st5.depositphotos.com/4678277/66132/i/450/depositphotos_661327320-stock-photo-artwork-magazine-collage-picture-arm.jpg'} alt={item.title} />
    </button>
  );
}

export default ArticleCard;