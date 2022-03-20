const fs = require('fs');
const path = require('path');
//path.dirname(process.mainModule.filename) là đường dẫn đến thư mục gốc project
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }        
    });    
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        });
    }

    //static để fetchAll gọi trên chính class Product này
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}