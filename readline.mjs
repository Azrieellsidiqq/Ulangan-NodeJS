import  ReadLine  from "readline";
import process from "process";

const input = ReadLine.createInterface({
  input : process.stdin,
  output : process.stdout,
});

input.question("Siapa nama anda? ", (name) => {
  console.info(`Halo ${name}`);
  input.close();
});