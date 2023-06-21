<template>

    
    <p></p>
    <select v-model="default_value" @change="change_select_condition">
        <option :key="i" :value="d.val" v-for="(d,i) in select_options">{{ d.val }} / {{ d.view }}</option>
    </select>
    
    
    </template>
    <script>
    export default {
        name : "select_nav",
        data() {
            return {
                select_options: [
                    {val:"1", view:"one"},
                    {val:"2", view:"two"},
                    {val:"3", view:"three"},
                ],
                default_value: "2",
            };
        },
        methods: {
          change_select_condition() {
            console.log(this.default_value);
            console.log(this.table_condition);
          }  
        },
        beforeCreate() {
            console.log("beforeCreate");
        },
        created() {
            console.log("created");
        },
        beforeMount() {
            console.log("beforeMount");
        },
        mounted() {
            console.log("mounted");
        },
        beforeUpdate() {
            console.log("beforeUpdate");
        },
        updated() {
            console.log("updated");
        }
    }
    </script>