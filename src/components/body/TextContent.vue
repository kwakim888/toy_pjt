<template>

<input type="text" v-model="default_text_value"/>

</template>
<script>

export default {
    name: "text_nav",
    data() {
        return {
            default_text_value: "default value",
        };
    },
    watch : {
        default_text_value() {
            // 변화가 있으면 바로 캐치
            console.log(this.default_text_value);
        }

    },
    methods: {
        change_value() {
            // text에서 focus가 풀리면 캐치
            alert(this.default_text_value);
        },
    }
}

</script>