var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { saveMemes, showMeme } from "./meme.js";
import redditMemes from "./src/models/redditModel.js";
(() => __awaiter(void 0, void 0, void 0, function* () {
    const memes = yield redditMemes();
    // Check if memes is null or undefined
    if (memes == null) {
        console.error("Failed to fetch memes from Reddit.");
        return;
    }
    const memeCollection = yield saveMemes(memes);
    yield showMeme(memeCollection);
}))();
