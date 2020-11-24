var input = document.getElementById('inputfile');
var output = document.getElementById('output');

function handleFileSelect()
{  
    if (input.files[0]) {
        var file = input.files[0];           
        var fr=new FileReader(); 
        fr.onload = function()
        { 
            output.appendChild(document.createTextNode(fr.result));
            var editor = new MediumEditor('.editable', {
                buttonLabels: false,
            });
            output.style.display = "block";
            console.log(fr.result)
        } 
            
        // fr.readAsDataURL(file); 
        fr.readAsText(file); 
    }
    else {
        console.log("No file fetched.")
    }
}