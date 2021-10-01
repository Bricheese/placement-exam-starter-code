console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Brianna Peterson"

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

//gb


//cc
let ccTbRow = document.querySelector('#qty-cc')

//sugar



document.getElementById('credit').textContent = `Created by ${'Brianna Peterson'}`

//button clicks logged
document.getElementById('add-gb').addEventListener('click', function() {
    alert("Your order now contains one more Ginger Bread cookie!") //Just a placeholder
    console.log('Ginger bread + button was clicked!')
});

document.getElementById('minus-gb').addEventListener('click', function() {
    alert("Your order now contains one less Ginger Bread cookie!") //Just a placeholder
    console.log('Ginger bread - button was clicked!')
});

document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1;
    ccTbRow.textcontent = cc;
    console.log('Chocolate Chip + button was clicked!')
});

document.getElementById('minus-cc').addEventListener('click', function() {
    cc = cc - 1;
    ccTbRow.textcontent = cc;
    console.log('Chocloate Chip - button was clicked!')
});

document.getElementById('add-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle + button was clicked!')
});

document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle - button was clicked!')
});
