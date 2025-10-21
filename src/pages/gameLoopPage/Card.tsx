import handAreaStyles from "./styles/handArea.module.css";

export type CardData = {
    name: string,
    image: string,
    desc: string,
}

function CardElement() {
    return (
        <div className={handAreaStyles.card}>
            <p className = {handAreaStyles.cardText}>
                Merge Sort
            </p>
        </div>
    )
}

export default CardElement