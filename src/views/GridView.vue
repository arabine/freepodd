<template>
<div>

    <div v-for="(r, i) in 4" :key="i">
        <div class="columns">
            <div class="column" v-for="(c, j) in 5" :key="j">
                <Tile :image="getImage(j, i)" :text="getText(j, i)" :active="isActive(j, i)" @click="clicked(j, i)" />
            </div>
        </div>
    </div>

</div>
</template>

<script>

import Tile from '../components/Tile.vue'

export default {
    data: () => ({
        tiles: []
    }),
    components: { Tile },
    //====================================================================================================================
    methods: {
        getImage(column, line) {
            return '/tiles/' + this.tiles[line * 5 + column].title + '.png';
        },
        getText(column, line) {
            return this.$t('caption.' + this.tiles[line * 5 + column].title);
        },
        isActive(column, line) {
            return this.tiles[line * 5 + column].title == "blank" ? false : true;
        },
        clicked(column, line) {
            console.log("Clicked on tile: " + line + ", " + column);

            if (this.tiles[line * 5 + column].title != 'blank') {
                // tile valide
                this.tiles = this[this.tiles[line * 5 + column].next];
            }
        }
    },
    //====================================================================================================================
    created() {
        this.tiles = this.$page1a;
    },
    //====================================================================================================================
    beforeDestroy() {

    },
    //====================================================================================================================
    mounted() {
        console.log("mounted grid-view");
    }
}
</script>
