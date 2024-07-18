const express = require ('express');
const { getProducts, uploadProducts, getSingleProduct, deleteproduct, updateProduct } = require('../controllers/productdata');
const router = express.Router();

// router.post('/user/register', registerUser)

router.post('/user/add', uploadProducts);
router.get('/user/list', getProducts);
router.get('/user/:productID', getSingleProduct);
router.put('/user/update/:productID', updateProduct)
router.delete('/user/delete/:productname/:price/:productId', deleteproduct)

module.exports = router;