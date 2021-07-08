const products = require("../../data/products");

const getById = (req, res) => {
  
  const { id } = req.params;
  const selectProduct = products.find((item) => item._id === id);
  if (!selectProduct) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Product with this id not found",
    });
    return;
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: selectProduct,
    },
  });
};

module.exports = getById;
