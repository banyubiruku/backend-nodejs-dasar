import fs from "fs/promises";

const buffer = await fs.readFile("06-file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Selamat belajar node js");
