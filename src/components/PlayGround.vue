<template>
    <div class="playGround" :style="GameSize">
        <div
            class="card"
            v-for="(item, i) in game.column * game.row"
            :key="i"
            :style="CardSize"
        >
            1
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { game } from "../Model/GameModel";

const CardSizeCategory = {
    Large: 100,
    small: 60,
};

const setCardSize = (col: number, row: number): number => {
    if (col > 6 || row > 6) {
        return CardSizeCategory.small;
    }
    return CardSizeCategory.Large;
};

const calSize = setCardSize(game.row, game.column);

const GameSize = ref({
    width: String(game.row * calSize) + "px",
    height: String(game.column * calSize) + "px",
});

const CardSize = ref({
    width: String(calSize) + "px",
    height: String(calSize) + "px",
});
</script>
<style scoped>
.playGround {
    background-color: #fff;
    margin: 5% auto;
    display: flex;
    flex-wrap: wrap;
}
.card {
    background-color: #f6bd60;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #000;
}
</style>
