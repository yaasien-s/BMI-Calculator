let idealBmi = document.getElementById('IdealBmi');
let comment = document.getElementById('comment');

function myBMI(){
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;
	let a = document.getElementById('age').value;

	if(!w || !h || !a) {
		alert("Please fill in all fields")
		return;
	}
    let ans = w/(h**2);
    document.getElementById("outputBmi").innerHTML = `Your BMI is ${ans}`
    

    if(document.getElementById('gndr').value == 'male'){
        let ansMale = 0.5*ans + 11.5;
        idealBmi.innerHTML = `Ideal BMI is ${ansMale}`
    }else if(document.getElementById('gndr').value == 'female'){
        let ansMale = 0.5*ans + 0.03*age.value + 11;
        idealBmi.innerHTML = `Ideal BMI is ${ansMale}`
    }


    if(ans < 18){
        comment.innerText = "Underweight"
    }else if(ans >= 18 && ans < 25){
        comment.innerText = "Healthy"
    }else if(ans >= 25 && ans < 30){
        comment.innerText = "Overweight"
    }else{
        comment.innerText = "Obese"
    }
    
}

function disableInput(){
    if(document.getElementById('gndr').value == 'male'){
        document.getElementById('age').disabled = true;
    }else{
        document.getElementById('age').disabled = false;
    }
    
}


function clear_inputs(){
    let inputs = document.getElementsByClassName('input')

    for(x of inputs){
        x.value = '';
    }

    document.getElementById('gndr').value = 'empty';
    document.getElementById("outputBmi").innerHTML = "";
    idealBmi.innerText = "";
    comment.innerText = "";
}
