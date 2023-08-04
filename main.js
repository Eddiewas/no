function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,300);
    canvas.position(600,200)
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);    
}

function modelLoaded() {
    console.log('POse net is on')

}

function gotPoses(error,result) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(result);
    }
}
function draw() {
    background("darkred")
    
}