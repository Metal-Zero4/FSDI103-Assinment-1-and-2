function calculate(){
    let productName=prompt("Enter Product Name:");
    let productPrice=prompt("Enter Product Price:");
    let productQuantity=prompt("Enter Product Quantity:")
    const taxes=.0825
    let subTotal=productPrice*productQuantity;
    let totalPrice=subTotal+(subTotal*taxes);
    
    document.getElementById("receipt").innerHTML=
        `<h1>Product Details</h1>
        <ul>
            <li>Product Name: ${productName}</li>
            <li>Unit Price: $${productPrice}</li>
            <li>Quantity: ${productQuantity}</li>
            <li>SubTotal: $${subTotal}</li>
            <li>Total: $${totalPrice}</li>
        </ul>`
}