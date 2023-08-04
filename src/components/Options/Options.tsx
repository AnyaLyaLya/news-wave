import { Grid, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { SortBy } from '../../types/SortBy';
import { ThemeProvider } from '@mui/material/styles';
import { customTheme } from '../../customstyle/customTheme';
import { useNewsContext } from '../../contexts/NewsContext';
import './options.scss';
const Options = () => {
  const { 
    articlePerPage,
    setArticlePerPage,
    sortBy,
    setSortBy,
  } = useNewsContext();

  return (
    <ThemeProvider theme={customTheme}>
      <div className='settings'>
        <Grid 
          container 
          spacing={0.5} 
          direction="row" 
          justifyContent="start" 
          alignItems="center" 
          maxWidth="1200px"
          marginRight={1}
          padding={1}
        >
          <Grid 
            container 
            spacing={1} 
            justifyContent="start"
            alignItems="start" 
            xs={12}
            sm={6}
            md={5}
          >          
            <Grid item xs={5} sm={4} md={3} width="100%">
              <FormControl sx={{ minWidth: 100, height: 30 }}>
                <InputLabel id="demo-simple-select-label">Article per page</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select" 
                  label="Photo per page"
                  size="small"
                  value={articlePerPage} 
                  onChange={(e) => setArticlePerPage(e.target.value as number)} 
                  autoWidth  
                  color='secondary'
                >
                  {[24,48,56,72].map(perPage =>(
                    <MenuItem value={perPage} placeholder='Article per page'>
                      {`${perPage}`} 
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={5} sm={4} md={3} >
              <FormControl sx={{ minWidth: 100, height: 30}}>
                <InputLabel id="demo-simple-select-label">Order</InputLabel>
                <Select 
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Order" 
                  size="small"
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value as SortBy)} 
                >
                  {Object.values(SortBy).map((value) => (
                    <MenuItem key={value} value={value} placeholder='Article per page'>
                      {value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Options;
