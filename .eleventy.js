module.exports = function(eleventyConfig) {
  // Copy your generated favicon files into the root of public/
  eleventyConfig.addPassthroughCopy("favicon_io");

  // Copy your JS, CSS, and PDF
  eleventyConfig.addPassthroughCopy({"static/js": "js"});
  eleventyConfig.addPassthroughCopy({"static/css": "css"});
  eleventyConfig.addPassthroughCopy({
    "static/Jacob_Ramirez_Resume_2025.pdf": "Jacob_Ramirez_Resume_2025.pdf"
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "public"
    }
  };
};
