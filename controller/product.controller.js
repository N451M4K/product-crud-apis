
const db = require('../models/index');
const { ProductMaster, CategoryMaster } = db;
exports.createProduct = async (req, res) => {
    const { productName, productDescription, categoryId } = req.body;
    if (!req.body.productName || !req.body.productDescription) {
        return res.status(200).send({ success: false, msg: 'please send the required payload' });
    }
    try {
        const created = await ProductMaster.create({ productName, productDescription, categoryId });
        return res.status(201).send({ success: true, msg: 'created successfully', data: created });
    } catch (err) {
        return res.status(500).send({ success: false, msg: 'something went wrong', error: err.message })
    }
}

exports.productList = async (req, res) => {
    const { skip, perpage } = req.query;
    try {
        let { count, rows } = await ProductMaster.findAndCountAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] },
            order: [['id', 'DESC'],],
            include: [{ model: CategoryMaster, attributes: { exclude: ['createdAt', 'updatedAt'] } }],
            offset: skip,
            limit: perpage,
        });
        res.status(200).send({ success: true, data: rows, count });
    } catch (err) {
        return res.status(500).send({ success: false, msg: 'something went wrong', error: err.message })
    }

}

exports.updateProduct = async (req, res) => {
    const { productId } = req.query;
    console.log(productId);
    const { productName, productDescription, categoryId } = req.body;
    try {
        if (!productId) {
            return res.status(200).send({ success: false, msg: 'please send productId' });
        }
        const updated = await ProductMaster.update({ productName, productDescription, categoryId }, {
            where: {
                id: productId,
            }
        });

        if (updated > 0) {
            res.status(200).send({ success: true, msg: 'updated successfully' })
        } else {
            res.status(200).send({ success: false, msg: 'could not be updated' })
        }
    } catch (err) {
        res.status(500).send({ success: false, msg: 'something went wrong', error: err.message })
    }
}

exports.deleteProduct = async (req, res) => {
    const { productId } = req.query;
    try {
        const destroyed = await ProductMaster.destroy({
            where: {
                id: productId,
            }
        });
        if (destroyed > 0) {
            res.status(200).send({ success: true, msg: 'product deleted successfully' });
        } else {
            res.status(200).send({ success: false, msg: 'product could not be deleted' });
        }
    } catch (err) {
        res.status(500).send({ success: false, msg: 'something went wrong', error: err.message })
    }
}