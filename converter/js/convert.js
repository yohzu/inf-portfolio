function converter() {
    const input = document.getElementById("input").value;
    const inType = document.getElementById("inType").value;
    const outType = document.getElementById("outType").value;

    if (inType == "bin") {
        if (outType == "bin") {
            output = input;
        }
        else if (outType == "dec") {
            output = parseInt(input, 2);
        }
        else if (outType == "hex") {
            output = parseInt(input, 2).toString(16).toUpperCase();
        }
        else {
            alert("error:", input, inType, outType)
        }
    }

    if (inType == "dec") {
        if (outType == "bin") {
            output = Number(input).toString(2);
        }
        else if (outType == "dec") {
            output = input;
        }
        else if (outType == "hex") {
            output = Number(input).toString(16).toUpperCase();
        }
        else {
            alert("error:", input, inType, outType)
        }
    }

    if (inType == "hex") {
        if (outType == "bin") {
            output = parseInt(input, 16).toString(2).padStart(8, '0');
        }
        else if (outType == "dec") {
            output = parseInt(input, 16).toString(10);
        }
        else if (outType == "hex") {
            output = input.toUpperCase();
        }
        else {
            alert("error:", input, inType, outType)
        }
    }
    
    document.getElementById("output").innerText = output;
}

function clickToCopy() {
    navigator.clipboard.writeText(output);
    new Notification("Copied output " + output + " to clipboard.");
}

Notification.requestPermission();