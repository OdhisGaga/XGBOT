"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { gaga } = require("../midush/gaga");

gaga(
  { nomCom: "ping", reaction: "✈️", nomFichier: __filename },
  async (dest, zk, commandeOptions) => {
    console.log("Ping command triggered!");

    let captionText = '*GAGA XBOT \n\nXGaga\n\n> powered by Gaga! ';

    let videoUrl = "https://files.catbox.moe/njb2if.mp4";
    let audioUrl = "https://files.catbox.moe/cpjbnl.mp3";

    // Send the video with the caption first
    await zk.sendMessage(dest, {
      video: { url: videoUrl },
      caption: captionText,
    });

    // Wait a few seconds before sending the audio
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Send the audio file without forcing it to play directly
    await zk.sendMessage(dest, {
      audio: { url: audioUrl },
      mimetype: "audio/mp3", // MIME type for MP3 file
      title: "Music Playing",
      caption: "Click to play your favorite track!" // Prompt user to click and play
    });

    console.log("Video and audio sent successfully!");
  }
);

console.log("Test complete!");
