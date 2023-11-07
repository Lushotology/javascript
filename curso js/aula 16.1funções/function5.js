function fatorial (n){ //versão recurssiva

    if (n == 1) {
        return 1


    } else {
        return n*fatorial(n-1)


    }



}

console.log(fatorial(5))
console.log(fatorial(50))
console.log(fatorial(500))
console.log(fatorial(1))

/*
    5!= 5*4*3*2*1
    5= 5 * 4!

    n! = n * (n-1)!
    1! = 1





*/