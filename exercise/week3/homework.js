//var util = require("util")
var log = console.log

// function f (x) {return -1 * (x*x + 3*x + 5)}
// function f (x) {return -1 * (x*x*x*x*x*x - x*x*x*x + x*x - 1)}
// function f (x) {return Math.sin(x)}
//function f (x) {return x*x + 4*x+8}
function f (x) {return (x*x*x*x - 10*x*x*x + 20*x*x + 5*x + 7)}

var dx = 0.01

function hill_climbing(f, x) {
    while(true) {
        log("f(%s)=%s", x.toFixed(4), f(x).toFixed(4))
        if (f(x+dx) < f(x))
            x += dx
        else if (f(x-dx) <= f(x))
            x -= dx
        else
            break
    }
}

var init = Math.floor((Math.random() * 100) + 1)

hill_climbing(f, init)
