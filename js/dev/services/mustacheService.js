
;

(function (window, mustache, undefined) {

    var mustacheService = function () {

        return new mustacheService.fn.init();

    };


    mustacheService.fn = mustacheService.prototype = {

        constructor: mustacheService,

        init: function (customSettings) {
            return this;
        },

        version: "0.0.1",

        templates: {},


        setTemplate: function (key, template) {
            this.templates[key] = Mustache.compile(template);
        },

        setTemplates: function (templates) {

            var that = this;

            for (template in templates) {
                that.setTemplate(template, templates[template]);
            }

        },

        getTemplate: function (key) {
            return this.templates[key];
        },

        getTemplates: function () {
            return this.templates;
        },

        removeTemplate: function (key) {

            delete this.templates[key];

        },

        mergeData: function (key, data) {

            var that = this;

            if((typeof key !== "string") || //should also check if data is an object
                (data === undefined || data === null)) {
                console.error("missing argument in mergeData");
                return;
            }

            return that.templates[key](data);
        }

    };


    // Give the init function the mustacheService prototype for later instantiation
    mustacheService.fn.init.prototype = mustacheService.fn;


    //create the global object used to create new instances of mustacheService
    return (window.mustacheService = mustacheService);


})(window, Mustache);


