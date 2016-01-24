<template>
    <div class="row" v-for="content in contents">
        <template v-if="content.type=='header'">
            <div class="col-lg-12">
                <h1 class="page-header">{{content.title}}
                    <small>{{content.subtitle}}</small>
                </h1>
            </div>
        </template>
        <template v-if="content.type=='service'">
            <div class="col-md-7">
                <h3>{{content.title}}</h3>
                <h4>{{content.subtitle}}</h4>
                <p>{{content.description}}</p>
                <template v-for="link in content.links">
                    <a v-on:click.prevent=trackOutboundLink(link.url) style="margin:3px;" class="btn btn-primary" href="{{link.url}}" target="_blank"><span class="glyphicon glyphicon-chevron-right">{{link.text || "ViewProject"}}</span></a>
                </template>
            </div>
        </template>
    </div>
</template>
<style>
</style>
<script>
module.exports = {
    data: function(){ return require('./contents.js')},
    methods: {
        trackOutboundLink: function(url){
            this.$dispatch('trackOutboundLink', url);
        }
    }
};
</script>
