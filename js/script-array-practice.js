

//STEP 1
// let arrayName = ['Shrek', 'Shrek 2', 'Shrek the Third', 'Shrek Forever After', 'Shrek 5'];
// console.log(arrayName);

//STEP 2
// let movies = new Array(5);
// movies[0] = 'Shrek';
// movies[1] = 'Shrek 2';
// movies[2] = 'Shrek the Third';
// movies[3] = 'Shrek Forever After';
// movies[4] = 'Shrek 5';
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = 'Shrek';
// movies[1] = 'Shrek 2';
// movies[2] = 'Shrek the Third';
// movies[3] = 'Shrek Forever After';
// movies[4] = 'Shrek 5';
// movies.splice(2, 3, 'Mulan', movies[2], movies[3], movies[4]);
// console.log(movies.length);

//STEP 4
// let movies = ['Shrek', 'Shrek 2', 'Shrek the Third', 'Shrek Forever After', 'Shrek 5'];

// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ['Shrek', 'Shrek 2', 'Shrek the Third', 'Shrek Forever After', 'Shrek 5', 'Mulan', 'Mulan 2'];

// for (let movie in movies) {
//     console.log(movies[movie]);
// }


//STEP 6
// let movies = ['Shrek', 'Shrek 2', 'Shrek the Third', 'Shrek Forever After', 'Shrek 5'];

// for (let i of movies) {
//     console.log(i);
// }


//STEP 7
// let movies = ['Shrek', 'Shrek 2', 'Shrek the Third', 'Shrek Forever After', 'Shrek 5'];

// movies.sort();
// for (let i of movies) {
//     console.log(i);
// }

//STEP 8
// let movies = ['Shrek', 'Shrek 2', 'Shrek the Third', 'Shrek Forever After', 'Shrek 5'];
// let leastFavMovies = ['Frozen', 'Frozen 2', 'The Ring'];

// console.log("Movies i like:");
// console.log(" ");
// for (let i of movies) {
//     console.log(i);
// }
// console.log(" ");
// console.log("Movies i regret watching:");
// console.log(" ");
// for (let j of leastFavMovies) {
//     console.log(j);
// }

//STEP 9
// let movies = ['Shrek', 'Shrek 2', 'Shrek the Third', 'Shrek Forever After', 'Shrek 5'];
// let leastFavMovies = ['Frozen', 'Frozen 2', 'The Ring'];
// movies = movies.concat(leastFavMovies);
// movies.sort();
// movies.reverse();

// for (let i of movies) {
//     console.log(i);
// }

//STEP 10
// let movies = ['Shrek', 'Shrek 2', 'Shrek the Third', 'Shrek Forever After', 'Shrek 5'];
// let leastFavMovies = ['Frozen', 'Frozen 2', 'The Ring'];
// movies = movies.concat(leastFavMovies);

// console.log(movies.pop());

//STEP 11
// let movies = ['Shrek', 'Shrek 2', 'Shrek the Third', 'Shrek Forever After', 'Shrek 5'];
// let leastFavMovies = ['Frozen', 'Frozen 2', 'The Ring'];
// movies = movies.concat(leastFavMovies);

// console.log(movies.shift());

//STEP 12

//STEP 13

//STEP 14
// let employees = ['ZAK', 'JESSICA', 'MARK', 'FRED', 'SALLY'];

// function showEmployee(arr) {
//     console.log("Employees:");
//     console.log(" ");
//     for (let i of arr) {
//         console.log(i);
//     }
// }

//STEP 15
// let myArray = [0,1,2,3,4];

// function arrayFilter(arr) {
//     let filteredArray = arr.filter((item) => {
//         return item !== false && item !== null && item !== 0 && item !== '';
//     })
//     return (filteredArray);
// }

//STEP 16
// let myArray = [0,1,2,3,4];

// function randomElement(arr) {
//     let randomNumber = Math.floor(Math.random() * arr.length);
//     let randomArray = arr[randomNumber];
//     return (randomArray);

// }

//STEP 17
// let largestNumberCurrent;
// function largestNumber(arr) {
//     largestNumberCurrent = 0;
//     for(i = 0; i < arr.length; i++){
//         if (largestNumberCurrent > arr[i]){
//             largestNumberCurrent = arr[i];
//         }
//     }
//     return largestNumberCurrent;
// }