const yaml = require("js-yaml")

module.exports = (eleventyConfig) => {
  // Allow `.yaml` extensions to be used
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents))
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents))

  eleventyConfig.setTemplateFormats(["liquid", "css"])

  return {
    dir: {
      input: "src",
      layouts: "_layouts",
    },
  }
}
