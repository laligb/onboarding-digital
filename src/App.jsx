import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  let tutorialData = [
    {
      title: "Dedica moltes hores",
      description:
        "Un minim de 30 hores a la setmana. Si no en tens prou, hauras de dedicar-li, mes hores. Al principi sembla impossible pero una millora rapidament",
      bgColor: "myColor",
      image: "myImg",
    },
    {
      title: "programa prorjects propis",
      description:
        "Mes val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivacio i la implicacio en el projecte ajudara, a accelerar el teu aprentatge.",
      bgColor: "",
      image: "",
    },
    {
      title: "Procura descansar",
      description:
        "Descansar be i desconnectar son vitals. D aquesta manera reduiras l'éstres i l'ansietat. Miloraras la teva concentracio i consolidaras el teu aprenentatge.  ",
      bgColor: "",
      image: "",
    },
  ];
  const [step] = useState(0);
  let currentCardData = tutorialData[step];
  console.log(currentCardData);
  return (
    <>
      <Card data={currentCardData} />
    </>
  );
}

export default App;
