//traverse source data, find the most 
let data_size = sourceData.length
let sample_data = []
for (var i =0; i < data_size; i++){
    if (sourceData[i].region == "华东" && sourceData[i].product == "手机") {
        sample_data.push(sourceData[i])
    }
}

function draw(){
    var canvas = document.getElementById('line');
    
    if (canvas.getContext){
        var ctx = canvas.getContext('2d');
        for (var j =0; j < 12; j++){
            ctx.beginPath();
            ctx.moveTo(20 * j, 600)
            ctx.lineTo(40 * j, 1000 - sample_data[j].sale)
        }
//        ctx.beginPath();       // Start a new path
//        ctx.moveTo(30, 50);    // Move the pen to (30, 50)
//        ctx.lineTo(150, 100);  // Draw a line to (150, 100)
//        ctx.stroke();          // Render the path

    }
    
    
}