module.exports = function(eleventyConfig) {
  // Copy everything in favicon_io/ directly into the output root
  eleventyConfig.addPassthroughCopy({
    "favicon_io": "."   // the dot here means “output these files into public/”
  });

  // your other passthroughs…
  eleventyConfig.addPassthroughCopy({ "static/js": "js" });
  eleventyConfig.addPassthroughCopy({ "static/css": "css" });
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
