import { useNewsContext } from "../../contexts/NewsContext";
import { NewsList } from "../../components/NewsList";
import './news.scss';
import { Options } from "../../components/Options";
import { ThemeProvider } from "@emotion/react";
import { Breadcrumbs, Grid, Link, Typography } from '@mui/material';
import { customTheme } from "../../customstyle/customTheme";
import { Pagination } from "@mui/material";
import { ChangeEvent } from "react";
import { ThreeCircles } from "react-loader-spinner";

const News = () => {
  const { page, setPage, error, isLoading, news } = useNewsContext();

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    isLoading ? (
      <div className='container'>
        <ThreeCircles
          height="200"
          width="200"
          color="black"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor="#fff384"
          innerCircleColor="#6fcfff"
          middleCircleColor="#fff384"
        />
      </div> 
    ) : (
      (error || news?.length === 0) ? (
        <h1 className='news__error'>
          Sorry, but nothing was found for your request!
        </h1>      
      ) : (
        <div className='news'>
          <h1 className='news__header'>
            News
          </h1>

          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>

            <Typography color="text.primary">News</Typography>
          </Breadcrumbs>

          <Options />

          <div className='news__list'>
            <NewsList />
          </div>
        
          <div className='news__pagination'> 
            <button className="news__button" onClick={handleLoadMore}>
              Load More
            </button>

            <ThemeProvider theme={customTheme}>
              <Grid 
                container 
                direction="row" 
                justifyContent="center" 
                alignItems="center" 
                width="100%"
                marginBottom={5}
                marginTop={5}
              >
                <Pagination
                  size="small"
                  count={10}
                  page={page}
                  onChange={handlePageChange}
                  showFirstButton
                  showLastButton
                  color="primary"
                />
              </Grid>
            </ThemeProvider>  
          </div>  
        </div>
      ) 
    )
  );
};

export default News;