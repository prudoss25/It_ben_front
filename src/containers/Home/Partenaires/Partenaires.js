import React from "react";
import classes from "./Partenaires.css";

function Partenaires() {
  const Data_Partenaires = [
    {
      id: "1",
      nom: "Banque Populaire",
      logo: "http://fnh.ma//uploads/actualites/5e1334d6c660f.png",
    },
    {
      id: "2",
      nom: "AMCI",
      logo: "https://studiafrique.com/storage/posts/1607977302.jpg",
    },
    {
      id: "3",
      nom: "CIH",
      logo: "https://www.maghrebtitrisation.ma/sites/default/files/news/2022-01/cih-logo.jpg",
    },
    {
      id: "4",
      nom: "Ambassade Bénin",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tVlUqmInV6r9kZe6RTA5PtMW04FOXxWgkZHxRpXIWdZRd1sAyCVmJJhsVichbBGlGOc&usqp=CAU",
    },
  ];

  return (
    <div>
      <div className={classes.PartenairesTitre}>
        <h1>Partenaires</h1>
      </div>
      <div className={classes.Partenaires}>
        {Data_Partenaires.map((partenaire) => (
          <div className={classes.Partenaire} key={partenaire.id}>
            <img
            style={{objectFit:"contain"}}
              className={classes.PartImg}
              title={partenaire.nom}
              src={partenaire.logo}
              alt={partenaire.nom}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partenaires;
