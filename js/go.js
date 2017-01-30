
/*function fib(fibnum){
    var num;
    if (fibnum>=2){
        num=fib(fibnum-1)+fib(fibnum-2);
    }
    else{
        num=fibnum;
    }
    return numf.innerHTML= num;
}
function writeResult() {
  fibnum = Number(document.getElementById('fibnum').value);
  fib(fibnum);
  numf.innerHTML= num;
};*/
//var btn;
btn.getElementById('click' , function(e){
   e.preventDefault();
//    var fibnum;
    var myfibnum = fibnum.value;
    var myNumber = fib(myfibnum);
    function fib(n){
    if (n>=1){
       myfibnum=fib(n-1)+fib(n-2);
        }
    else{
        myfibnum=n;
    }
}
  //   var numf;
   numf.innerHTML = myNumber;
});  





/*function fib(n){
var a=1,b=1;
for (var i=3; i<=n;i++ ){
var c=a+b;
a=b;
b=c;
}
return b ;
}*/