import React from 'react';
import { Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';

const WeatherCard = ({ weatherData, loading }) => {
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (!weatherData) return null;

  return (
    <Card sx={{ minWidth: 275, maxWidth: 400, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {weatherData.name}, {weatherData.sys.country}
        </Typography>
        <Typography variant="h6">
          {Math.round(weatherData.main.temp)}°C
        </Typography>
        <Typography color="text.secondary">
          {weatherData.weather[0].description}
        </Typography>
        <Box mt={2}>
          <Typography variant="body2">
            Humidity: {weatherData.main.humidity}%
          </Typography>
          <Typography variant="body2">
            Wind Speed: {weatherData.wind.speed} m/s
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
