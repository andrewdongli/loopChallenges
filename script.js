//prints odds 1-20
function odd(){
    for(var i = 1; i <= 20 ; i++){
        if (i%2 != 0) {
            console.log(i);
        }
    }
}
odd();

//decreasing multiples of 3 from 100 to 0
function multipleof3(){
    for(var i = 100; i >= 0; i--){
        if(i%3==0){
            console.log(i);
        }
    }
}
multipleof3();


//print the sequence 4, 2.5, 1, -0.5, -2, -3.5.
function sequence(){
    for(var i = 4; i >=-3.5; i-=1.5 ){
        console.log(i);
    }
}
sequence();

//sigma sum of 1 to 100
function sigma(){
    var sum=0;
    for(var i=1; i<=100;i++){
        sum += i;
    }
    console.log(sum);
}
sigma();


//factorial of 12
function factorial(){
    var sum=1;
    for(var i=1; i<=12; i++){
        sum = sum *i;
    }
    console.log(sum);
}
factorial();