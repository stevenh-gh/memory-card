import { useEffect, useState } from "react";
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
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/c/c6/Character_Amber_Thumb.png",
            name: "Amber",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/7/72/Character_Barbara_Thumb.png",
            name: "Barbara",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/7/7b/Character_Bennett_Thumb.png",
            name: "Bennett",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/5/56/Character_Gorou_Thumb.png",
            name: "Gorou",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/8/89/Character_Jean_Thumb.png",
            name: "Jean",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Mona_Thumb.png",
            name: "Mona",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/5/52/Character_Raiden_Shogun_Thumb.png",
            name: "Raiden Shogun",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/8/8d/Character_Venti_Thumb.png",
            name: "Venti",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/1/1d/Character_Razor_Thumb.png",
            name: "Razor",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/a/ab/Character_Noelle_Thumb.png",
            name: "Noelle",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/d/d5/Character_Qiqi_Thumb.png",
            name: "Qiqi",
        },
        {
            url: "https://static.wikia.nocookie.net/gensin-impact/images/0/00/Character_Albedo_Thumb.png",
            name: "Albedo",
        },
    ]);

    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [clicked, setClicked] = useState([]);

    const handleClick = (e) => {
        setCharList(
            charList
                .map((val) => ({ val, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ val }) => val)
        );
        const clickedChar = e.target.nextSibling.innerText;
        if (!clicked.includes(clickedChar)) {
            setScore(score + 1);
            setClicked(clicked.concat([clickedChar]));
        } else {
            setScore(0);
            setClicked([]);
        }
    };

    useEffect(() => {
        if (score > bestScore) {
            setBestScore(score);
        }
    }, [score, bestScore]);

    const renderCard = (char) => {
        return <Card char={char} onClick={handleClick} />;
    };

    return (
        <>
            <div>Score: {score}</div>
            <div>Best score: {bestScore}</div>
            <div className="text-center">
                <div className="card-row">
                    {renderCard(charList[0])}
                    {renderCard(charList[1])}
                    {renderCard(charList[2])}
                    {renderCard(charList[3])}
                    {renderCard(charList[4])}
                    {renderCard(charList[5])}
                    {renderCard(charList[6])}
                </div>
                <div className="card-row">
                    {renderCard(charList[7])}
                    {renderCard(charList[8])}
                    {renderCard(charList[9])}
                    {renderCard(charList[10])}
                    {renderCard(charList[11])}
                    {renderCard(charList[12])}
                    {renderCard(charList[13])}
                </div>
                <div className="card-row">
                    {renderCard(charList[14])}
                    {renderCard(charList[15])}
                    {renderCard(charList[16])}
                    {renderCard(charList[17])}
                    {renderCard(charList[18])}
                    {renderCard(charList[19])}
                    {renderCard(charList[20])}
                </div>
            </div>
        </>
    );
};
export default CardGrid;
