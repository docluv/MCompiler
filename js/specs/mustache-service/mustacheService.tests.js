
module("mCompiler - Mustache Service Unit Tests", {
    setup: function () {

        

    },
    teardown: function () {

    }
});


test("Verify We Have mustacheService with expected members", function () {

    //basic sainty assertions to know members are present
    isFunction(mustacheService, "mustacheService object should exist");
    isFunction(mustacheService.fn.init, "init function should exist");
    ok(mustacheService.fn.version, "version should exist");
    isObject(mustacheService.fn.templates, "templates should exist");
    isFunction(mustacheService.fn.setTemplate, "setTemplate function should exist");
    isFunction(mustacheService.fn.setTemplates, "setTemplates function should exist");
    isFunction(mustacheService.fn.getTemplate, "getTemplate function should exist");
    isFunction(mustacheService.fn.getTemplates, "getTemplates function should exist");
    isFunction(mustacheService.fn.removeTemplate, "removeTemplate function should exist");
    isFunction(mustacheService.fn.mergeData, "mergeData function should exist");

});


test("Verify a new mustacheService instance", function () {

    var $ms = mustacheService();

    isObject($ms);

});


test("Verify getTemplates returns {} when no templates have been added", function () {

    var $ms = mustacheService(),
        templates = $ms.getTemplates();

    isEmptyObject(templates, "getTemplates should return {}");

});

test("Verify setTemplate adds the template to the internal collection using the specified key", function () {

    var $ms = mustacheService(),
        template = "{{Title}}",
        key = "testTemplate",
        title = "Hello World",
        testData = { Title: title },
        merged = "";

    $ms.setTemplate(key, template);

    isFunction($ms.templates[key], "the new template should be a function because it is compiled");

    merged = $ms.mergeData(key, testData);

    equal(merged, title, "should be '" + title + "'");

});


