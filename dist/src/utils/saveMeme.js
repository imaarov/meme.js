var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from "fs";
import https from "https";
import path from "path";
const imageUrl = "https://i.redd.it/3h6oek9tkvwc1.png";
const basePath = "./saved-posts/";
const saveImage = (url, fileName) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const directory = path.dirname(basePath + fileName);
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
            }
            else {
                console.error(`Failed to download image. Status code: ${response.statusCode}`);
                reject(`Failed to download image. Status code: ${response.statusCode}`);
            }
        }).on("error", (error) => {
            console.error(`Error downloading image: ${error.message}`, error);
            reject(`Error downloading image: ${error.message}`);
        });
    });
});
export default saveImage;
//saveImage(imageUrl, "me_irl0.jpg");
