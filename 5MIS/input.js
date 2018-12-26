function edit(){
   let table = document.getElementById("table");
    console.log("table: ", table)
    let tds = table.querySelectorAll("td");
    console.log("tds: ", tds)
    for (let i = 0; i < tds.length; i++) {
        let td = tds[i];
        
        td.addEventListener("mouseenter", function (e) {
            console.log(td)
            let oEvent = e || event;
            let target = e.target || e.srcElement;
            console.log("target: ", target)
            
            var img = document.createElement("img");
            img.src = "edit.png";
            img.className="img";
            target.appendChild(img)
//            target.removeChild(img)

        });
        
        td.addEventListener("mouseleave", function (e) {
            let target = e.target || e.srcElement;
            var img = td.querySelectorAll("img")[0];
            console.log(img)
            target.removeChild(img)

        });
        
        td.addEventListener("click", (e)=>{
           
            let target = e.target || e.srcElement;
            let input =  document.createElement("input");
            target.appendChild(input)
            
            input.addEventListener('keypress', (e)=>{
                var code = e.which || e.keyCode;
                if (code == 13){
                    console.log("enter")
                    console.log(input.value)
                    target.innerHTML = input.value;
                    sourceData.get()
                    write_table()
                } else{
                    console.log("enter not working")
                    return false;
                }
            })
            
        });
        
        
        

    }
    
}
