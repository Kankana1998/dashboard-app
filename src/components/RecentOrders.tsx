// src/components/RecentOrders.tsx

import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Box, Typography } from '@mui/material';

const rows = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00' },
  { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02' },
  { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$60.00' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20' },
];

const RecentOrders: React.FC = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.orderNo}>
              <TableCell>
                <Box display="flex"  alignItems="center">
                  <Avatar>{row.customer[0]}</Avatar>
                  <Typography variant="body1" ml={2}>
                    {row.customer}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>{row.orderNo}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentOrders;
