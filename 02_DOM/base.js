document.write("<p>Hello world!!!</p>");

const tableBody = document.getElementById("table-body");
const btnCreate = document.getElementById('create-btn');

const products = []

function getProductFromForm() {
    const modelInput = document.getElementById('modelInput');
    const descrInput = document.getElementById('desInput');
    const priceInput = document.getElementById('priceInput');

    return {
        id : products.length + 1,
        model: modelInput.value,
        description: descrInput.value,
        price: +priceInput.value,
    }
}


btnCreate.onclick = () => {
    console.log("button clicked from JS");

    const newProduct = getProductFromForm();
    products.push(newProduct);
    //AddNewProduct(newProduct);

    tableBody.innerHTML += `
                    <tr class="table-danger">
                    <th scope="row">${newProduct.id}</th>
                    <td>${newProduct.model}</td>
                    <td>${newProduct.description}</td>
                    <td>${newProduct.price}</td>
                </tr>`

}
void AddNewProduct(product)
{
 tableBody.innerHTML += `
                    <tr class="table-danger">
                    <th scope="row">${product.id}</th>
                    <td>${product.model}</td>
                    <td>${product.description}</td>
                    <td>${product.price}</td>
                </tr>`
}
