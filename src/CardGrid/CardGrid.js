import { useState } from "react";
import Card from "../Card/Card";

const CardGrid = () => {
    const [charList, setCharList] = useState([
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/d/d3/Character_Eula_Thumb.png",
            name: "Eula",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/0/0a/Character_Ganyu_Thumb.png",
            name: "Ganyu",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/a/a4/Character_Hu_Tao_Thumb.png",
            name: "Hu Tao",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/f/f0/Character_Kaedehara_Kazuha_Thumb.png",
            name: "Kaedehara Kazuha",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/b/b9/Character_Xiao_Thumb.png",
            name: "Xiao",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/1/1f/Character_Yanfei_Thumb.png",
            name: "Yanfei",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/c/cb/Character_Yun_Jin_Thumb.png",
            name: "Yun Jin",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/0/02/Character_Diluc_Thumb.png",
            name: "Diluc",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/c/c2/Character_Zhongli_Thumb.png/",
            name: "Zhongli",
        },
    ]);

    const renderCard = (char) => {
        return <Card char={char} />;
    };
    return (
        <div className="text-center">
            <div className="card-row">
                {renderCard(charList[0])}
                {renderCard(charList[1])}
                {renderCard(charList[2])}
            </div>
            <div className="card-row">
                {renderCard(charList[3])}
                {renderCard(charList[4])}
                {renderCard(charList[5])}
            </div>
            <div className="card-row">
                {renderCard(charList[6])}
                {renderCard(charList[7])}
                {renderCard(charList[8])}
            </div>
        </div>
    );
};
export default CardGrid;
