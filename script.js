const videoEle = document.getElementById("video");
const button = document.getElementById("button");

// prompt to select media stream, pass to video element, then play
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEle.srcObject = mediaStream;
    videoEle.onloadedmetadata = () => {
      videoEle.play();
    };
  } catch (err) {
    console.log(err);
  }
};

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // start pic in pic
  await videoEle.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

// on load
selectMediaStream();
