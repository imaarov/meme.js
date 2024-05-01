var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import chalk from "chalk";
function fetchMemes() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://meme-api.com/gimme/2");
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error(chalk.bgRed.black("Error fetching memes:"), error);
            return null;
        }
    });
}
function redditMemes() {
    return __awaiter(this, void 0, void 0, function* () {
        const memeData = yield fetchMemes();
        if (memeData) {
            const memesObject = {
                count: memeData.count,
                memes: memeData.memes.map((meme) => ({
                    subreddit: meme.subreddit,
                    title: meme.title,
                    url: meme.url,
                })),
            };
            console.log(chalk.bgCyan("gotcha your memes"));
            return memesObject;
        }
        else {
            console.log(chalk.red("Failed to fetch memes"));
            return null;
        }
    });
}
export default redditMemes;
