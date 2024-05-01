import displayImage from "./src/utils/canvas.js";
import saveImage from "./src/utils/saveMeme.js";

const OGMeme: { path: string; title: string }[] = [];

let i: number = 0;
let basePath: string = "./saved-posts/";

export async function showMeme(OGMeme: { path: string; title: string }[]): Promise<void> {
    for (const meme of OGMeme) {
        await new Promise<void>((resolve) => setTimeout(resolve, 2000));
        await displayImage(meme.path, meme.title);
    }
}
export async function saveMemes(memes: { memes: { url: string; title: string }[] }): Promise<{ path: string; title: string }[]> {
    for (const meme of memes.memes) {
        const fileName: string = `some${++i}.jpg`;
        try {
            await saveImage(meme.url, fileName);
            OGMeme.push({
                path: basePath + fileName,
                title: meme.title,
            });
        } catch (error) {
            console.error(`Error downloading image: ${error}`);
        }
    }
    return OGMeme;
}
