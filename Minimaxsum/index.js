function MinMaxSum(a,b,c,d,e,value){
    
    var arr=[a,b,c,d,e]
    for(i=0;i<arr.length;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                tmp=arr[i]
                arr[i]=arr[j]
                arr[j]=tmp
            }
        }
    }
    ///MinTotal
    var minTotal=0
    for(i=0;i<arr.length-1;i++){
        
        minTotal+=arr[i]
        
    }
    //MaxTotal
    var maxTotal=0
    for(i=1;i<arr.length;i++){
        
        maxTotal+=arr[i]
       
    }
//Sum
var k=0
    for(i=0;i<arr.length;i++){
        if(arr[i]!==value){
            arr[k]=arr[i]
            k++
        }
     
    }

    var totalExceptValue=0
    for(i=0;i<arr.length;i++){
        totalExceptValue+=arr[i]
    }
    totalExceptValue=totalExceptValue-arr[arr.length-1]

 
    console.log(`Giá trị min của Array=${minTotal} và giá trị max của Array=${maxTotal}`)

    console.log(`Giá trị total của Array trừ phần tử ${value}=${totalExceptValue}`)
}

MinMaxSum(1,2,3,4,5,5)