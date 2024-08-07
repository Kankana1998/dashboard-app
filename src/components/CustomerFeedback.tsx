import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const feedbacks = [
  { name: 'Jenny Wilson', feedback: 'The food was excellent and so was the service.', rating: 5 },
  { name: 'Dianne Russell', feedback: 'We enjoyed the Eggs Benedict.', rating: 4 },
 
];

const CustomerFeedback: React.FC = () => {
  return (
    <List>
      {feedbacks.map((feedback, index) => (
        <ListItem key={index} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={feedback.name} />
          </ListItemAvatar>
          <ListItemText
            primary={feedback.name}
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary">
                  {`${'★'.repeat(feedback.rating)}${'☆'.repeat(5 - feedback.rating)}`}
                </Typography>
                {` — ${feedback.feedback}`}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default CustomerFeedback;
