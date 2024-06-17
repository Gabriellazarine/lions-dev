let n = [27, 10, 3, 0, 20, 5, 6, 3]
let imp = []
let par = []

n.push(17)


for (let i=0; i< n.length; i++) {
    if (n[i] % 2==0) {
        par.push(n[i])
        
    } else {
    imp.push(n[i])
    }
} console.log(par)
console.log(imp)