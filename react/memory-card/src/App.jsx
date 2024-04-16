import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Score from "./components/Score";
import utils from "./utils";

const options = {
    method: "GET",
    url: "https://any-anime.p.rapidapi.com/v1/anime/png/9",
    headers: {
        "X-RapidAPI-Key": "72a6df55c8mshafdfb0e7fc66609p1d82eejsn331f4fe48de1",
        "X-RapidAPI-Host": "any-anime.p.rapidapi.com",
    },
};

function App() {
    // --> States

    const [images, setImages] = useState([]);
    const [currentScore, setCurrentScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [round, setRound] = useState(1);
    const [status, setStatus] = useState("loading");

    // --> Effects

    useEffect(() => {
        let ignore = false;

        utils
            .getImages(options)
            .then((data) => {
                if (!ignore) {
                    setImages(data);
                }
            })
            .then(() => setStatus("loaded"))
            .catch((error) => console.error(error));

        () => {
            ignore = true;
        };
    }, []);

    // --> Event handlers
    const onImageClick = (id) => {
        if (utils.checkGameOver(id, images)) {
            if (currentScore > highScore) {
                setHighScore(currentScore);
            }
            setCurrentScore(0);
            setRound(1);
            setStatus("loading");
            utils
                .getImages(options)
                .then((data) => setImages(data))
                .then(() => setStatus("loaded"));
        } else {
            setCurrentScore((prevScore) => prevScore + 1);

            const newImages = images.map((img) =>
                img.id === id ? { ...img, clicked: true } : img
            );
            setImages(newImages);

            if (utils.checkRoundWon(newImages)) {
                console.log("All images clicked");
                setStatus("loading");
                setRound((prevRound) => prevRound + 1);
                utils
                    .getImages(options)
                    .then((data) => setImages(data))
                    .then(() => setStatus("loaded"));
            }

            setImages((prevImages) => {
                const shuffledImages = utils.shuffledArr([...prevImages]);
                return [...shuffledImages];
            });
        }
    };

    return (
        <div className="grid  gap-4 grid-rows-main  min-h-screen p-4 justify-center">
            <Header />
            <main className="w-[50rem] grid grid-cols-main  gap-4">
                {status === "loading" ? (
                    <div className="capitalize grid place-items-center text-5xl font-extrabold text-slate-900 bg-slate-200 rounded-lg">
                        Loading...
                    </div>
                ) : (
                    <MainContent data={images} onImageClick={onImageClick} />
                )}
                <Score
                    currentScore={currentScore}
                    highScore={highScore}
                    round={round}
                />
            </main>
        </div>
    );
}

export default App;
