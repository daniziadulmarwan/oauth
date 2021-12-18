const datas = require("../json/drone");

module.exports = {
  viewDrone: (req, res) => {
    res.render("drone", { datas });
  },
};
