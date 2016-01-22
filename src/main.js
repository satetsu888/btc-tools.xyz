var Vue = require('vue')
new Vue({
    el: '#app',
    components: {
        'contents-component': require('./contents.vue'),
    }
});
