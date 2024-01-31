const txtbox = document.getElementById('txtbox');
const toF = document.getElementById('toF');
const toC = document.getElementById('toC');
const res = document.getElementById('res');
let temp;

function convert()
{
    if(toF.checked)
    {
        temp = (txtbox.value * 9/5) + 32;
        res.textContent = temp + "°F";
    }
    else if(toC.checked)
    {
        temp = (Number  (txtbox.value) - 32) * 5/9;
        res.textContent = temp + "°C";

    }
    else{
        res.textContent = "Select a unit";
    }
}