import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Container, Box, Typography } from '@mui/material';
import { fetchWeather } from './redux/weatherSlice';
import WeatherCard from './components/WeatherCard';
import SearchHistory from './components/SearchHistory';

function App() {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();
  const { currentWeather, searchHistory, loading, error } = useSelector((state) => state.weather);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city));
      setCity('');
    }
  };

  const handleHistorySelect = (selectedCity) => {
    dispatch(fetchWeather(selectedCity));
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Weather App
        </Typography>
        
        <Box component="form" onSubmit={handleSearch} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            error={!!error}
            helperText={error}
          />
        </Box>

        <WeatherCard weatherData={currentWeather} loading={loading} />
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Search History
          </Typography>
          <SearchHistory history={searchHistory} onSelect={handleHistorySelect} />
        </Box>
      </Box>
    </Container>
  );
}

export default App
