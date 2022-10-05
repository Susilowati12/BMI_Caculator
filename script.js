let bmi=document.querySelector("#bmi")
bmi.addEventListener("submit",(Event) => {
    Event.preventDefault()
    let weight=parseInt(document.querySelector("#weight").value);
    let height=parseInt(document.querySelector("#height").value);
    let result=document.querySelector("#output");
    let height_status=false, weight_status=false;

    if(height===""||isNaN(height)||(height<= 0)){
        document.getElementById("height_error").innerHTML="Height must be a number"
    }else{
        document.getElementById("height_error").innerHTML="";
        height_status=true;
     }
    if(isNaN(weight===""||weight)||(weight<=0)){
        document.getElementById("weight_error").innerHTML="Weight must be a number"
     }else{
        document.getElementById("weight_error").innerHTML="";
         weight_status=true;
     }
     if(weight_status && height_status){
        let bmi= (weight/((height/100)*(height/100)).toFixed(2)).toFixed(2);
        if(bmi < 18.5){
            result.innerHTML= "Your BMI is "+ bmi + " which means You are Underweight";
        }else if(bmi >= 18.5 && bmi < 24.9){
            result.innerHTML= "Your BMI is " + bmi + " which means You are Normal";
        }else if(bmi >= 25 && bmi < 29.9){
            result.innerHTML="Your BMI is " + bmi + " which means You are Overweight";
        }else if(bmi >= 30){
            result.innerHTML="Your BMI is " + bmi + " which means You are Obesity";
        }else{
            alert("The form has error");
            result.innerHTML="";
        }
        }
}
)