<template>

<input type="text" v-model="text_value" />

<p></p>
<button type="button" @click="getData">{{ btn_value }}</button>
<button type="button" @click="setData">{{ btn_value }}</button>

<p></p>
<select v-model="default_value" @change="change_select_condition">
    <option :key="i" :value="d.val" v-for="(d,i) in select_options">{{ d.val }} / {{ d.view }}</option>
</select>

<p></p>
<table border="1" v-if="table_condition">
    <tr :key="i" :value="d.val" v-for="(d,i) in select_options">
        <td>{{ d.val }}</td>
        <td>{{ d.view }}</td>
    </tr>
</table>


</template>
<script>
export default {
    name : "header_nav",
    data() {
        return {
            text_value: "value1",
            btn_value: "button value",
            select_options: [
                {val:"1", view:"one"},
                {val:"2", view:"two"},
                {val:"3", view:"three"},
            ],
            default_value: "2",
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
      getData() {
        alert(this.text_value);
      },
      setData() {
        this.btn_value = "change_value"
      },
      change_select_condition() {
        console.log(this.default_value);
        console.log(this.table_condition);
        if (this.table_condition)   this.table_condition = false;
        else                        this.table_condition = true;
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