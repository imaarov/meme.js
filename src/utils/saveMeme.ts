import fs from "fs";
import https from "https";
import path from "path";

//const imageUrl: string = "https://i.redd.it/3h6oek9tkvwc1.png";
const basePath: string = "./saved-posts/";

const saveImage = async (url: string, fileName: string): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
        const directory: string = path.dirname(basePath + fileName);
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        const fileStream = fs.createWriteStream(basePath + fileName);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(fileStream);
                fileStream.on("finish", () => {
                    fileStream.close();
                    console.log(`Image downloaded successfully to: ${basePath}${fileName}`);
                    resolve(); // Resolve the promise when download is complete
                });
            } else {
                console.error(
                    `Failed to download image. Status code: ${response.statusCode}`
                );
                reject(`Failed to download image. Status code: ${response.statusCode}`);
            }
        }).on("error", (error) => {
            console.error(`Error downloading image: ${error.message}`, error);
            reject(`Error downloading image: ${error.message}`);
        });
    });
};

export default saveImage;

