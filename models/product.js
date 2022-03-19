const products = [];

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        products.push(this);
    }

    //static để fetchAll gọi trên chính class Product này
    static fetchAll() {
        return products;
    }
}