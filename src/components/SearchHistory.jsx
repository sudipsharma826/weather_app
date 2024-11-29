import React from 'react';
import { List, ListItem, ListItemButton, ListItemText, Typography, Box } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton } from '@mui/material';

const SearchHistory = ({ history, onSelect }) => {
  if (!history.length) {
    return (
      <Box mt={2}>
        <Typography variant="body2" color="text.secondary" align="center">
          No search history
        </Typography>
      </Box>
    );
  }

  return (
    <List sx={{ maxWidth: 400, margin: '0 auto' }}>
      {history.map((city, index) => (
        <ListItem
          key={index}
          secondaryAction={
            <IconButton edge="end" onClick={() => onSelect(city)}>
              <RefreshIcon />
            </IconButton>
          }
        >
          <ListItemButton onClick={() => onSelect(city)}>
            <ListItemText primary={city} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SearchHistory;
