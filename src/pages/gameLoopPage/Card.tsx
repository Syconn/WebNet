import handAreaStyles from "./styles/handArea.module.css";
import { HelpCircle } from "lucide-react";

export type CardData = {
    name: string,
    image: string,
    desc: string,
}

function CardElement({ card }: { card: CardData }) {
    return (
        <div className={handAreaStyles.card}>
            <div className={handAreaStyles.hoverCorner}>
                <HelpCircle size={16} />
            </div>
            <div className={handAreaStyles.cardDesc}>{card.desc}</div>
            <p className={handAreaStyles.cardText}>{card.name}</p>
            <img className={handAreaStyles.photo}  alt={""} src={card.image} />
        </div>
    )
}

export default CardElement