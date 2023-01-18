const db = require('../models/index');
const { CategoryMaster } = db;

exports.createCategory = async (req, res) => {
    const { categoryName } = req.body;
    try {
        const created = await CategoryMaster.create({ categoryName });
    res.status(201).send({success: true, msg:'category created successfully', data: created})
    } catch (err) {
        return res.status(500).send({ success: false, msg: 'something went wrong', error: err.message })
    }
}

exports.deleteCategory = async (req, res) => {
    const categoryId = req.query;
    try {
        const deleted = await CategoryMaster.destroy({
            where: {
                id: categoryId,
            }
        });
        if (deleted > 0) {
            res.status(200).send({ success: true, msg: 'deleted successfully' });
        } else {
            res.status(200).send({ success: false, msg: 'could not be deleted' });
        }
    } catch (err) {
        return res.status(500).send({ success: false, msg: 'something went wrong', error: err.message })
    }
}

exports.categoryList = async (req, res) => {
    try {
        const categoryList = await CategoryMaster.findAll();
        res.status(200).send({ succes: true, data: categoryList });
    } catch (err) {
        return res.status(500).send({ success: false, msg: 'something went wrong', error: err.message })
    }
}