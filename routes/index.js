const router = require("express").Router();
const passport = require("passport");

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/profile");
  }
);

router.post("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
