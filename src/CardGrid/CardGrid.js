import Card from "../Card/Card";

const CardGrid = () => {
    const renderCard = (url) => {
        return <Card url={url} />;
    };
    return (
        <>
            <div className="card-row">
                {renderCard(
                    "https://static.wikia.nocookie.net/gensin-impact/images/d/d3/Character_Eula_Thumb.png"
                )}
                {renderCard(
                    "https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Character_Ganyu_Thumb.png"
                )}
                {renderCard(
                    "https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Character_Hu_Tao_Thumb.png"
                )}
            </div>
            <div className="card-row">
                {renderCard(
                    "https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Character_Kaedehara_Kazuha_Thumb.png"
                )}
                {renderCard(
                    "https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Xiao_Thumb.png"
                )}
                {renderCard(
                    "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Character_Yanfei_Thumb.png"
                )}
            </div>
            <div className="card-row">
                {renderCard(
                    "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Character_Yun_Jin_Thumb.png"
                )}
                {renderCard(
                    "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Character_Diluc_Thumb.png"
                )}
                {renderCard(
                    "https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Character_Zhongli_Thumb.png/"
                )}
            </div>
        </>
    );
};
export default CardGrid;
