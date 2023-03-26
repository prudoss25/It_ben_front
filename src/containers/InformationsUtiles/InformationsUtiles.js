import { Divider } from "@material-ui/core";
import React, { useState } from "react";
import Aux from "../../hoc/_Aux/_Aux";
import ArticleResume from "./ArticleResume";
import CarteSejour from "./Articles/CarteSejour";
import CycleIngenieur from "./Articles/CycleIngenieur";
import Transport from "./Articles/Transport";
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
      title: "MOYENS DE TRANSPORT",
      author: "ADDA Réthens",
      date: Date.now(),
      component: <Transport />,
      resume:
        "Pour faciliter la circulation et le transport de ses citoyens, les autorités marocaines ont instaurées un système de transport assez développé et facilement accessible.",
    },
    {
      id: 3,
      title: "Cycle Ingénieur",
      author: "KPADONOU Joel",
      date: Date.now(),
      component: <CycleIngenieur />,
      resume:
        "Le cycle d’ingénieur s’étale sur trois ans de spécialisation, et conduit à l’obtention d’un BAC+5 (équivalent Master). Pour entrer en école d’ingénieur, plusieurs options sont possibles ",
    },
    {
      id: 4,
      title: "MOYENS DE TRANSPORT",
      author: "ADDA Réthens",
      date: Date.now(),
      component: <Transport />,
      resume:
        "Pour faciliter la circulation et le transport de ses citoyens, les autorités marocaines ont instaurées un système de transport assez développé et facilement accessible.",
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
      id: 4,
      title: "Cycle Ingénieur",
      author: "KPADONOU Joel",
      date: Date.now(),
      component: <CycleIngenieur />,
      resume:
        "Le cycle d’ingénieur s’étale sur trois ans de spécialisation, et conduit à l’obtention d’un BAC+5 (équivalent Master). Pour entrer en école d’ingénieur, plusieurs options sont possibles ",
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
        <div style={{display: 'flex' , flexFlow:'row' , flexWrap:'wrap', width:'100%',
         justifyContent:'space-evenly', textAlign:"center"}}>
            
                {infosList.map((info) => {
                return (
                    <div
                    item
                    key={info.id}
                    style={{ marginRight: "70px", width: "275px", marginBottom: "15px" }}
                    xs={3}
                    >
                    <ArticleResume
                        title={info.title}
                        resume={info.resume}
                        author={info.author}
                        date={info.date}
                        action={() => showDetail(info)}
                    />
                    </div>
                );
                })}
        </div>
        <h4>Parcours Académique</h4>
      <div>
      <div style={{display: 'flex' , flexFlow:'row' , flexWrap:'wrap', width:'100%',
         justifyContent:'space-evenly', textAlign:"center"}}>
            {infosList.map((info) => {
            return (
              <div
              item
              key={info.id}
              style={{ marginRight: "70px", width: "275px", marginBottom: "15px" }}
              xs={3}
              >
                <ArticleResume
                    title={info.title}
                    resume={info.resume}
                    author={info.author}
                    date={info.date}
                    action={() => showDetail(info)}
                />
                </div>
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

        </div>
      </div>
    </Aux>
  );
};

export default InformationsUtiles;
