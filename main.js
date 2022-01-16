video ="";
objects = [];
status = "";
video = "";

function preload() {
    video= createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas= createCanvas(480, 380);
}

function draw() {
    image(video, 0, 0, 480, 380);
    if(status !="")
    {
        objectDetecter.detect(video, gotReselt);
        for (i = 0; 1 < objects.length; 1++) {
            document.getElementById("status").innerHTML= "Status : Objects Detected"
            document.getElementById("number_of_objects").innerHTML = "Numbrt of objects detected are : "+ objects.length;
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x);
        }

    }
}

function start()
{
    objectDetecor = ml5.objectDetecter('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);

    function gotResult(error, results) {
        if (error) {
            console.log(error);
        }
        console.log(results);
        objects = results;
    }
