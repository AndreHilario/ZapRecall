import ArrowTurn from "../assets/seta_virar.png";
import cards from "../constants/cards";
import { useState } from "react";
import { Options } from "../styles/styles";
import { RedOption } from "../styles/styles";
import { OrangeOption } from "../styles/styles";
import { GreenOption } from "../styles/styles";
import { MainContent } from "../styles/styles";
import { QuestionBack } from "../styles/styles";

export default function DiscoverQuestion1() {

    const [newAnswer, setNewAnswer] = useState(true);
    const [showOptions, setShowOptions] = useState("");

    function showAnswer() {
        setNewAnswer(false);
        setShowOptions(
            <Options>
                <RedOption>Não lembrei</RedOption>
                <OrangeOption>Quase não lembrei</OrangeOption>
                <GreenOption>Zap!</GreenOption>
            </Options>)
    }

    return (
        <MainContent>
            <QuestionBack>
                <p>{!newAnswer ? cards[0].answer : cards[0].question}</p>
                {newAnswer ? <img src={ArrowTurn} onClick={showAnswer} /> : ""}
                {showOptions}
            </QuestionBack>
        </MainContent>


    );
};

