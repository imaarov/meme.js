var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import displayImage from "./src/utils/canvas.js";
import saveImage from "./src/utils/saveMeme.js";
const OGMeme = [];
let i = 0;
let basePath = "./saved-posts/";
export function showMeme(OGMeme) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const meme of OGMeme) {
            yield new Promise((resolve) => setTimeout(resolve, 2000));
            yield displayImage(meme.path, meme.title);
        }
    });
}
export function saveMemes(memes) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const meme of memes.memes) {
            const fileName = `some${++i}.jpg`;
            try {
                yield saveImage(meme.url, fileName);
                OGMeme.push({
                    path: basePath + fileName,
                    title: meme.title,
                });
            }
            catch (error) {
                console.error(`Error downloading image: ${error}`);
            }
        }
        return OGMeme;
    });
}
