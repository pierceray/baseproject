module.exports = {
  dist: {
    files: [
      {
        expand: true,
        cwd: "src",
        src: ["**/*.{html,png,jpg,gif,svg,js}", "CNAME"],
        dest: "dist"
      }
    ]
  }
};
