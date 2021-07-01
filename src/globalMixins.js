import Vue from 'vue';

var mixinGlobal = {
    mounted() {
        this.$store.dispatch('resetUsuarios');
    },
    computed: {
        getUsersLength(){
            return this.$store.state.users.length;
        },
        getKeysFromUsers(){
            return Object.keys(this.$store.state.users[0]);
        }
    },
    methods: {
    }
}

Vue.mixin(mixinGlobal);