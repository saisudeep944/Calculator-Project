func=()=>{
    var a=parseInt(prompt("Enter the a"));
    var b=parseInt(prompt("enter the b"));
    var c=parseInt(prompt("enter the c"));
    if(a>b && a>c)
    {
        console.log(a);
    }
    else if(b>a && b>c)
    {
        console.log(b);
    }
    else{
        console.log(c)
    }
    if(a<b && a<c)
    {
        console.log(a);
    }     
    else if(b<a && b<c)
    {
        console.log(b);
    }
    else{
        console.log(c)
    }
}
func2=()=>{
    for(var i=0;i<5;i++)
    {
        for(var j=0;j<5;j++)
        {
             console.log("*");
        }
        
    }
}
add=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent=(a+b);
    
}
sub=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent=(a-b);
    
}
mul=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent=(a*b);
    
}
div=()=>
{
    var a=parseInt(document.getElementById("n1").value);
    var b=parseInt(document.getElementById("n2").value);
    document.getElementById("res").textContent=(a/b);
    
}


