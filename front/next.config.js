const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;