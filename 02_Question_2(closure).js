function a()
{ var s=10;
    function b(){
        var t=20
        console.log(s)
        function c(){
            var u=30
                console.log(++s)
                console.log(t)
            function d()
            {
                console.log(++s)
                 //console.log(s++)
                console.log(++t)
                console.log(++u)
            }
           return d;
        }
        return c();
    }
    return b();
}
var first = a();
//console.log(first);
//console.log(a);
first()
//first()
// second()
// third()