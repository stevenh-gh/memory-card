const Card = (props) => {
    const { char } = props;
    return (
        <div className="inline-block">
            <img src={char.url} />
            <div>{char.name}</div>
        </div>
    );
};
export default Card;
