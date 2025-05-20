import * as fs from 'fs';
import * as path from 'path';

/**
 * Cuts a binary file to a specified number of bytes and writes the result to a new file.
 * @param inputPath Path to the input binary file
 * @param outputPath Path to the output file
 * @param numBytes Number of bytes to keep
 */
function cutFile(inputPath: string, outputPath: string, numBytes: number) {
    if (!fs.existsSync(inputPath)) {
        throw new Error(`Input file does not exist: ${inputPath}`);
    }
    const buffer = fs.readFileSync(inputPath);
    console.log('Buffer size:', buffer.length);
    if (numBytes > buffer.length) {
        throw new Error(`Number of bytes to cut exceeds file size: ${buffer.length}`);
    }
    const cutBuffer = buffer.slice(0, numBytes);
    fs.writeFileSync(outputPath, cutBuffer);
    console.log(`Wrote ${cutBuffer.length} bytes to ${outputPath}`);
}

function generateOneByteFile(outputPath: string) {
    const buffer = Buffer.alloc(1); // Create a buffer with one byte
    const bufferStr = buffer.toString('binary');
    console.log(`Buffer string:`, bufferStr);
}

// Example usage:
// node dist/file-cutter.js input.bin output.bin 1024
if (require.main === module) {
    generateOneByteFile('output.bin');
    const [,, input, output, bytes] = process.argv;
    if (!input || !output || !bytes) {
        console.error('Usage: node dist/file-cutter.js <input> <output> <numBytes>');
        process.exit(1);
    }
    cutFile(input, output, parseInt(bytes, 10));
}

