import React from "react";
import classes from "./Statistiques.css";

const statistiques = (props) => {
  const DataStatistiques = [
    {
      id: "1",
      titre: "Etudiants",
      chiffre: "300",
    },
    {
      id: "2",
      titre: "Années d'esxistences",
      chiffre: "20",
    },
    {
      id: "3",
      titre: "Villes au Maroc",
      chiffre: "8",
    },
  ];

  return (
    <section>
      <p className={classes.StatistiquesTitreAsebem}>L'ASEBEM c'est</p>
      <div className={classes.Statistiques}>
        {DataStatistiques.map((stats) => (
          <div key={stats.id}>
            <p className={classes.StatsChiffres}>+{stats.chiffre}</p>
            <p className={classes.StatsTitre}>{stats.titre}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default statistiques;
