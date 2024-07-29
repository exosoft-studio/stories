import StoryCard from "./story-card"

const items = [
  {
		id: 1,
    title: "Les jumeaux de Dame Nature",
    description: "Ciel et Cloud Aerys sont des jumeaux espiègles, qui décident de partir à l'aventure un après midi de repas de famille.",
    topic: "CdK",
  },
  {
		id: 2,
    title: "Prologue CdMo",
    description : "Après des années d'aventures avec ses nouveaux amis, Morpheus se retrouve face à Eshu, le démon du Feu.",
    topic: "CdMo"
  },
  {
		id: 3,
    title: "Sah la vie d'Artiste",
    description: "Artiste veut devenir un artiste, un vrai. Il débute dans le milieu, et se base sur son Ashé et son vécu pour peaufiner sa plume et faire le buzz dans le futur.",
    topic: "SLVA"
  },
  {
		id: 4,
    title: "Haïku #41",
    description: "Extrait du recueil de Haïkus d'Ori Shun",
    topic: "Poésie"
  },
  {
		id: 5,
    title: "Nouvelle démo",
    description: "Ceci est une nouvelle de test, pour la construction du site Stories.",
    topic: "Nouvelle"
  },
  {
		id: 6,
    title: "Nouvelle démo",
    description: "Ceci est une nouvelle de test, pour la construction du site Stories.",
    topic: "Nouvelle"
  },
  {
		id: 7,
    title: "Nouvelle démo",
    description: "Ceci est une nouvelle de test, pour la construction du site Stories.",
    topic: "Nouvelle"
  }
]


export default function StoriesList() {
return (
  <div className="min-h-[50vh] grid grid-cols-2 grid-flow-row gap-10
    justify-center items-start justify-items-center w-full">
		{items.map(x => <StoryCard {...x} key={x.title}/>	)}
  </div>  
)
}


        {/* <div className="flex justify-center items-center">Block</div>
        <div className="flex justify-center items-center">Block</div>
        <div className="flex justify-center items-center">Block</div>
        <div className="flex justify-center items-center">Block</div>
        <div className="flex justify-center items-center">Block</div>
        <div className="flex justify-center items-center">Block</div> */}