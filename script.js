//Show message on the console
function showMessage() {
    console.log("Hello, welcome to the website!")
}
showMessage()


//Print 1-10 numbers in a list

function countToTen() {
    for (i = 1; i <= 10; i++) {
        console.log(i)
    }
}
countToTen()

//Multiplication table of 2
function multiplicationTable(table) {
    i = table
    for (j = 0; j <= 10; j++) {
        console.log(`${i} X ${j} = ${i * j}`)
    }
}

multiplicationTable(2)

//Odd Numbers from 1 to 10
function showOddNumbers() {
    console.log("Odd Number from 1 to 10 are: ")
    for (i = 0; i < 10; i++) {
        if (!(i % 2 == 0)) {
            console.log(i)
        }
    }
}

showOddNumbers()

//CountDown
function countDown() {
    console.log("Count Down 5 to 1:")
    for (i = 5; i >= 1; i--) {
        console.log(i)
    }
}
countDown()

//Greeting the user
function greetUser() {
    console.log("Good Day, User...!")
}
greetUser()

//Even Numbers
function showEvenNumbers() {
    console.log("Even Number from 1 to 10 are: ")
    for (i = 0; i < 10; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

showEvenNumbers()

//Farewell Message
function farewellMessage() {
    console.log("Thank you for visiting, goodbye")
}
farewellMessage()

//Squares from 1 to 5
function squares() {
    console.log("Squares from 1 to 5:")
    for (i = 1; i <= 5; i++) {
        console.log(i ** 2)
    }
}
squares()

//Welcoming the user Repeatedly
function repeatMessage() {
    for (i = 1; i <= 3; i++) {
        console.log("Welcome user")
    }
}
repeatMessage()


