/////objects using object literals and CRUD operations with dot notation 
//1.Student object
let student={
    Name:"Vyshnavi",
    age:21,
    Branch:"AIML",
    Year:"III",
    HtNo:"22TR1A05B7",
    semester:2,
    GPA:8.75,
}
console.log("=======Accessing the data=======");
console.log(student);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the student is",student.Name );
student.section="A"
console.log("After Adding:The data is",student);
console.log();

//Updating Data
student.Year="IV"
student.semester=1
console.log("===Updating the data====");
console.log("After updating: ",student);
console.log();

//Deleting
delete student.section
console.log("======Deleting the data=====");
console.log("After deleting: ",student);
console.log();

//2.Product object
let product={
    Name:"Laptop",
    price:50000,
    Quantity:2,
    company:"Dell",
    Inches:14.5,
    processor:"U",
}
console.log("=======Accessing the data=======");
console.log(product);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the product is",product.Name );
product.Storage="512GB"
console.log("After Adding:The data is",product);
console.log();

//Updating Data
product.processor="P"
console.log("===Updating the data====");
console.log("After updating: ",product);
console.log();

//Deleting
delete product.Quantity
console.log("======Deleting the data=====");
console.log("After deleting: ",product);
console.log();

//3.Employee object
let Employee={
    Name:"Harshini",
    age:21,
    id:101,
    salary:30000,
    Role:"Frontend Developer",
}
console.log("=======Accessing the data=======");
console.log(Employee);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the Employee is",Employee.Name );
Employee.Experience="2years"
console.log("After Adding:The data is",Employee);
console.log();

//Updating Data
Employee.id=103
Employee.salary=32000
console.log("===Updating the data====");
console.log("After updating: ",Employee);
console.log();

//Deleting
delete Employee.age
console.log("======Deleting the data=====");
    console.log("After deleting: ",Employee);
console.log();

//4.Car object
let car={
    brand:"Toyota",
    model:"Fortuner",
    year:2024,
    color:"Grey",
    Seats:4,
    price:50000,
}
   console.log(car);
console.log("=======Accessing the data=======");
console.log(car);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the car brand is",car.brand);
car.Fueltype="Petrol",
console.log("After Adding:The data is",car);
console.log();

//Updating Data
car.Year=2020,
console.log("===Updating the data====");
console.log("After updating: ",car);
console.log();

//Deleting
delete car.Seats
console.log("======Deleting the data=====");
    console.log("After deleting: ",car);
console.log();
   
//5.Book object
let Course_Book={
    Name:"Javascript basics",
    Author:"John", 
    pages:300,
    rating:4.5,
    year:2020,
    price:500,
    edition:"1st edition",
}
   console.log(Course_Book);
console.log("=======Accessing the data=======");
console.log(Course_Book);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The title of the book is",Course_Book.Name);
Course_Book.publisher="Tech publications",
console.log("After Adding:The data is",Course_Book);
console.log();

//Updating Data
Course_Book.year=2025,
Course_Book.Author="John Smith",
Course_Book.edition="2nd edition",
console.log("===Updating the data====");
console.log("After updating: ",Course_Book);
console.log();

//Deleting
delete Course_Book.pages
console.log("======Deleting the data=====");
    console.log("After deleting: ",Course_Book);
console.log();

//6.Mobile object
let Mobile_phone={
    brand:"Samsung",
    model:"Galaxy S24",
    storage:"256GB",
    color:"Black",
    ram:"8GB",
    price:60000,
    processor:"snapdragon",
    warranty:"1 Year",
    battery:"400mAh",
    display:"6.2 inches",
}
   console.log(Mobile_phone);
console.log("=======Accessing the data=======");
console.log(Mobile_phone);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The MObile brand is",Mobile_phone.brand);
Mobile_phone.camera="50MP",
Mobile_phone.Operating_System="Android"
console.log("After Adding:The data is",Mobile_phone);
console.log();

//Updating Data
Mobile_phone.color="purple",
console.log("===Updating the data====");
console.log("After updating: ",Mobile_phone);
console.log();

//Deleting
delete Mobile_phone.battery
delete Mobile_phone.warranty
console.log("======Deleting the data=====");
    console.log("After deleting: ",Mobile_phone);
console.log();

////objects using object constructor and CRUD operations with square bracket notation
//1.Student
let Student=new Object()
    Student.Name="Vyshnavi",
    Student.age=21,
    Student.Branch="AIML",
    Student.Year="III",
    Student.HtNo="22TR1A05B7",
    Student.semester=2,
    Student.GPA=8.75,

console.log("=======Accessing the data=======");
console.log(Student);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the student is",Student["Name"] );
Student["section"]="A"
console.log("After Adding:The data is",Student);
console.log();

//Updating Data
Student["Year"]="IV"
Student["semester"]=1
console.log("===Updating the data====");
console.log("After updating: ",Student);
console.log();

//Deleting
delete Student["section"]
console.log("======Deleting the data=====");
console.log("After deleting: ",Student);
console.log();

//2.Product object
let Product=new Object()
    Product.Name="Laptop",
    Product.price=50000,
    Product.Quantity=2,
    Product.company="Dell",
    Product.Inches=14.5,
    Product.processor="U",

console.log("=======Accessing the data=======");
console.log(Product);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the Product is",Product["Name"] );
Product["Storage"]="512GB"
console.log("After Adding:The data is",Product);
console.log();

//Updating Data
Product["processor"]="P"
console.log("===Updating the data====");
console.log("After updating: ",Product);
console.log();

//Deleting
delete Product["Quantity"]
console.log("======Deleting the data=====");
console.log("After deleting: ",Product);
console.log();

//3.Employee object
let employee=new Object()
    employee.Name="Harshini",
    employee.age=21,
    employee.id=101,
    employee.salary=30000,
    employee.Role="Frontend Developer",

console.log("=======Accessing the data=======");
console.log(employee);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the employee is",employee["Name"] );
employee["Experience"]="2years"
console.log("After Adding:The data is",employee);
console.log();

//Updating Data
employee["id"]=103
employee["salary"]=32000
console.log("===Updating the data====");
console.log("After updating: ",employee);
console.log();

//Deleting
delete employee["age"]
console.log("======Deleting the data=====");
    console.log("After deleting: ",employee);
console.log();

//4.Car object
let Car=new Object()
    Car.brand="Toyota",
    Car.model="Fortuner",
    Car.year=2024,
    Car.color="Grey",
    Car.Seats=4,
    Car.price=50000,
   console.log(Car);
console.log("=======Accessing the data=======");
console.log(Car);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The name of the car brand is",Car["brand"]);
Car["Fueltype"]="Petrol",
console.log("After Adding:The data is",Car);
console.log();

//Updating Data
Car["year"]=2020,
console.log("===Updating the data====");
console.log("After updating: ",Car);
console.log();

//Deleting
delete Car["Seats"]
console.log("======Deleting the data=====");
    console.log("After deleting: ",Car);
console.log();
   
//5.Book object
let Book=new Object()
    Book.Name="Javascript basics",
    Book.Author="John",
    Book.pages=300,
    Book.rating=4.5,
    Book.year=2020,
    Book.price=500,
    Book.edition="1st edition",
   console.log(Book);
console.log("=======Accessing the data=======");
console.log(Book);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The title of the book is",Book["Name"]);
Book["publisher"]="Tech publications",
console.log("After Adding:The data is",Book);
console.log();

//Updating Data
Book["year"]=2025,
Book["Author"]="John Smith",
Book["Edition"]="2nd edition",
console.log("===Updating the data====");
console.log("After updating: ",Book);
console.log();

//Deleting
delete Book["pages"]
console.log("======Deleting the data=====");
    console.log("After deleting: ",Book);
console.log();

//6.Mobile object
let Mobile=new Object()
    Mobile.brand="Samsung",
    Mobile.model="Galaxy S24",
    Mobile.storage="256GB",
    Mobile.color="Black",
    Mobile.ram="8GB",
    Mobile.price=60000,
    Mobile.processor="snapdragon",
    Mobile.warranty="1 Year",
    Mobile.battery="400mAh",
    Mobile.display="6.2 inches",
   console.log(Mobile);
console.log("=======Accessing the data=======");
console.log(Mobile);
console.log();
//CRUD operations
//Retrieving
console.log("=======Retrieving and adding the data========");
console.log("Retrieving:The MObile brand is",Mobile["brand"]);
Mobile["camera"]="50MP",
Mobile["Operating_system"]="Android"
console.log("After Adding:The data is",Mobile);
console.log();

//Updating Data
Mobile["color"]="purple",
console.log("===Updating the data====");
console.log("After updating: ",Mobile);
console.log();

//Deleting
delete Mobile["battery"]
delete Mobile["warranty"]
console.log("======Deleting the data=====");
    console.log("After deleting: ",Mobile);
console.log();
