// import React from "react";
// import { ImageList, ImageListItem, ImageListItemBar, makeStyles } from "@material-ui/core";
// import image1 from "../../../assets/images/gallery/image1.jpeg";
// import image2 from "../../../assets/images/gallery/image2.png";
// import image3 from "../../../assets/images/gallery/image3.jpeg";
// import image4 from "../../../assets/images/gallery/image4.jpeg";
// import image5 from "../../../assets/images/gallery/image5.jpeg";
// import image6 from "../../../assets/images/gallery/image6.jpeg";
// import image7 from "../../../assets/images/gallery/image7.JPG";
// import image8 from "../../../assets/images/gallery/image8.JPG";
// import image9 from "../../../assets/images/gallery/image9.JPG";
// import image10 from "../../../assets/images/gallery/image10.JPG";
// import image11 from "../../../assets/images/gallery/image11.jpeg";
// import image12 from "../../../assets/images/gallery/image12.jpeg";
// import image13 from "../../../assets/images/gallery/image13.jpeg";
// import classes from "./GaleriePhoto.css";
// import ImageGallery from 'react-image-gallery';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     alignSelf: 'center',
//     marginBottom:'8px',
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     flexWrap: 'nowrap',
//     transform: 'translateZ(0)',
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
  
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
// })); 

// const GaleriePhoto = () => {
//   const Data_Photo = [
//     { original: image1, originalTitle:"Image 1" },
//     { original: image12,originalTitlee:"Accueil des nouveaux" },
//     { original: image9, originalTitle:"Image 9" },
//     { original: image2, originalTitle:"Image 2" },
//     { original: image3, originalTitle:"Image 3" },
//     { original: image10,originalTitle:"Image 10" },
//     { original: image11,originalTitle:"Image 11" },
//     { original: image13,originalTitle:"Accueil des nouveaux" },
//     { original: image5, originalTitle:"Image 5" },
//     { original: image6, originalTitle:"Image 6" },
//     { original: image7, originalTitle:"Image 7" },
//     { original: image8, originalTitle:"Image 8" },
//     { original: image4, originalTitle:"Image 4" },
//   ];
//   class MyGallery extends React.Component {
//     render() {
//       return <ImageGallery items={Data_Photo} />;
//     }
//   }
//   const galerie = new MyGallery();
//     // const classes = useStyles();
//     return (

//     <div className={classes.route}>
//       <ImageList className={classes.imageList}  >
//         {galerie.render()}
//       </ImageList>
//     </div>
      
//     );
  
// }

// export default GaleriePhoto;



import React from "react";
import { ImageList, ImageListItem, ImageListItemBar, makeStyles } from "@material-ui/core";
import image1 from "../../../assets/images/gallery/image1.jpeg";
import image2 from "../../../assets/images/gallery/image2.png";
import image3 from "../../../assets/images/gallery/image3.jpeg";
import image4 from "../../../assets/images/gallery/image4.jpeg";
import image5 from "../../../assets/images/gallery/image5.jpeg";
import image6 from "../../../assets/images/gallery/image6.jpeg";
import image7 from "../../../assets/images/gallery/image7.JPG";
import image8 from "../../../assets/images/gallery/image8.JPG";
import image9 from "../../../assets/images/gallery/image9.JPG";
import image10 from "../../../assets/images/gallery/image10.JPG";
import image11 from "../../../assets/images/gallery/image11.jpeg";
import image12 from "../../../assets/images/gallery/image12.jpeg";
import image13 from "../../../assets/images/gallery/image13.jpeg";

const useStyles = makeStyles((theme) => ({
root: {
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'space-around',
overflow: 'hidden',
marginBottom:'8px',
backgroundColor: theme.palette.background.paper,
[theme.breakpoints.down('sm')]: {
flexDirection: 'column',
alignItems: 'center',
},
},
imageList: {
flexWrap: 'nowrap',
transform: 'translateZ(0)',
[theme.breakpoints.down('sm')]: {
width: '100%',
maxWidth: '400px',
},
},
title: {
color: theme.palette.primary.light,
},
titleBar: {
background:
'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
},
}));

const GaleriePhoto = () => {

const Data_Photo = [
{ img: image1, title:"Image 1" },
{ img: image12, title:"Accueil des nouveaux" },
{ img: image9, title:"Image 9" },
{ img: image2, title:"Image 2" },
{ img: image3, title:"Image 3" },
{ img: image10, title:"Image 10" },
{ img: image11, title:"Image 11" },
{ img: image13, title:"Accueil des nouveaux" },
{ img: image5, title:"Image 5" },
{ img: image6, title:"Image 6" },
{ img: image7, title:"Image 7" },
{ img: image8, title:"Image 8" },
{ img: image4, title:"Image 4" },
];
const classes = useStyles();
return (
<div className={classes.root}>
  <ImageList className={classes.imageList} cols={4.5} >
    {Data_Photo.map((item) => (
      <ImageListItem key={item.img} style={{height:'400px'}}>
        <img src={item.img} alt={item.title} style={{objectFit:"cover"}} />
        <ImageListItemBar
          title={item.title}
          classes={{
            root: classes.titleBar,
            title: classes.title,
          }}
        />
      </ImageListItem>
    ))}
  </ImageList>
</div>
  
);
}

export default GaleriePhoto;




