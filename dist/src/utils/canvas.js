var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import terminalImage from "terminal-image";
import chalk from "chalk";
function displayImage(path_1, imageTitle_1) {
    return __awaiter(this, arguments, void 0, function* (path, imageTitle, imageWidth = 50) {
        const asciiImage = yield terminalImage.file(path, { width: `${imageWidth}%` });
        console.log(asciiImage);
        console.log(chalk.bgCyan(imageTitle));
    });
}
export default displayImage;
