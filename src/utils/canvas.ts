import { spawn } from 'child_process';
import * as path from 'path';

async function displayImage(imagePath: string, imageTitle: string, imageWidth: number = 50): Promise<void> {
    console.log(`Displaying image: ${imageTitle}`);
    const fullPath = path.resolve(imagePath);
    const child = spawn('kitty', ['+kitten', 'icat', fullPath], { stdio: 'inherit' });

    child.on('close', (code: number) => {
        if (code !== 0) {
            console.log(`Child process exited with code ${code}`);
        }
    });
}

export default displayImage;

