const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.use(express.static('public'));

router.get('/', (req, res) => {
  res.sendFile('/public/index.html')
});

// /v1/cadex
router.get("/cadex",controller.getCadex);

module.exports = router;