// prompt user for flavors
let flavors = prompt("Please enter froyo flavors separated by a comma:")


// turn input into an array of flavors using .split()
let arrayOfFlavors = flavors.split(/\s*,\s*/);


// create empty obj
// const froyo = {}


const froyo = {};


// loop through array


for (let i = 0; i < arrayOfFlavors.length; i++) {
    const flavor = arrayOfFlavors[i];


// check if key is in obj
// if key is NOT in obj, set key and value of key to 1
// if key IS in obj, then increase value by 1
    if (froyo[flavor]) {
        froyo[flavor]++;
        } else {
            froyo[flavor] = 1;
              }
    }


for (const flavor in froyo) {
  console.log(`${flavor}: ${froyo[flavor]}`);
}