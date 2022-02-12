const Card = (props) => {
    const { char, onClick } = props;
    return (
        <div className="inline-block" onClick={onClick}>
            <img src={char.url} />
            <div>{char.name}</div>
        </div>
    );
};
export default Card;
