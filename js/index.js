/*for (var i = 10; i >=0; i--) {
    document.write(i);
    document.write('<br>');
}*/
/*for (var i = 0; i<=4; i++) {
    document.write(2*i+2);
    document.write('<br>');
}*/
/*var i=0;
while ( i <= 10){
    document.write(i + <br>);
    i++;
}*/
//var stuAge =[20, 32, 28, 18];
//stuAge[4] = 33;
//document.write(stuAge.length);

//var students={
//  ivan:33,
//sveta:66
//}
//document.write(students['ivan']);

var vany={
    name:'ivan',
    age:'30',
    say: function(){
        document.write('my name is ' +this.name
        + ' my age is '+ this.age + <br>);
    }
    return this;
}
//vany.say();

function Student(name, age){
    this.name = age;
    this.say = function(){
        document.write('my name is ' +this.name
        + ' my age is '+ this.age);
    }
}
var petro = new Student ('petro' , 29 );
petro.say();