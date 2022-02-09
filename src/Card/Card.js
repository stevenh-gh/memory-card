const Card = (props) => {
    const { url } = props;
    return (
        <>
            <img className="inline-block" src={url} />
        </>
    );
};
export default Card;
