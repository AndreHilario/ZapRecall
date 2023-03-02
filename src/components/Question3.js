import items from "../constants/items"
import { QuestionFace } from "../styles/styles";
import arrow from "../assets/seta_play.png";

export default function Question3(props) {

    const {showQuestion3} = props;

    return (
        <QuestionFace>
            <h4>{items[2]}</h4>
            <img src={arrow} alt="Seta de play" onClick={showQuestion3}/>
        </QuestionFace>
    );
};