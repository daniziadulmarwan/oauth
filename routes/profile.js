const router = require("express").Router();
const oauth = require("../middlewares/oauth");

router.get("/", oauth, (req, res) => {
  res.render("profile", { user: req.user });
});

module.exports = router;
