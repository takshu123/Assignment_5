

function first(arr,value){
    let arr2=[];
    if(value<1){
        return [];

    }
    else if(value==undefined){
        return arr[0];

    }
 
    else{
        if(value>arr.length){
            value=arr.length;

        }
     for(let i=0;i<value;i++){
        arr2[i]=arr[i];

     }
     return arr2;

    }

}

console.log(first([7, 9, 0, -2],-3));