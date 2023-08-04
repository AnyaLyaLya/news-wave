import { useNewsContext } from '../../contexts/NewsContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { format } from 'date-fns';
import './ArticlePage.scss';

const ArticlePage = () => {
  const { article } = useNewsContext();
  let formattedDate;

  if (article) {
    const dateObject = new Date(article.publishedAt);
    formattedDate = format(dateObject, 'dd MMMM yyyy');
  }
  
  return (
    article && (
      <div className='article'>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>

          <Link underline="hover" color="inherit" href="/news">
            News
          </Link>

          <Typography color="text.primary">{`${article.title.slice(0, 10)}...`}</Typography>
        </Breadcrumbs>

        <h1 className='article__title'>{article.title}</h1>

        <div className='article__header'>
          <div className='article__header--author'>
            <AccountCircleIcon  />
            <p className='article__author'>{article.author}</p>
          </div>
          <p className='article__date'>{formattedDate}</p>
        </div>

        <div className='article__main'>
          <p className='article__content'>
            {`${article.content} + ${article.description}`}
          </p>

          <img
            className='article__image' 
            src={article.urlToImage ? article.urlToImage : 'https://st5.depositphotos.com/4678277/66132/i/450/depositphotos_661327320-stock-photo-artwork-magazine-collage-picture-arm.jpg'} 
            alt={article.description} 
            title={article.description}
          />
        </div>

        <a href={article.url} className='article__button'>
          Read more...
        </a>
      </div>     
    )
  );
};

export default ArticlePage;