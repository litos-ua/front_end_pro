const fs = require('fs');
const path = require('path');

function readDirectoryStructure(dir) {
    const result = [];

    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const isDirectory = fs.statSync(filePath).isDirectory();

        if (file !== 'node_modules') {
            result.push({
                name: file,
                isDirectory,
                path: filePath,
                children: isDirectory ? readDirectoryStructure(filePath) : undefined,
            });
        }
    });

    return result;
}

const currentDirectory = process.cwd(); // Get the current working directory

const directoryStructure = readDirectoryStructure(currentDirectory);

console.log(JSON.stringify(directoryStructure, null, 2));

