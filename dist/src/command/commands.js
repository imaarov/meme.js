var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import commandCollection from "../utils/commands";
const entryData = {
    name: "",
    userName: "",
    age: 0,
    prefrences: [],
};
const ageValidationHandler = (input) => {
    if (isNaN(+input)) {
        return false;
    }
    return true;
};
const prefrences = [
    { name: "dank", value: "dank" },
    { name: "NesFeW", value: "nsfw" },
];
const setup = () => __awaiter(void 0, void 0, void 0, function* () {
    entryData.name = yield commandCollection.input("enter your name");
    entryData.userName = yield commandCollection.input("enter your userName");
    entryData.age = +(yield commandCollection.input("enter your age", (input) => ageValidationHandler(input)));
    entryData.prefrences = yield commandCollection.select("enter your prefrences for your meme delivery", prefrences);
    return entryData;
});
export default setup;
