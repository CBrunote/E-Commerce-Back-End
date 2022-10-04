// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'categroy_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
})
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
  }
  // as: 'product_tag_id'
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  }
  // as: 'tag_product_id'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
