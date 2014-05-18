
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
    isObject(mustacheService.fn.tempalates, "tempalates should exist");
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

/*
test("Verify can a new mustacheService instance and the 1st element is the target element", function () {

    var selector = ".operation-body",
        $ob = $(selector);

    equal(typeof $ob, "object", "mustacheService object should exist");
    equal($ob.length, 1, "mustacheService.length should be 1");
    equal($ob.selector, selector, "mustacheService.selector should be " + selector);
    equal($ob[0], document.querySelector(selector), "should be the target node");

});

test("Verify can a mustacheService.trim can trim leading and trailing spaces", function () {

    var testString = " test ",
        expect = "test",
        $ob = $(),
        result = $ob.trim(testString);

    equal(result, expect, "trim should remove leading and trailing spaces");

});

test("Verify can a mustacheService.trim can trim leading space", function () {

    var testString = " test",
        expect = "test",
        $ob = $(),
        result = $ob.trim(testString);

    equal(result, expect, "trim should remove leading space");

});

test("Verify can a mustacheService.trim can trim trailing space", function () {

    var testString = "test ",
        expect = "test",
        $ob = $(),
        result = $ob.trim(testString);

    equal(result, expect, "trim should remove trailing space");

});

test("Verify can a mustacheService.isArray can identify an array", function () {

    var testArray = [],
        expect = true,
        $ob = $(),
        result = $ob.isArray(testArray);

    equal(result, expect, "trim should be true");

});

test("Verify can a mustacheService.isArray won't identify an object as an array", function () {

    var testArray = {},
        expect = false,
        $ob = $(),
        result = $ob.isArray(testArray);

    equal(result, expect, "trim should be false");

});


*/