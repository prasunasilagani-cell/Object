/////Using anonymous function in 4 ways
//1.Student details 
let student={
    Name:"Sahithya",
    age:21,
    Htno:"22TR1A05B7",
    Year:"III",
    semester:1,
    display:function(){
        console.log("=========The details of student========");
        console.log("Name:"+student.Name);
        console.log("Age:"+student.age);
        console.log("Htno:"+student.Htno);
        console.log("Year:"+student.Year);
        console.log("Semester:"+student.semester);
    }
}
student.display();
console.log();

//2.Employee salary calculation
let employee={
     details:function(name,salary,bonus){
        let total=salary+bonus
        console.log("Employee:"+name);
        console.log("Total salary:"+total);
     }
}
console.log("===The employee salary details===");
employee.details("Rahul",30000,5000)
employee.details("Suresh",40000,3000)
employee.details("Naresh",30000,5000)
console.log();

//3.Product price calculation
let product = {
    name: "Laptop",
    price: 50000,
    quantity: 2,
    calculatePrice: function() {
        let total = product.price*product.quantity;
        return "Product: " +product.name + "\nTotal Price: "+total
        
    }
};
console.log(product.calculatePrice());
console.log();

//4.Rectangle area calculation
let rectangle = {
    length: 10,
    width: 5,
    area: function() {
        let result =rectangle.length*rectangle.width;
        console.log("Length of rectangle:"+rectangle.length);
        console.log("Width of rectangle:"+rectangle.width);
        console.log("Area of Rectangle: "+result);
    }
};
rectangle.area();
console.log();

//5.Circle area method
let circle = {
    area: function(radius) {
        let result = 3.14 *radius*radius;
        return "Radius:"+radius+"\nArea of Circle: "+result  
    }
};
console.log(circle.area(7));
console.log();

//6.Bank balance 
let bank = {
    accountHolder: "Akshitha",
    balance: 10000,
    deposit: function(amount) {
        this.balance = bank.balance+amount;
        console.log("Acountholder Name:"+bank.accountHolder);
        
        console.log("Deposited: "+amount);
        console.log("Current Balance: " +bank.balance);
    }
};
bank.deposit(5000);

////Using arrow functions in 4 ways
//1.Student details 
let Student={
    Name:"Sahithya",
    age:21,
    Htno:"22TR1A05B7",
    Year:"III",
    semester:1,
    display:()=>{
        console.log("=========The details of student========");
        console.log("Name:"+Student.Name);
        console.log("Age:"+Student.age);
        console.log("Htno:"+Student.Htno);
        console.log("Year:"+Student.Year);
        console.log("Semester:"+Student.semester);
    }
}
Student.display();
console.log();

//2.Employee salary calculation
let Employee={
     details:(name,salary,bonus)=>{
        let total=salary+bonus
        console.log("Employee:"+name);
        console.log("Total salary:"+total);
     }
}
console.log("===The Employee salary details===");
Employee.details("Rahul",30000,5000)
Employee.details("Suresh",40000,3000)
Employee.details("Naresh",30000,5000)
console.log();

//3.Product price calculation
let Product = {
    name: "Laptop",
    price: 50000,
    quantity: 2,
    calculatePrice:()=>{
        let total = Product.price*Product.quantity;
        return "Product: " +Product.name + "\nTotal Price: "+total
        
    }
};
console.log(Product.calculatePrice());
console.log();

//4.Rectangle area calculation
let Rectangle = {
    length: 10,
    width: 5,
    area:()=>{
        let result =Rectangle.length*Rectangle.width;
        console.log("Length of rectangle:"+Rectangle.length);
        console.log("Width of rectangle:"+Rectangle.width);
        console.log("Area of Rectangle: "+result);
    }
};
Rectangle.area();
console.log();

//5.Circle area method
let Circle = {
    area:(radius)=>{
        let result = 3.14 *radius*radius;
        return "Radius:"+radius+"\nArea of Circle: "+result  
    }
};
console.log(Circle.area(7));
console.log();

//6.Bank balance 
let Bank = {
    accountHolder: "Akshitha",
    balance: 10000,
    deposit: function(amount) {
        this.balance = Bank.balance+amount;
        console.log("Acountholder Name:"+Bank.accountHolder);
        
        console.log("Deposited: "+amount);
        console.log("Current Balance: " +Bank.balance);
    }
};
Bank.deposit(5000); 