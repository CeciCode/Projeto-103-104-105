classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3Wka68qox/model.json", modelLoaded);
function modelLoaded() {
    console.log("Model loaded");
}Webcam.attach('#camera');
camera= document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
function takeSnapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("foto").innerHTML= '<img id="selfie_image" src= "'+data_uri+'"/>';
    });
}
function modelLoaded() {
    console.log("Model loaded");
}