const catApiURL = "https://api.thecatapi.com/v1/images/search";


function welcomePicture(){
fetch(catApiURL)
  .then((response) => response.json())
  .then((imageBlob) => {
    console.log(imageBlob)
    document.getElementById(
      "catPic"
    ).innerHTML = `<img src=${imageBlob[0].url} style="width:500px;height:400px;" onclick=welcomePicture() alt="No Cats Today :("/>`;
  });
}

window.onload = welcomePicture