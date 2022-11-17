import '../styles/card.css'

function Card(props) {
    return (
        <div id={props.title} className="card" onClick={props.handleChange}>
            <img src={props.image} alt={props.title}/>
            <p>{props.title}</p>
        </div>
    )
}

export default Card;