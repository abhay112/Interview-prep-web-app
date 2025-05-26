// Function that returns a Promise which resolves with value 'x' after 'n' milliseconds
function resolveAfterNSeconds(n, x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, n);
    });
}

(function () {
    // Start a promise that resolves to 1 after 100ms
    let a = resolveAfterNSeconds(100, 1);

    // When 'a' resolves, execute this async function with x = 1
    a.then(async function (x) {
        // Wait 3000ms (3s), then y = 2
        let y = await resolveAfterNSeconds(3000, 2);
        console.log('y'); // Prints after 3s

        // Wait 1000ms (1s), then z = 3
        let z = await resolveAfterNSeconds(1000, 3);
        console.log('z'); // Prints after 4s total

        // Start a promise that resolves to 4 after 5000ms (5s), but do NOT await yet
        let p = resolveAfterNSeconds(5000, 4);
        console.log('p'); // Prints immediately after 'z'

        // Start a promise that resolves to 5 after 3000ms (3s), but do NOT await yet
        let q = resolveAfterNSeconds(3000, 5);
        console.log('q'); // Prints immediately after 'p'

        // Wait for p and q to resolve, then sum all values and print
        // This line waits until both p (5s after 'z') and q (3s after 'z') are done
        // Final output prints after 9s from the very start
        console.log(x + y + z + await p + await q); // Prints 15
    });

})();

/*
Expected Output (with timing):
- After 3s: y
- After 4s: z
- Immediately after z: p
- Immediately after p: q
- After 9s from start: 15

Output:
y
z
p
q
15
*/
