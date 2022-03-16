function twoSum(nums,target){
    let numReturn = [];
    for(i=0;i<nums.length;i++){
        
        for(j=nums.length;j>-1;j--){
            if(nums[i]+nums[j] === target && i!=j){

                console.log(nums[i]+nums[j]);
                let index1 = i;
                let index2 = j; 
                    numReturn.push(index1,index2);
                   
                    
            }
            
        }
        
    }
    return numReturn.splice(0,2);
}