var a = [];
function time(fn) {
    var now = Date.now();
    fn();
    return Date.now() - now;
}
function unshift(number) {
    for (var i = 0; i < number; ++i) {
        a.unshift(Math.random());
    }
}
function shift(number) {
    for (var i = 0; i < number; ++i) {
        a.shift();
    }
}
function push(number) {
    for (var i = 0; i < number; ++i) {
        a.push(Math.random());
    }
}
function pop(number) {
    for (var i = 0; i < number; ++i) {
        a.pop();
    }
}
function get(idx) {
    return function () {
        return a[idx];
    };
}
function push_arr(count) {
    return function () {
        push(count);
    };
}
function pop_arr(count) {
    return function () {
        pop(count);
    };
}
function unshift_arr(count) {
    return function () {
        unshift(count);
    };
}
function shift_arr(count) {
    return function () {
        shift(count);
    };
}
var tests = [10, 100, 1000, 10000, 100000, 1000000, 10000000];
console.log("Testing get");
tests.forEach(function (t) {
    a.length = 0;
    push(t);
    console.log(t, time(get(t - 1)));
});
console.log("push");
tests.forEach(function (t) {
    a.length = 0;
    push(t);
    console.log(t, time(push_arr(1000)));
});
console.log("pop");
tests.forEach(function (t) {
    a.length = 0;
    push(t);
    console.log(t, time(pop_arr(1000)));
});
console.log("unshift");
tests.forEach(function (t) {
    a.length = 0;
    push(t);
    console.log(t, time(unshift_arr(1000)));
});
console.log("shift");
tests.forEach(function (t) {
    a.length = 0;
    push(t);
    console.log(t, time(shift_arr(1000)));
});
