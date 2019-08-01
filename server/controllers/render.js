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
    nav: navConfig,
    recent: {
      title: "This is a test",
      text: "This is a example of a react post.",
      src: "/posts/crap",
      img: "http://192.168.1.113:4000/uploads/sample-article-348x180.jpg",
      other: [
        {
          title: "Example example 01",
          src: "/"
        },
        {
          title: "Example example 02",
          src: "/"
        },
        {
          title: "Example example 03",
          src: "/"
        }
      ]
    }
  });
};

loadFooter();
loadNav();
