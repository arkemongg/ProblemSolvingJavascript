var romanToInt = function(s) {
    const roman = s.split('');
    for(let i = 0; i<roman.length;i++){  
        if(roman[i] === 'I'){
            roman[i]=1;
        }else if(roman[i] === 'V'){
            roman[i]=5;
        }else if(roman[i] === 'X'){
            roman[i]=10;
        }else if(roman[i] === 'L'){
            roman[i]=50;
        }else if(roman[i] === 'C'){
            roman[i]=100;
        }else if(roman[i] === 'D'){
            roman[i]=500;
        }else if(roman[i] === 'M'){
            roman[i]=1000;
        }
    }
    let sum = 0;
        for(let i=0;i<=roman.length-1;i++){
        if(roman[i]<roman[i+1]){
            sum -= roman[i];
        }else{
            sum+= roman[i];
        }
        }
    return sum;   
};