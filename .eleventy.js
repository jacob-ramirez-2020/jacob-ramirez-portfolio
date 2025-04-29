module.exports = function(eleventyConfig) {
  // Copy each favicon file into the output root
  eleventyConfig.addPassthroughCopy({
    "favicon_io/apple-touch-icon.png":      "apple-touch-icon.png",
    "favicon_io/favicon-32x32.png":         "favicon-32x32.png",
    "favicon_io/favicon-16x16.png":         "favicon-16x16.png",
    "favicon_io/favicon.ico":               "favicon.ico",
    "favicon_io/site.webmanifest":          "site.webmanifest",
    "favicon_io/safari-pinned-tab.svg":     "safari-pinned-tab.svg",
    "favicon_io/browserconfig.xml":         "browserconfig.xml",
    "favicon_io/mstile-150x150.png":        "mstile-150x150.png"
  });

  // Your other passthroughs…
  eleventyConfig.addPassthroughCopy({ "static/js": "js" });
  eleventyConfig.addPassthroughCopy({ "static/css": "css" });
  eleventyConfig.addPassthroughCopy({
    "static/Jacob_Ramirez_Resume_2025.pdf": "Jacob_Ramirez_Resume_2025.pdf"
  });

  return {
    dir: {
      input:  "src",
      includes: "_includes",
      data:     "_data",
      output:   "public"
    }
  };
};
