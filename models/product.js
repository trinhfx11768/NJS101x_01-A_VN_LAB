const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, imageUrl, description) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  save() {
    const db = getDb();
    return db.collection('products').insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('products').find().toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => console .log(err));
  }
}

// const Product = sequelize.define('product', {
//   id: {type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true},
//   title: {type: Sequelize.STRING},
//   price: {type: Sequelize.DOUBLE, allowNull: false},
//   imageUrl: {type: Sequelize.STRING, allowNull: false},
//   description: {type: Sequelize.STRING, allowNull: false}
// });

module.exports = Product;