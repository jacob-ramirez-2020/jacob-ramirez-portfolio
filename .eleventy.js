module.exports = function(eleventyConfig) {
  // Passthrough static folders to public
  eleventyConfig.addPassthroughCopy({ "static/js": "js" });
  eleventyConfig.addPassthroughCopy({ "static/css": "css" });
  eleventyConfig.addPassthroughCopy({ "static/partials": "partials" });
  eleventyConfig.addPassthroughCopy({ "static/favicon.ico": "favicon.ico" });
  
  eleventyConfig.addPassthroughCopy({
    "static/Jacob_Ramirez_Resume_2025.pdf": "Jacob_Ramirez_Resume_2025.pdf"
  });

  return {
    dir: {
      input: "src",
      output: "public"   // <-- important: output into public now
    }
  };
};
