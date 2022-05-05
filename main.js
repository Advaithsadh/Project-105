Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    image_quality:90
})
camera = document.getElementById("camera")

function startcam(){
   Webcam.attach(camera)
}

function takepic(){
    Webcam.snap(function (data_url){
document.getElementById("result").innerHTML = "<img id='takenimg' src='"+data_url+"'></img>"
    })
}

console.log("ml5 version:", ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/dI95F6Zi9/model.json',modelLoaded)

function modelLoaded(){
    console.log("model Loaded")
  }
  
  function check(){
    img = document.getElementById("takenimg")
    classifier.classify(img,gotResult)
  }
  
  function gotResult(error,results){
    if(error){
      console.error(error)
    }else{
      console.log(results)
      document.getElementById("obj").innerHTML = results[0].label
      document.getElementById("acc").innerHTML = results[0].confidence.toFixed(3)
    }
  }