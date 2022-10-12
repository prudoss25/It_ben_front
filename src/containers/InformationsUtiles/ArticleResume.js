import { Card, CardContent, CardHeader, CardMedia, Chip, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import moment from "moment";
import React from "react";
import { stringTruncedShower } from "../../Functions";



const ArticleResume = (props) => {
    const { loading = false, title, author, resume, action,date } = props;

    return (
        <Card
          style={{
            cursor: "pointer",
            width: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            margin: 5,
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
                <Chip label={date && moment(date).format("ll")} size="small" style={{fontSize:10, backgroundColor:"#ffb900"}}  />
              </div>
            }
            subheader={
              loading ? (
                <Skeleton animation="wave" height={10} width="40%" />
              ) : (
                <Typography variant="subtitle2" style={{fontWeight:"bold" ,color: "black",fontSize:13}} component="div">
                  Auteur : {author}
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
              image={"https://picsum.photos/300/150?1"}
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
              {stringTruncedShower(resume,300)}
              </Typography>
            )}
          </CardContent>
        </Card>
      );
}
export default ArticleResume;