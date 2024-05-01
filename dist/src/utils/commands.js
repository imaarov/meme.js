var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { input, checkbox } from "@inquirer/prompts";
const inputEntry = (msg_1, ...args_1) => __awaiter(void 0, [msg_1, ...args_1], void 0, function* (msg, validateHandler = () => true) { return yield input({ message: msg, validate: validateHandler }); });
const selectorEntry = (title, choices) => __awaiter(void 0, void 0, void 0, function* () {
    return yield checkbox({
        message: title,
        choices: choices,
    });
});
const commandCollection = {
    input: inputEntry,
    select: selectorEntry,
};
export default commandCollection;
