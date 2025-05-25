export function storageProducts() {
    
    const objProduct = [{
        id: 1,
        title: "Product 1",
        price: 100,
        quantity: 1
    }, {
        id: 2,
        title: "Product 2",
        price: 200,
        quantity: 1
    }, {
        id: 3,
        title: "Product 3",
        price: 300,
        quantity: 1
    }, {
        id: 4,
        title: "Product 4",
        price: 400,
        quantity: 1
    }, {
        id: 5,
        title: "Product 5",
        price: 500,
        quantity: 1
        }
    ]
    
    localStorage.setItem('product', JSON.stringify(objProduct))
}