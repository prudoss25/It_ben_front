import { Divider, Grid } from "@material-ui/core";
import React, { useState } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import ArticleResume from "./ArticleResume";
import CarteSejour from "./Articles/CarteSejour";
import ConsultInfo from "./ConsultInfo/ConsultInfo";

const InformationsUtiles = () => {
  const [openConsult, setOpenConsult] = useState(false);
  const [currentInfo, setCurrentInfo] = useState(null);

  const infosList = [
    {
      id: 1,
      title: "Carte de Séjour",
      author: "ADDA Réthens",
      date: Date.now(),
      component: <CarteSejour />,
      resume:
        "Toute immigration au sein d’un nouveau territoire requiert la présentation d’un ensemble de documents et de pièces d’identité légalisant le séjour quelle que soit sa durée.",
    },
    {
      id: 2,
      title: "Carte de Séjour",
      author: "ADDA Réthens",
      date: Date.now(),
      component: <CarteSejour />,
      resume:
        "Toute immigration au sein d’un nouveau territoire requiert la présentation d’un ensemble de documents et de pièces d’identité légalisant le séjour quelle que soit sa durée.",
    },
    {
      id: 3,
      title: "Carte de Séjour",
      author: "ADDA Réthens",
      date: Date.now(),
      component: <CarteSejour />,
      resume:
        "Toute immigration au sein d’un nouveau territoire requiert la présentation d’un ensemble de documents et de pièces d’identité légalisant le séjour quelle que soit sa durée.",
    },
    {
      id: 4,
      title: "Carte de Séjour",
      author: "ADDA Réthens",
      date: Date.now(),
      component: <CarteSejour />,
      resume:
        "Toute immigration au sein d’un nouveau territoire requiert la présentation d’un ensemble de documents et de pièces d’identité légalisant le séjour quelle que soit sa durée.",
    },
    {
      id: 5,
      title: "Carte de Séjour",
      author: "ADDA Réthens",
      date: Date.now(),
      component: <CarteSejour />,
      resume:
        "Toute immigration au sein d’un nouveau territoire requiert la présentation d’un ensemble de documents et de pièces d’identité légalisant le séjour quelle que soit sa durée.",
    },
    {
      id: 6,
      title: "Carte de Séjour",
      author: "ADDA Réthens",
      date: Date.now(),
      component: <CarteSejour />,
      resume:
        "Toute immigration au sein d’un nouveau territoire requiert la présentation d’un ensemble de documents et de pièces d’identité légalisant le séjour quelle que soit sa durée.",
    },
  ];
  const showDetail = (info) => {
    setCurrentInfo(info);
    setOpenConsult(true);
  };
  const onCloseConsult = () => {
    setOpenConsult(false);
    setCurrentInfo(null);
  };
  return (
    <Aux>
      <h2 style={{ textAlign: "center" }}>Informations Utiles</h2>
      <Divider style={{marginTop:8,marginBottom:8}} />
        <h4>Informations Administratives</h4>
        <div>
            <Grid
                container
                wrap="wrap"
                spacing={2}
                direction="row"
                style={{ marginLeft: 16, width: "90%" , marginTop:8,marginBottom:8}}
                alignContent="center"
                justifyContent="space-around"
            >
                {infosList.map((info) => {
                return (
                    <Grid
                    item
                    key={info.id}
                    style={{ marginRight: 0.5, width: "100%" }}
                    xs={3}
                    >
                    <ArticleResume
                        title={info.title}
                        resume={info.resume}
                        author={info.author}
                        date={info.date}
                        action={() => showDetail(info)}
                    />
                    </Grid>
                );
                })}
            </Grid>
        </div>
        <h4>Parcours Académique</h4>
      <div>
        <Grid
            container
            wrap="wrap"
            spacing={2}
            direction="row"
            style={{ marginLeft: 16, width: "90%",marginTop:8,marginBottom:8 }}
            alignContent="center"
            justifyContent="space-around"
        >
            {infosList.map((info) => {
            return (
                <Grid
                item
                key={info.id}
                style={{ marginRight: 0.5, width: "100%" }}
                xs={3}
                >
                <ArticleResume
                    title={info.title}
                    resume={info.resume}
                    author={info.author}
                    date={info.date}
                    action={() => showDetail(info)}
                />
                </Grid>
            );
            })}
            {openConsult && (
            <ConsultInfo
                content={currentInfo.component}
                title={currentInfo.title}
                open={openConsult}
                handleToggle={onCloseConsult}
            />
            )}

        </Grid>
      </div>
    </Aux>
  );
};

export default InformationsUtiles;
