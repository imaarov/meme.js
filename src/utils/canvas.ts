import terminalImage from "terminal-image";
import chalk from "chalk";

async function displayImage(path: string, imageTitle: string, imageWidth: number = 50): Promise<void> {
    const asciiImage: string = await terminalImage.file(path, { width: `${imageWidth}%` });
    console.log(asciiImage);
    console.log(chalk.bgCyan(imageTitle));
}

export default displayImage;


