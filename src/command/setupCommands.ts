import commandCollection from "../utils/commands";

const entryData: { name: string; age: string } = {
    name: "",
    age: ""
};
const preference: {} = {};

async function setup(): Promise<void> {
    entryData.name = await commandCollection.input("enter your name:");
    entryData.age = await commandCollection.input("enter your age:");
    console.dir(entryData);
}

export default setup;

