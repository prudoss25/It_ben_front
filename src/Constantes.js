
export const ROLES = {
  Membre: "Membre",
  SG: "Secrétaire Général",
  SGA: "Secrétaire Général Adjoint",
  Tresorier: "Trésorier(e)",
  Commissaire: "Commissaire Au Compte",
  Communication: "Chargé Communication",
  CCS: "Chargé Culturel et Sportif",
  PCC: "Président Conseil Consultatif",
  PACC: "Président Adjoint Conseil Consultatif",
  SGH: "Secrétaire Général d'Honneur",
  RV: "Responsable Ville",
};

export const RoleList =  [
    {
      default: true,
      value: "Membre",
      label: "Membre",
    },
    {
      value: "SG",
      label: "Secrétaire Général",
    },
    {
      value: "SGA",
      label: "Secrétaire Général Adjoint",
    },
    {
      value: "Tresorier",
      label: "Trésorier(e)",
    },
    {
      value: "Commissaire",
      label: "Commissaire Au Compte",
    },
    {
      value: "Communication",
      label: "Chargé Communication",
    },
    {
      value: "CCS",
      label: "Chargé Culturel et Sportif",
    },
    {
      value: "PCC",
      label: "Président Conseil Consultatif",
    },
    {
      value: "PACC",
      label: "Président Adjoint Conseil Consultatif",
    },
    {
      value: "SGH",
      label: "Secrétaire Général d'Honneur",
    },
    {
      value: "RV",
      label: "Responsable Ville",
    },
  ];

export const UsersManagementType = "Users";

export const ServicesManagementType = "Services";

export const EventsManagementType = "Events";

export const SponsorsManagementType = "Sponsors";




export const CategorieList =  [
  {
    default: true,
    value: "Divers",
    label: "Divers",
  },
  {
    value: "I",
    label: "Infographie",
  },
  {
    value: "SD",
    label: "Services Digitaux",
  },
  {
    value: "R",
    label: "Restauration",
  },
  {
    value: "C",
    label: "Commerce",
  },
  ];

export const ServiceListe = [
  {
    idService:'0',
    title:"Restaurant Bennie",
    description:"Le Reataurant Bennie est un service de restauration qui fournit vous confectionne et vous livre des plats selon vos préférences.",
    registrationDate:new Date(),
    dateLimite: new Date(),
    couvertureGeographique:["Casablanca","Rabat","Settat","Mohammedia"],
    imageUrl:"https://picsum.photos/300/150?1",
    category:"R",
    vendorID:"Bennie",
    entrepreneur: {
      registrationNumber:"M0000000000",
      idUser:"",
      lastName:"",
      city:"",
      userName:"Bennie",
      firstName:"",
      emailAddress:""
    },
    facebook:"https://www.facebook.com/profile.php?id=100015400230417",
    whatsapp:"https://wa.me/c/22952282023",
    instagram:"https://www.instagram.com/kellysfoodbenin",
    siteInternet:"bbox-ff890.web.app"
  },
  {
    idService:'1',
    title:"Clean Graph",
    description:"Réalisation de vos posts.",
    registrationDate:new Date(),
    dateLimite: new Date(),
    couvertureGeographique:["All"],
    imageUrl:"https://picsum.photos/300/150?2",
    category:"I",
    vendorID:"Ludmil",
    entrepreneur: {
      registrationNumber:"",
      idUser:"",
      lastName:"",
      city:"",
      userName:"Ludmil",
      firstName:"",
      emailAddress:""
    },
    facebook:"https://www.facebook.com/profile.php?id=100015400230417",
    instagram:"https://www.instagram.com/kellysfoodbenin",
    siteInternet:"bbox-ff890.web.app"
  },
  {
    idService:'2',
    title:"Digit Services",
    description:"Création de site internet et gestion du site.",
    registrationDate:new Date(),
    dateLimite: new Date(),
    couvertureGeographique:["All"],
    imageUrl:"https://picsum.photos/300/150?3",
    category:"SD",
    vendorID:"Landry",
    entrepreneur: {
      registrationNumber:"",
      idUser:"",
      lastName:"",
      city:"",
      userName:"Landry",
      firstName:"",
      emailAddress:""
    },
    whatsapp:"https://wa.me/c/22952282023",
    instagram:"https://www.instagram.com/kellysfoodbenin",
    siteInternet:"bbox-ff890.web.app"
  },
  {
    idService:'3',
    title:"Service Marketing",
    description:"Nous nous accompagnons de la réaliser votre campagne marketing pour le lancement de vos produit.",
    registrationDate:new Date(),
    dateLimite: new Date(),
    couvertureGeographique:["All"],
    imageUrl:"https://picsum.photos/300/150?4",
    category:"SD",
    vendorID:"Ariste",
    entrepreneur: {
      registrationNumber:"",
      idUser:"",
      lastName:"",
      city:"",
      userName:"Ariste",
      firstName:"",
      emailAddress:""
    },
    facebook:"https://www.facebook.com/profile.php?id=100015400230417",
    whatsapp:"https://wa.me/c/22952282023",
  },
  {
    idService:'4',
    title:"Mod'Art Clean",
    description:"Pour vous faire beau, n'hésitez pas à nous contacter. Nous disposons d'une gamme variée de tenus de toutes les saisons et de tous les horizons.",
    registrationDate:new Date(),
    dateLimite: new Date(),
    couvertureGeographique:["All"],
    imageUrl:"https://picsum.photos/300/150?5",
    category:"C",
    vendorID:"Oscar",
    entrepreneur: {
      registrationNumber:"",
      idUser:"",
      lastName:"",
      city:"",
      userName:"Oscar",
      firstName:"",
      emailAddress:""
    },
    instagram:"https://www.instagram.com/kellysfoodbenin",
    siteInternet:"bbox-ff890.web.app"
  },
  {
    idService:'5',
    title:"Courses Daba",
    description:"Nous réalisons vos courses à votre place",
    registrationDate:new Date(),
    dateLimite: new Date(),
    couvertureGeographique:["Rabat"],
    imageUrl:"https://picsum.photos/300/150?6",
    category:"Divers",
    vendorID:"Bennie",
    entrepreneur: {
      registrationNumber:"",
      idUser:"",
      lastName:"",
      city:"",
      userName:"Bennie",
      firstName:"",
      emailAddress:""
    },
    facebook:"https://www.facebook.com/profile.php?id=100015400230417",
    whatsapp:"https://wa.me/c/22952282023",
    instagram:"https://www.instagram.com/kellysfoodbenin",
    siteInternet:"bbox-ff890.web.app"
  },
  {
    idService:'6',
    title:"Cosmetics Gros",
    description:"Nous vous trouvons des huiles essentielles marocaines en gros et nous occupons de leur livraison vers le pays de votre choix.",
    registrationDate:new Date(),
    dateLimite: new Date(),
    couvertureGeographique:["All"],
    imageUrl:"https://picsum.photos/300/150?7",
    category:"C",
    vendorID:"Belli",
    entrepreneur: {
      registrationNumber:"",
      idUser:"",
      lastName:"",
      city:"",
      userName:"Belli",
      firstName:"",
      emailAddress:""
    },
    facebook:"https://www.facebook.com/profile.php?id=100015400230417",
    whatsapp:"https://wa.me/c/22952282023",
    instagram:"https://www.instagram.com/kellysfoodbenin",
    siteInternet:"bbox-ff890.web.app"
  }
]
