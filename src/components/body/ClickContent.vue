<template>

    <input type="text" v-model="text_value" />
    
    <p></p>
    <button type="button" @click="getData">{{ btn_value }}</button>
    <button type="button" @click="setData">{{ btn_value }}</button>
  
    
    </template>
    <script>
    export default {
        name : "click_nav",
        data() {
            return {
                text_value: "value1",
                btn_value: "button value",
            };
        },
        watch: {
            text_value() {
                console.log(this.text_value);
            }
        },
        methods: {
          getData() {
            alert(this.text_value);
          },
          setData() {
            this.btn_value = "change_value"
          },
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