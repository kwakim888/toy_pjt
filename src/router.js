import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import ClickContent from "./components/body/ClickContent.vue";
import TableContent from "./components/body/TableContent.vue";
import SelectContent from "./components/body/SelectContent.vue";
import TextContent from "./components/body/TextContent.vue";

const routes = [
    {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld,
    },
    {
        path: "/click",  
        name: "ClickContent",  
        component: ClickContent, 
    },
    {
        path: "/table",  
        name: "TableContent",  
        component: TableContent, 
    },
    {
        path: "/select",  
        name: "SelectContent",  
        component: SelectContent, 
    },
    {
        path: "/text",  
        name: "TextContent",  
        component: TextContent, 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;