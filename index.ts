import { saveMemes, showMeme } from "./meme.js";
import redditMemes from "./src/models/redditModel.js";

(async (): Promise<void> => {
    const memes = await redditMemes();

    // Check if memes is null or undefined
    if (memes == null) {
        console.error("Failed to fetch memes from Reddit.");
        return;
    }

    const memeCollection = await saveMemes(memes);
    await showMeme(memeCollection);
})();
