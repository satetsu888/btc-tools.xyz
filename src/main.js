var Vue = require('vue')
new Vue({
    el: '#app',
    components: {
        'contents-component': require('./contents.vue'),
    },
    events: {
        trackOutboundLink: function(url) {
            ga('send', 'event', 'outbound', 'click', url, {
                'transport': 'beacon',
                'hitCallback': function(){window.open(url);}
            });
        }
    }
});
