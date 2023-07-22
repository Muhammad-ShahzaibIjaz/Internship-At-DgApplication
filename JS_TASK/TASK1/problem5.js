function func() {
    const foo = 5;
    if (foo == 5) {
        const foo = 10;
        console.log(foo);
    }
    console.log(foo);
}

// It's output is 10 and 5. because the scope of const variable foo is block level.
// When the function func() is executed, it declares and initializes the const variable foo with a value of 5. Within the if statement block, a new const variable foo is declared and initialized with a value of 10. This new variable foo exists only within the block scope of the if statement.

// After printing the value of inner foo which is 10, the program moves outside the if statement block and prints the value of outer foo. Since the outer foo was not redeclared or modified within the if statement block, its value remains 5.