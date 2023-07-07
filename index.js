const Moralis = require("moralis").default; //importing
const fs = require("fs");
require("dotenv").config();


const fileUploads = [
     {
          path: "images.jpg", // to store it on ipfs hash
          content:fs.readFileSync("./images.jpg", {encoding: "base64"}) //content to store in ipfs
     }
]


async function uploadToIpfs(){
     await Moralis.start({
          apiKey:process.env.MORALIS_KEY
     })

     const response = await Moralis.EvmApi.ipfs.uploadFolder({
         abi: fileUploads 
     })

     console.log(response.result)
}

uploadToIpfs();