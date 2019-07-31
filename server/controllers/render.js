const fs = require("fs");

var footerConfig;
var navConfig;

function loadFooter() {
  footerConfig = JSON.parse(
    fs.readFileSync(`${__dirname}/../config/footer.json`)
  );
}

function loadNav() {
  navConfig = JSON.parse(fs.readFileSync(`${__dirname}/../config/nav.json`));
}

module.exports.getPageLayout = (req, res) => {
  res.json({
    footer: footerConfig,
    nav: navConfig
  });
};

loadFooter();
loadNav();
