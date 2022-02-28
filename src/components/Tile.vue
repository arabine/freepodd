<template>
<figure class="image m-1" style="border: 1px solid black;" :style="{ 'cursor': active ? 'pointer' : 'default' }">
    <img :src="image" style="" />

    <span  style="position: absolute; top: 5px; left: 20px;" has-text-centered>
        {{text}}
    </span>
</figure>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true,
            default: '/tiles/blank.png'
        },
        text: {
            type: String,
            required: true,
            default: 'Default text'
        },
        active: {
            type: Boolean,
            default: true
        }
    },

    data: () => ({

    }),
    computed: {
        
    },
    mounted() {

    },

    methods: {
    }
}
</script>
