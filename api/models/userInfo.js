const mongoose = require('mongoose');

const userInfoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    subMenuHeader: { type: String, required: true },
    subMenuTitle: { type: String, required: true },
    subMenuPara: { type: String, required: true },
    subMenuList: [{ type: String, required: true }]
});

module.exports = mongoose.model('UserInfo', userInfoSchema);
