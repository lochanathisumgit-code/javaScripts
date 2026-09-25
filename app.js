// class customer {
//     name;
//     age;
//     address;

//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }   

// }

// let customer1 = new customer("John Doe", 30, "123 Main St");
// console.log(customer1);
// let customer2 = new customer("Jane Smith", 25, "456 Elm St");
// console.log(customer2);

// let student = [
//     {
//         name: "Alice Johnson",
//         age: 20,
//         address: "789 Oak St",
//         teachers: [
//             {
//                 name: "Mr. Smith",
//                 age: 40,
//                 address: "654 Maple St"
//             },
//             {
//                 name: "Ms. Johnson",
//                 age: 35,
//                 address: "987 Cedar St"
//             }
//         ],
//         marks: [
//             {
//                 subject: "Math",
//                 score: 95}
//             ,
//             {
//                 subject: "Science",
//                 score: 88}
//             ,
//             {
//                 subject: "English",
//                 score: 92}
//         ]



//     },
//     {
//         name: "Bob Brown",
//         age: 22,
//         address: "321 Pine St"
//     }       

// ]

// //console.log(student);
// console.log(student[0].teachers);
// console.log(student[0].marks[1].subject);


//-------------DOM manupulation-----------------
console.log(document);
// document.write("Hello, World!");

let title = document.getElementById("title");
console.log(title.innerText);
title.innerText = "Number Counter";

let number = 0;
function btnAddOnAction(){
    number = number + 1;
    title.innerText="Number Counter - " + number;
} 
function btnMinusOnAction(){
    number = number - 1;
    validateMinus();
    title.innerText="Number Counter - " + number;
}
function validateMinus(){
    if(number < 0){
        number = 0 ;
        // Changed 'counter' to 'title' to match your existing variable
        title.innerText = "Number Counter - " + number;
    }
}

