let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let imp = []
for (let i = 0; i < n.length; i++) { 
    if (n[i] % 2 !== 0) { 
        imp.push(n[i])
    } 
} console.log(imp)
