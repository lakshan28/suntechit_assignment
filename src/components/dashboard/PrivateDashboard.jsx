/**
 * @author Uvindu Sanjana
 */

import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import clsx from "clsx";

import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Divider
} from "@material-ui/core";

import StarIcon from "@material-ui/icons/GradeOutlined";
import DotIcon from "@material-ui/icons/FiberManualRecord";

import darkModeContext from "../../context/darkMode.context";

import PieChart from "../assets/PieChart";
import Chart from "../assets/RadarChart";
import BarChart from "../assets/BarChart";
import StyledBadge from "../assets/StyledBadge";

import Avatar1 from "../../img/avatar1.png";
import Avatar2 from "../../img/avatar2.png";
import Avatar3 from "../../img/avatar3.png";

export default function PrivateDashboard({ classes: classes1, listText }) {
  const [rating, setRating] = useState(3);

  const classes = classes1;

  const ListText = listText;

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const { dark } = React.useContext(darkModeContext);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} lg={5} className={classes.gridItem}>
          <Paper
            className={fixedHeightPaper}
            elevation={3}
            style={{
              background:
                "transparent linear-gradient(180deg, #55EBB6 0%, #988AD6 100%) 0% 0% no-repeat padding-box"
            }}
          >
            <div className={classes.profile}>
              <Avatar alt="Nathon Tylor" className={classes.badge}>
                <StarIcon style={{ fontSize: "5rem" }} />
              </Avatar>
              <Typography
                variant="h6"
                component="h2"
                style={{ color: "#FFF", marginBottom: "0.5rem" }}
              >
                Congratulations Nethan,
              </Typography>
              <Typography
                variant="subtitle2"
                component="h2"
                style={{ color: "#FFF", fontSize: "0.8rem" }}
              >
                You have done 75.3% more tasks today. Check your new badge in
                your profile.
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <Typography
              variant="subtitle2"
              component="h2"
              className={classes.gridItemTitle}
            >
              Tasks
            </Typography>
            <PieChart axis={dark ? "#BBB6B6" : "rgba(0, 0, 0, 0.6)"} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <Typography
              variant="subtitle2"
              component="h2"
              className={classes.gridItemTitle}
            >
              User Statistics
            </Typography>
            <Chart axis={dark ? "#BBB6B6" : "#C1C1C1"} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={5} lg={5} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <Typography
              variant="subtitle2"
              component="h2"
              className={classes.gridItemTitle}
            >
              Adviser Statistics
            </Typography>
            <BarChart axis={dark ? "#BBB6B6" : "#C1C1C1"} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} lg={3} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <Box
              component="fieldset"
              mb={3}
              style={{ textAlign: "center" }}
              borderColor="transparent"
            >
              <Typography
                component="h2"
                variant="body2"
                className={classes.gridItemTitle}
              >
                Badge
              </Typography>
              <Typography
                component="h2"
                variant="h5"
                style={{ marginBottom: "1rem" }}
              >
                Visionary
              </Typography>
              <Typography
                component="h2"
                variant="subtitle2"
                className={classes.gridItemTitle}
              >
                Client Rating
              </Typography>
              <Rating
                size="large"
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
                style={{ marginBottom: "0.9rem" }}
              />
              <Typography
                component="h2"
                variant="body2"
                className={classes.gridItemTitle}
              >
                Daily Tasks
              </Typography>
              <Typography component="h2" variant="h4">
                7 / 10
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4} className={classes.gridItem}>
          <Paper className={fixedHeightPaper} elevation={3}>
            <Typography
              variant="subtitle2"
              component="h2"
              className={classes.gridItemTitle}
            >
              Team
            </Typography>
            <List dense={true} className={classes.chatList}>
              <ListItem>
                <ListItemAvatar>
                  <StyledBadge
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right"
                    }}
                    overlap="circle"
                    variant="dot"
                  >
                    <Avatar src={Avatar1} />
                  </StyledBadge>
                </ListItemAvatar>
                <ListText primary="David Lee" secondary="online" />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DotIcon style={{ color: "#55EBB6" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider className={classes.divider} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={Avatar2} />
                </ListItemAvatar>
                <ListText primary="Alex Johnson" secondary="4 minutes ago" />
              </ListItem>
              <Divider className={classes.divider} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={Avatar3} />
                </ListItemAvatar>
                <ListText primary="Johnathon Chen" secondary="2 hours ago" />
              </ListItem>
              <Divider className={classes.divider} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={Avatar2} />
                </ListItemAvatar>
                <ListText primary="Alex Johnson" secondary="4 minutes ago" />
              </ListItem>
              <Divider className={classes.divider} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={Avatar3} />
                </ListItemAvatar>
                <ListText primary="Johnathon Chen" secondary="2 hours ago" />
              </ListItem>
              <Divider className={classes.divider} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={Avatar2} />
                </ListItemAvatar>
                <ListText primary="Alex Johnson" secondary="4 minutes ago" />
              </ListItem>
              <Divider className={classes.divider} />
              <ListItem>
                <ListItemAvatar>
                  <Avatar src={Avatar3} />
                </ListItemAvatar>
                <ListText primary="Johnathon Chen" secondary="2 hours ago" />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
