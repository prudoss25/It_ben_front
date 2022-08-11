import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React from "react";
// import classes from "./EvenementItem.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    cursor: 'pointer',
    height:170,
    // paddingTop: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-beetween',
    justifyItems:"flex-start",
    width: '100%',
  },
  details: {
    width:"75%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: '25%',
    height:"100%"
  }
}));

const EvenementItem = (props) => {
  const classes = useStyles();
  const { loading = false, title, theme, description, action } = props;

  return (
    <Card className={classes.root} onClick={action}>
      {loading ? (
        <Skeleton
          style={{ width: '25%', height:"100%" }}
          animation="wave"
          variant="rectangular"
        />
      ) : (
        <CardMedia component="img" className={classes.cover} image="https://picsum.photos/260/190" alt={title} />
      )}
      <div className={classes.details}>
        <CardContent className={classes.content}>
          {loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="90%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography variant="h6" component="div" color="error">
              {title}
            </Typography>
          )}
          {loading ? (
            <Skeleton animation="wave" height={10} width="50%" />
          ) : (
            <Typography variant="body2" color="text.secondary" component="p" gutterBottom>
              {theme}
            </Typography>
          )}
          {loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginTop: 6 }}
              />
              <Skeleton animation="wave" height={10} />
              <Skeleton animation="wave" height={10} />
              <Skeleton animation="wave" height={10} />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            <Typography variant="body2" color="text.secondary" component="p">
              {description}
            </Typography>
          )}
        </CardContent>
      </div>
    </Card>
  );

  // return(
  //     <div className={classes.Event} >
  //         <div className={classes.BlocImg}>
  //             <img
  //             className={classes.EventImg}
  //             src={props.src}
  //             alt={props.title}
  //             />
  //         </div>
  //         <div>
  //             <div className={classes.EventHeader}>
  //                 <p className={classes.EventTitre}>{props.title}</p>
  //                 <p className={classes.EventDate}>{props.date}</p>
  //             </div>
  //             <p className={classes.EventDescription}>
  //                 {props.description}
  //             </p>
  //         </div>
  //   </div>
  // )
};

export default EvenementItem;
