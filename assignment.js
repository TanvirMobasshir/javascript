// Fucntion to convert Feet to Mile 
// .

// function feetToMile(feet) {
//     if (feet < 0) {
//         return 0;
//     }
//     else {
//         return feet / 5280;
//     }
// }

// var result_feetToMile, feet;

// feet = 69;
// result_feetToMile = feetToMile(feet);

// if (result_feetToMile == 0) {
//     console.log('WARNING!!! \nDistance cannot be negative');
// }
// else if(result_feetToMile != 0){
//     console.log(feet + ' is equal to ' + result_feetToMile + ' mile');
// }

// .
// .
//  Fucntion of Wood Calculator
// .
// .

// function woodCalculator(chair, table, bed) {
//     if (chair < 0 || table < 0 || bed < 0) {
//         return 0;
//     }
//     else {
//         var totalWood;
//         totalWood = chair + table * 3 + bed * 5;
//         return totalWood;
//     }
// }

// var result_woodCalculator, chair, table, bed;

// chair=10;
// table=10;
// bed=1;
// result_woodCalculator = woodCalculator(chair, table, bed);

// if(result_woodCalculator == 0){
//     console.log('WARNING!!! \nQuantities cannot be negative');
// }
// else if(result_woodCalculator!=0){
//     console.log('Total amount of wood needed: ' + result_woodCalculator);
// }


// .
// .
//  Fucntion of Brick Calculator
// .
// .

// function brickCalculator(floor) {
//     var building_Height, total_brick;
//     if (floor < 0) {
//         return 0;
//     }
//     else if (floor <= 10) {
//         building_Height = floor * 15;
//         total_brick = building_Height * 1000;
//         return total_brick;
//     }
//     else if (floor > 10 && floor <= 20) {
//         building_Height = 150 + (floor - 10) * 12;
//         total_brick = building_Height * 1000;
//         return total_brick;
//     }
//     else if (floor > 20) {
//         building_Height = 270 + (floor - 20) * 10;
//         total_brick = building_Height * 1000;
//         return total_brick;
//     }
// }

// var result_brickCalculator, floor;

// floor = -20;
// result_brickCalculator = brickCalculator(floor);

// if(result_brickCalculator == 0){
//     console.log('WARNING!!! \nFloors cannot be negative');
// }
// else if(result_brickCalculator !=0){
//     console.log('Total brick needed: ' + result_brickCalculator);
// }

// .
// .
//  Fucntion of Brick Calculator
// .
// .

function tinyFriend(name){
    var small_name = name[0];
    for(var i = 0; i < name.length ; i++){
        var current_name = name[i];
        if(current_name.length < small_name.length){
            small_name = current_name;
        }
    }
    return small_name;
}

var name, result_tinyFriend;

result_tinyFriend = tinyFriend(['tanvir', 'zarin', 'aurchi', 'ishraq']);

console.log('smallest name is: '+result_tinyFriend);