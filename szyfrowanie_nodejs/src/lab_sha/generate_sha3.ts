import * as fs from 'fs';
import * as path from 'path';
import { createHash } from 'crypto';

// Function to generate a SHA3 hash for the content of a file and match the length of the input file
function generateSHA3Shortcut(inputFilePath: string, outputFileName: string): void {
    if (!fs.existsSync(inputFilePath)) {
        console.error(`Error: Input file does not exist: ${inputFilePath}`);
        process.exit(1);
    }

    const fileContent = fs.readFileSync(inputFilePath);
    const chunkSize = 256; // Process the file in chunks of 256 bytes
    const outputBuffer = Buffer.alloc(fileContent.length); // Create a buffer to store the final hash

    for (let i = 0; i < fileContent.length; i += chunkSize) {
        const chunk = fileContent.subarray(i, i + chunkSize); // Use subarray instead of slice
        const hash = createHash('sha3-256').update(chunk).digest(); // Hash the chunk
        hash.copy(outputBuffer, i); // Copy the hash into the output buffer
    }

    const outputFilePath = path.join(__dirname, "..", "assets", outputFileName);
    fs.writeFileSync(outputFilePath, outputBuffer); // Save the final hash to the output file

    console.log(`SHA3 hash saved as binary to: ${outputFilePath}`);
}

// Example usage
const args = process.argv.slice(2);

if (args.length < 2) {
    console.error('Usage: node generate_sha3.js <inputFilePath> <outputFileName>');
    process.exit(1);
}

const inputFilePath = path.resolve(args[0]);
const outputFileName = args[1];

generateSHA3Shortcut(inputFilePath, outputFileName);