const fs = require("fs");

var footerConfig;

function loadFooter() {
  footerConfig = JSON.parse(
    fs.readFileSync(`${__dirname}/../config/footer.json`)
  );
}

module.exports.getPageLayout = (req, res) => {
  res.json({
    footer: footerConfig
  });
};

loadFooter();
