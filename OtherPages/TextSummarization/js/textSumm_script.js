var input = document.getElementById('inputfile');
var output = document.getElementById('output');
var link = document.getElementById('link');

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
            link.style.opacity = "1";
            // console.log(fr.result)
        } 

        // for download file
        objectURL = URL.createObjectURL(file);
        link.download = file.name; // this name is used when the user downloads the file
        // console.log(link.download);
        link.href = objectURL;
            
        fr.readAsText(file); 
    }
    else {
        console.log("No file fetched.")
    }
}