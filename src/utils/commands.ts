import { input, checkbox, Separator } from "@inquirer/prompts";
const inputEntry = async (msg: string, validateHandler: (input: string) => boolean = () => true): Promise<string> =>
    await input({ message: msg, validate: validateHandler });

type Choice<T> = {
    name: string;
    value: T;
};
type Choices<T> = readonly (Separator | Choice<T>)[];


const selectorEntry = async (title: string, choices: Choices<string>): Promise<string[]> =>
    await checkbox({
        message: title,
        choices: choices,
    });

const commandCollection = {
    input: inputEntry,
    select: selectorEntry,
};

export default commandCollection;
