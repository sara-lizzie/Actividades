function c(a, i, j) {
    let r = 0;
    console.log("r: ", r,"a: ", a,"j:", j, "i: ", i)
    if (a[i] === a[j]) {
        console.log("a en i: ", a[i], "a en j: ", a[j])
        r = 0;
    }else {
        if (a[i] < a[j]) {
            r = -1;
            } else {
                 r = 1;
            }
    }        
    return r;
}

console.log(c(2,0,0));
