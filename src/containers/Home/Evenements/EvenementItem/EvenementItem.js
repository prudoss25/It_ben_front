import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import moment from "moment";
import React from "react";
import { stringTruncedShower } from "../../../../Functions";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    cursor: "pointer",
    height: "100%",
    margin:8,
    flexDirection: "row",
    justifyContent: "space-beetween",
    justifyItems: "flex-start",
    width: "100%",
  },
  details: {
    width: "75%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    paddingTop:8
  },
  cover: {
    width: "25%",
    height: "100%",
  },
}));


const EvenementItem = (props) => {
  const classes = useStyles();
  const {
    loading = false,
    title,
    theme,
    description,
    action,
    startDate,
  } = props;

  return (
    <Card className={classes.root} onClick={action}>
      {loading ? (
        <Skeleton
          style={{ width: "25%", height: "100%" }}
          animation="wave"
          variant="rectangular"
        />
      ) : (
        <CardMedia
          component="img"
          className={classes.cover}
          image="https://picsum.photos/260/190"
          alt={title}
        />
      )}
      <div className={classes.details}>
        <CardHeader
          style={{paddingBottom:8}}
          title={
            loading ? (
              <Skeleton animation="wave" height={10} width="80%" />
            ) : (
              <Typography
                variant="h6"
                style={{ color: "#D72F2F", fontSize: 16 }}
                component="div"
                color="error"
              >
                {title}
              </Typography>
            )
          }
          action={
            <Chip
              label={startDate && moment(startDate).format("ll")}
              size="small"
              style={{ fontSize: 10, backgroundColor: "#ffb900" }}
            />
          }
          subheader={
            loading ? (
              <Skeleton animation="wave" height={10} width="40%" />
            ) : (
              <Typography
                variant="subtitle2"
                style={{ fontWeight: "bold", color: "black", fontSize: 13 }}
                component="div"
              >
                {'"' + theme + '"'}
              </Typography>
            )
          }
        />
        <CardContent className={classes.content}>
          {loading ? (
            <React.Fragment>
              <Skeleton animation="wave" height={10} />
              <Skeleton animation="wave" height={10} />
              <Skeleton animation="wave" height={10} />
              <Skeleton animation="wave" height={10} />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontSize: 13 }}
              component="p"
            >
              {stringTruncedShower(description,250)}
            </Typography>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default EvenementItem;
