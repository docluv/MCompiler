These services are really abstractions over a templating library like MUSTACHE, Handlebars, etc.

Since I start from a Mustache perspective I want the initial interface to be:

setTemplate(key, template) add/updates template to internal collection and compiles it
setTemplates(templates) pass in a templates object to with the internal collection.
getTemplates() returns the internal collection
getTemplate(key) - returns template function
removeTemplate(key) remove the template from the internal collection by the key index
mergeData(key, data) merges the data with the selected template and returns the resulting markup.