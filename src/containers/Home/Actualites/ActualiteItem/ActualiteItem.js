import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import moment from "moment";
import { stringTruncedShower } from "../../../../Functions";

const actualiteItem = (props) => {
  const { loading = false, title, theme, description, action,startDate } = props;
  return (
    <Card
      style={{
        cursor: "pointer",
        width: "50%",
        minHeight: "80%",
        maxHeight: "80%",
        margin: 20,
      }}
      onClick={action}
    >
      <CardHeader
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <Typography variant="h6" style={{color: "#D72F2F",fontSize:16}} component="div" color="error" >
              {title}
            </Typography>
          )
        }
        action={
          <div>
            <Chip label={startDate && moment(startDate).format("ll")} size="small" style={{fontSize:10, backgroundColor:"#ffb900"}}  />
          </div>
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            <Typography variant="subtitle2" style={{fontWeight:"bold" ,color: "black",fontSize:13}} component="div">
              {"\""+theme+"\""}
            </Typography>
          )
        }
      />
      {loading ? (
        <Skeleton
          style={{ height: 190 }}
          animation="wave"
          variant="rectangular"
        />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/260/190"
          alt={title}
        />
      )}
      <CardContent>
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary" style={{ fontSize: 13 }}
          component="p"
        >
          {stringTruncedShower(description,300)}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
  // return (
  //   <div className={classes.Actu}>
  //     <p>
  //       <img src={asebemLogo} alt={props.sousTitre} className={classes.ActuImg} />
  //     </p>
  //     <h3 className={classes.ActuTitre}>{props.title}</h3>
  //     <h3 className={classes.ActuTheme}>{props.theme}</h3>
  //     <p className={classes.ActuDescription}>{props.description}</p>
  //     <Button action={props.action}>
  //       {props.titreBouton}
  //     </Button>
  //   </div>
  // );
};

export default actualiteItem;
