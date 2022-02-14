const Card = (props) => {
    const { char, onClick } = props;
    return (
        <div
            className="inline-block border-2 border-black rounded m-1"
            onClick={onClick}
        >
            <img src={char.url} />
            <div>{char.name}</div>
        </div>
    );
};
export default Card;
