;
//mcompiler is a deferred content managment library with single page and mobile applications in mind
(function (window, undefined) {

    "use strict";

    var mcompiler = function (settings) {

        var that = new mcompiler.fn.init();

        that.bp = settings.bp || backpack();
        that.eventPrefix = settings.eventPrefix || "spa-";
        that.$rootScope = settings.rootScope || that.$rootScope;
        that.templateService = settings.templateService || that.templateService;
        that.templateType = settings.templateType || that.templateType;

        if (!that.templateService) {
            console.error("must define a template service provider");
        }

        return that;
    };

    mcompiler.fn = mcompiler.prototype = {

        constructor: mcompiler,

        init: function () {

            return this;
        },

        version: "0.0.1",

        bp: undefined,
        eventPrefix: "spa-",
        $rootScope: undefined,
        templateService: undefined,
        templateType: "text/x-mustache-template",

        getTemplates: function (remove) {

            var i, temp,
                t = document.querySelectorAll("script[type='" + this.settings.templateType + "']"),
                templates = $.parseLocalStorage("templates");

            for (i = 0; i < t.length; i++) {

                temp = t[i];

                that.templateService.setTemplate(temp.id,
                                    temp.innerHTML.replace(/(\r\n|\n|\r)/gm, ""));

                if (remove) {

                    if (temp.parentNode) {
                        temp.parentNode.removeChild(temp);
                    }
                }

            }

            localStorage.setItem("templates", JSON.stringify(templates));

        },




        /*
        bindings is an object to hold
        custom event handlers. the default events are defined below
        with undefined values, which will trigger a default binding
        to create a custom binding, for example deeptissue(X).tap(callback)
        it would look like:

            "tap": function(node, callback){
                    deepttissue(node).tap(callback);
                }
        
        */
        bindings: {
            "click": undefined,
            "keyup": undefined,
            "change": undefined
        },



        mergeData: function (targetSelector, templateName, $scope, data) {

            if ((typeof targetSelector !== "string") ||
               (typeof templateName !== "string") ||
               ($scope === undefined && data === undefined)) {
                console.error("missing argument in mergeData");
                return;
            }

            if (data === undefined) {
                data = $scope;
                $scope = undefined;
            }

            var that = this,
                t = document.querySelector(targetSelector);

            //verify it is a single node.
            if (t.length && t.length > 0) {
                t = t[0];
            }

            requestAnimationFrame(function () {

                t.innerHTML = that.templateService.mergeData(templateName, data);

                if ($scope) {
                    that.parseEventBinding(t, $scope);
                }

            });

        },

        parseEventBinding: function (parent, $scope) {

            if (!parent || $scope) {
                return;
            }

            var that = this,
                elems = parent.querySelectorAll("[spa-*]"),
                key, binding, target;

            for (key in that.bindings) {

                binding = that.bindings[key];

                [].forEach.call(elems, function (el) {

                    if (el.hasAttribute("spa-" + key)) {

                        if (!binding) {

                            el.addEventListener(key, function (evt) {

                                $scope[el.getAttribute("spa-" + key)](evt);

                            });

                        } else {

                            binding(el, $scope[el.getAttribute("spa-" + key)]);
                        }

                    }

                });

            }

        }

    };

    // Give the init function the mcompiler prototype for later instantiation
    mcompiler.fn.init.prototype = mcompiler.fn;

    return (window.mcompiler = mcompiler);

})(window);
