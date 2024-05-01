import chalk from "chalk";

interface Meme {
    subreddit: string;
    title: string;
    url: string;
}

interface MemesResponse {
    count: number;
    memes: Meme[];
}

async function fetchMemes(): Promise<MemesResponse | null> {
    try {
        const response = await fetch("https://meme-api.com/gimme/2");
        const data: MemesResponse = await response.json();
        return data;
    } catch (error) {
        console.error(chalk.bgRed.black("Error fetching memes:"), error);
        return null;
    }
}

async function redditMemes(): Promise<MemesResponse | null> {
    const memeData = await fetchMemes();
    if (memeData) {
        const memesObject: MemesResponse = {
            count: memeData.count,
            memes: memeData.memes.map((meme) => ({
                subreddit: meme.subreddit,
                title: meme.title,
                url: meme.url,
            })),
        };
        console.log(chalk.bgCyan("gotcha your memes"));
        return memesObject;
    } else {
        console.log(chalk.red("Failed to fetch memes"));
        return null;
    }
}

export default redditMemes;


