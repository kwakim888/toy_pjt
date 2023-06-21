<template>

<button @click="event_btn">{{table_value}}</button>

    <p></p>
    <table border="1" v-show="table_condition">
        <tr :key="i" :value="d.val" v-for="(d,i) in select_options">
            <td>{{ d.val }}</td>
            <td>{{ d.view }}</td>
        </tr>
    </table>
    
    
    </template>
    <script>
    export default {
        name : "table_nav",
        data() {
            return {
                table_value: "테이블 보여주기",
                select_options: [
                    {val:"1", view:"one"},
                    {val:"2", view:"two"},
                    {val:"3", view:"three"},
                ],
                table_condition: true
                // v-if="table_condition"       랜더링 자체를 안함
                // v-show="table_condition"     랜더링은 하는데 안보여주는거
            };
        },
        watch: {
            text_value() {
                console.log(this.text_value);
            }
        },
        methods: {
            event_btn() {
            if (this.table_condition){
                this.table_condition = false;
                this.table_value = "테이블 보여주기";
            }   
            else {
                this.table_condition = true;
                this.table_value = "테이블 숨기기";
            }  
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