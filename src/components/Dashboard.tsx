import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Tooltip,
  IconButton,
} from "@mui/material";
import {
  AttachMoney,
  TrendingUp,
  AssignmentTurnedIn,
  RestaurantMenu,
  MenuBook,
  AssignmentInd,
  DepartureBoard,
  RoundaboutLeft,
  OutlinedFlag,
  OutletOutlined,
  OutletRounded,
  MenuBookOutlined,
  MenuBookRounded,
} from "@mui/icons-material";
import ActivityChart from "./ActivityChart";

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2, ml: "20px" }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
        </Grid>

        {/* Total Orders */}
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Tooltip title="Total Orders">
                <IconButton>
                  <AssignmentInd sx={{ color: "yellow" }} />
                </IconButton>
              </Tooltip>
              <Typography color="textSecondary" gutterBottom>
                Total Orders
              </Typography>
              <Typography variant="h5">75</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Delivered */}
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Tooltip title="Total Delivered">
                <IconButton>
                  <AssignmentTurnedIn sx={{ color: "green" }} />
                </IconButton>
              </Tooltip>
              <Typography color="textSecondary" gutterBottom>
                Total Delivered
              </Typography>
              <Typography variant="h5">70</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Cancelled */}
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Tooltip title="Total Cancelled">
                <IconButton>
                  <AssignmentTurnedIn sx={{ color: "red" }} />
                </IconButton>
              </Tooltip>
              <Typography color="textSecondary" gutterBottom>
                Total Cancelled
              </Typography>
              <Typography variant="h5">5</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Total Revenue */}
        <Grid item xs={2}>
          <Card>
            <CardContent>
              <Tooltip title="Total Revenue">
                <IconButton>
                  <AttachMoney sx={{ color: "green" }} />
                </IconButton>
              </Tooltip>
              <Typography color="textSecondary" gutterBottom>
                Total Revenue
              </Typography>
              <Typography variant="h5">$12k</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Net Profit */}
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Tooltip title="Net Profit">
                <IconButton>
                  <TrendingUp sx={{ color: "green", fontWeight: 'bold' }} />
                </IconButton>
              </Tooltip>
              <Typography color="textSecondary" gutterBottom>
                Net Profit
              </Typography>
              <Typography variant="h5">$6759.25</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Activity Chart */}
        <Grid item xs={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Activity
              </Typography>
              <ActivityChart />
            </CardContent>
          </Card>
        </Grid>

        {/* Goals, Popular Dishes, Menus */}
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Goals
              </Typography>
              <Tooltip title="Goals">
                <IconButton>
                  <MenuBookRounded sx={{ color: "red" }} />
                </IconButton>
              </Tooltip>
              <Typography variant="h6" gutterBottom>
                Popular Dishes
              </Typography>
              <Tooltip title="Popular Dishes">
                <IconButton>
                  <RestaurantMenu sx={{ color: "orange" }} />
                </IconButton>
              </Tooltip>
              <Typography variant="h6" gutterBottom>
                Menus
              </Typography>
              <Tooltip title="Menus">
                <IconButton>
                  <MenuBook sx={{ color: "green" }} />
                </IconButton>
              </Tooltip>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Orders */}
        <Grid item xs={8}>
          <Card sx={{height: '100%'}}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Orders
              </Typography>
              <Box>
                {[
                  {
                    name: "Wade Warren",
                    order: "15478256",
                    amount: "$124.00",
                    status: "Delivered",
                  },
                  {
                    name: "Jane Cooper",
                    order: "48967586",
                    amount: "$305.02",
                    status: "Delivered",
                  },
                  {
                    name: "Guy Hawkins",
                    order: "78985215",
                    amount: "$45.88",
                    status: "Cancelled",
                  },
                  {
                    name: "Kristin Watson",
                    order: "20965732",
                    amount: "$65.00",
                    status: "Pending",
                  },
                  {
                    name: "Cody Fisher",
                    order: "95715620",
                    amount: "$545.00",
                    status: "Delivered",
                  },
                  {
                    name: "Savannah Nguyen",
                    order: "78514568",
                    amount: "$128.20",
                    status: "Delivered",
                  },
                ].map((order) => (
                  <Box
                    key={order.order}
                    display="flex"
                    alignItems="center"
                    mb={2}
                  >
                    <Avatar>{order.name.charAt(0)}</Avatar>
                    <Box ml={2}>
                      <Typography>{order.name}</Typography>
                      <Typography color="textSecondary">
                        Order No. {order.order}
                      </Typography>
                    </Box>
                    <Box ml="auto">
                      <Typography>{order.amount}</Typography>
                    </Box>
                    <Box ml={2}>
                      <Typography
                        color={
                          order.status === "Delivered"
                            ? "green"
                            : order.status === "Cancelled"
                            ? "red"
                            : "orange"
                        }
                      >
                        {order.status}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Customer's Feedback */}
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Customer's Feedback
              </Typography>
              <Box>
                {[
                  {
                    name: "Jenny Wilson",
                    feedback:
                      "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
                    rating: 5,
                  },
                  {
                    name: "Dianne Russell",
                    feedback:
                      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
                    rating: 5,
                  },
                  {
                    name: "Devon Lane",
                    feedback:
                      "Normally wings are wings, but theirs are lean meaty and tender, and the buffalo sauce is very flavorful. The onion rings were just OK.",
                    rating: 4,
                  },
                ].map((feedback, index) => (
                  <Box key={index} display="flex" alignItems="center" mb={2}>
                    <Avatar>{feedback.name.charAt(0)}</Avatar>
                    <Box ml={2}>
                      <Typography>{feedback.name}</Typography>
                      <Typography>{"⭐".repeat(feedback.rating)}</Typography>
                      <Typography color="textSecondary">
                        {feedback.feedback}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
