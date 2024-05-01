import commandCollection from "../utils/commands";

interface EntryData {
    name: string;
    userName: string;
    age: number;
    prefrences: string[];
}

const entryData: EntryData = {
    name: "",
    userName: "",
    age: 0,
    prefrences: [],
};

const ageValidationHandler = (input: string): boolean => {
    if (isNaN(+input)) {
        return false;
    }
    return true;
};

const prefrences = [
    { name: "dank", value: "dank" },
    { name: "NesFeW", value: "nsfw" },
];

const setup = async (): Promise<EntryData> => {
    entryData.name = await commandCollection.input("enter your name");
    entryData.userName = await commandCollection.input("enter your userName");
    entryData.age = +await commandCollection.input(
        "enter your age",
        (input: string) => ageValidationHandler(input)
    );
    entryData.prefrences = await commandCollection.select(
        "enter your prefrences for your meme delivery",
        prefrences
    );
    return entryData;
};

export default setup;

