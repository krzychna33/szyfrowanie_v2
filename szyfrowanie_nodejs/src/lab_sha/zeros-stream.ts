import * as fs from 'fs';
import * as path from 'path';

// Function to generate a binary file filled with zeros
function generateZerosFile(filePath: string, fileSize: number): void {
    const buffer = Buffer.alloc(fileSize, 0); // Create a buffer filled with zeros
    console.log(buffer)
    fs.writeFileSync(filePath, buffer); // Write the buffer to the file
    console.log(`File created: ${filePath} (${fileSize} bytes)`);
}

// Example usage
const args = process.argv.slice(2);

if (args.length < 2) {
    console.error('Usage: node zeros-stream.js <outputFilePath> <fileSizeInBytes>');
    process.exit(1);
}

const outputFilePath = path.join(__dirname, "..", "assets", args[0]);
const fileSize = parseInt(args[1], 10);

if (isNaN(fileSize) || fileSize <= 0) {
    console.error('Error: fileSize must be a positive integer.');
    process.exit(1);
}

generateZerosFile(outputFilePath, fileSize);