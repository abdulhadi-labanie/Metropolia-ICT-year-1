function task1_1()
{
    console.log("I'm printing to console!");
}

function task1_2()
{
    const name = prompt("Enter your name:");

    document.querySelector("#target1_2").innerHTML = "Hello, " + name + "!"
}


function task1_3()
{
    let number1 = prompt("Enter number 1:");
    let number2 = prompt("Enter number 2:");

    number1 = parseInt(number1)
    number2 = parseInt(number2)
    document.querySelector("#target1_3").innerHTML = 
    "Sum: " + number1 + " + " + number2 +" = " + (number1+number2) + ", " +
    "Product : " + number1 + " * " + number2 + " = " + (number1*number2) + ", " +
    "Average : " + number1 + " and " + number2 + " = " + (number1+number2)/2
}


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function task1_4()
{
    const name = prompt("Enter enter your name: ");

    const number = getRandomArbitrary(1,4);

    switch (number)
    {
        case 1:
            document.querySelector("#target1_4").innerHTML = "Hello, " + name + ", You are Gryffindor"
            break;
        case 2:
            document.querySelector("#target1_4").innerHTML = "Hello, " + name + ", You are Slytherin"
            break;
        case 3:
            document.querySelector("#target1_4").innerHTML = "Hello, " + name + ", You are Hufflepuff"
            break;
        case 4:
            document.querySelector("#target1_4").innerHTML = "Hello, " + name + ", You are Ravenclaw"
            break;

        default:
            console.log("Invalid cabin class.");        
    }
}


document.querySelector("#button1").addEventListener("click", task1_1);

document.querySelector("#button2").addEventListener("click", task1_2);

document.querySelector("#button3").addEventListener("click", task1_3);

document.querySelector("#button4").addEventListener("click", task1_4);
