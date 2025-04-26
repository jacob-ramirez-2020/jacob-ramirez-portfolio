module.exports = function(eleventyConfig) {
  // Passthrough public folders to _site
  eleventyConfig.addPassthroughCopy({ "public/js": "js" });
  eleventyConfig.addPassthroughCopy({ "public/css": "css" });
  eleventyConfig.addPassthroughCopy({ "public/partials": "partials" });
  eleventyConfig.addPassthroughCopy({ "public/favicon.ico": "favicon.ico" });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    passthroughFileCopy: true,
    setUseGitIgnore: false
  };
};
