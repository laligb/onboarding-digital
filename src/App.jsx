import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let tutorialData = [
    {
      title: "Dedica moltes hores",
      description:
        "Un minim de 30 hores a la setmana. Si no en tens prou, hauras de dedicar-li, mes hores. Al principi sembla impossible pero una millora rapidament",
      bgColor: "#45818e",
      image: "assets/time_management.svg",
      step: 0,
    },
    {
      title: "Programa prorjects propis",
      description:
        "Mes val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivacio i la implicacio en el projecte ajudara, a accelerar el teu aprentatge.",
      bgColor: "#bcbcbc",
      image: "assets/programming.svg",
      step: 1,
    },
    {
      title: "Procura descansar",
      description:
        "Descansar be i desconnectar son vitals. D aquesta manera reduiras l'éstres i l'ansietat. Miloraras la teva concentracio i consolidaras el teu aprenentatge.  ",
      bgColor: "#f1c232",
      image: "assets/meditation.svg",
      step: 2,
    },
  ];

  const [step, setStep] = useState(0);
  let lengthOfData = tutorialData.length;

  function nextStep() {
    setStep((c) => (c + 1 < lengthOfData ? c + 1 : c));
  }

  function prevStep() {
    setStep((c) => (c - 1 >= 0 ? c - 1 : c));
  }

  let currentCardData = tutorialData[step];

  return (
    <>
      <Card
        data={currentCardData}
        nextPage={nextStep}
        prevStep={prevStep}
        length={lengthOfData}
      />
    </>
  );
}

export default App;
