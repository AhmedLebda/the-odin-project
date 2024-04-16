import axios from "axios";
import uniqid from "uniqid";
const checkGameOver = (id, images) => {
    const clickedImage = images.find((img) => img.id === id);
    if (clickedImage.clicked) {
        console.log("Game Over");
        return true;
    }
};

const getImages = (options) => {
    return axios.request(options).then((response) =>
        response.data.images.map((src) => ({
            id: uniqid(),
            source: src,
            clicked: false,
        }))
    );
};

const shuffledArr = (array) => array.sort(() => 0.5 - Math.random());

const checkRoundWon = (images) => images.every((image) => image.clicked);

export default { checkGameOver, getImages, shuffledArr, checkRoundWon };
