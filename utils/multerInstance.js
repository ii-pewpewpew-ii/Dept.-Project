const multer = require("multer")
const storage = require("./storage")
const upload = multer({
    storage : storage,
})

module.exports = upload

