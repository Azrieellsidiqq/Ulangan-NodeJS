function samplePromise(){
  return Promise.resolve("Azriel");
}

const name = await samplePromise();
console.info(name);