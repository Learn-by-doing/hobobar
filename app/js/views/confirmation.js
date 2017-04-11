var app = app || {};

app.views = app.views || {};

app.views.Confirmation = (function() {

    'use strict';

    return Backbone.View.extend({

        className: 'confirmation',

        template: '#template-confirmation',

        events: {
        },

        render: function() {

            var html = $(this.template).html();
            var template = Handlebars.compile(html);
            this.$el.html(template({
                // Data for the template goes here.
            }));
            return this;
        }

    });

})();
