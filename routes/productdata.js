const express = require ('express');
const { getProducts, uploadProducts, getSingleProduct, deleteproduct, updateProduct } = require('../controllers/productdata');
const router = express.Router();

// router.post('/user/register', registerUser)

router.post('/product/add', uploadProducts);
router.get('/product/list', getProducts);
router.get('/product/:productID', getSingleProduct);
router.put('/product/update/:productID', updateProduct)
router.delete('/product/delete/:productname/:price/:productId', deleteproduct)

module.exports = router;