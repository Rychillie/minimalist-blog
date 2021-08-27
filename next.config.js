module.exports = {
  images: {
    domains: ["minimalist.vercel.app", "localhost"],
  },

  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });

    return config;
  },
};
