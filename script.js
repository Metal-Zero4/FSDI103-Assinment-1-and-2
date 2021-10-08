function hello(){
    let userName=prompt("Enter Username:");
    let password=prompt("Enter Password:");
    let confirmPassword=prompt("Confirm Password:");
    let firstName=prompt("First Name:");
    let lastName=prompt("Last Name:");
    let age=prompt("Age:");
    let accountType=prompt("Account Type (please type business or personal):");
    let geoLocation=prompt("Country:");
    let monthlySalary=prompt("Enter Monthly Salary:");
    let annualSalary=monthlySalary*12;
    let employmentStatus=prompt("Enter Employment Status:");
    let employmentType=prompt("Employment Type:");
    let jobTitle=prompt("Enter Your Job Title: ")
    let petsName=prompt("What was your first pet's name?:");
    let vendor=prompt("Input preferred vendor (Amazon, Wish, Etc.):")
    let productName=("Dog Food");
    let productPrice=30.30;
    let productQuantity=5;
    const taxes=.0825;
    const taxRate=taxes*100;
    let subTotal=productPrice*productQuantity;
    let totalPrice=subTotal+(subTotal*taxes);

    if (password===confirmPassword){
        document.write(`<h1>Welcome, ${userName}</h1>`);
        document.write(`<p>Account Type: ${accountType}<br>Country: ${geoLocation}<br>Name: ${firstName} ${lastName}<br>Age: ${age}<br>Employment Status: ${employmentStatus}<br>Employment Type: ${employmentType}<br>Job-Title: ${jobTitle}<br><h1>Product Details</h1>
        <ul>
            <li>Vendor: ${vendor}</li
            <li>Product Name: ${productName}</li>
            <li>Unit Price: $${productPrice}</li>
            <li>Quantity: ${productQuantity}</li>
            <li>SubTotal: $${subTotal}</li>
            <li>Tax Rate: ${taxRate}%
            <li>Total: $${totalPrice}</li>
        </ul>`);
    } 
    else{
         alert("Password Incorrect");
     }
     if (annualSalary>=100000){
         document.write(`<p>Account Tier: Gold<br>Discount: 10%</p>`)
        
     } else if (annualSalary<100000){
         document.write(`<p>Account Tier: Silver<br>Discount: 5%</p>`)
     }
}
