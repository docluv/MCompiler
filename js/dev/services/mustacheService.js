
;

(function (window, mustache, undefined) {

    var mustachService = function () {

        return new mustachService.fn.init();

    };


    mustachService.fn = mustachService.prototype = {

        constructor: mustachService,

        init: function (customSettings) {
            return this;
        },

        version: "0.0.1",

        tempalates: {},


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
            return this.tempalates;
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


    // Give the init function the mustachService prototype for later instantiation
    mustachService.fn.init.prototype = mustachService.fn;


    //create the global object used to create new instances of mustachService
    return (window.mustachService = mustachService);


})(window, mustache);


