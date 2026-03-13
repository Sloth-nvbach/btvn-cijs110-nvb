import './style.css'

const Card = (props) => {
    return (
        <div className="card">
            <div className="name">Tôi tên: {props.name}</div>
            <div className="class">Học lớp: {props.class}</div>
            <div className="dream">{props.dream}</div>
        </div>
    )
}

export default Card