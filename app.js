let screen = document.getElementById('screenDisplay');
let resultScreen = document.getElementById('resultDisplay')

function displayNum(val){

    screen.value += val;
}
function deleteALL(){
    screen.value = '';
    resultScreen.value = '';

}
function delNum(){
    screen.value = screen.value.slice(0,-1);
}
function result (){
   
    
    try {
        if(screen.value == ''){
            resultScreen.value = '';
        }else{  
            let screenValue = screen.value;
            let resultValue = math.evaluate(screenValue);
            resultScreen.value = resultValue;
        }
      
    } catch (error) {
       
    }
    
}