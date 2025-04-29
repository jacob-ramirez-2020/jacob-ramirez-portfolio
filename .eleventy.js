module.exports = function(eleventyConfig) {
  // copy everything in src/favicon_io/ straight to the _output_ root
  eleventyConfig.addPassthroughCopy({ "src/favicon_io": "/" });
  // Passthrough static folders to public
  eleventyConfig.addPassthroughCopy({ "static/js": "js" });
  eleventyConfig.addPassthroughCopy({ "static/css": "css" });
  eleventyConfig.addPassthroughCopy({ "static/partials": "partials" });
  eleventyConfig.addPassthroughCopy({ "favicon_io": "/" });
  
  eleventyConfig.addPassthroughCopy({
    "static/Jacob_Ramirez_Resume_2025.pdf": "Jacob_Ramirez_Resume_2025.pdf"
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",    // this is the default, but set it explicitly
      data: "_data",            // if you have a _data folder
      output: "public"
    }
  };
};
