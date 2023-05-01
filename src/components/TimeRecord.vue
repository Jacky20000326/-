<template>
    <div class="TimeRecord">
        <div class="TimeRecord-Title">連連看遊戲</div>
        <div class="time-progress">
            <div class="timeout"></div>
        </div>
        <div class="time">60</div>
    </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.TimeRecord {
    width: 70vw;
    margin: 50px auto;
    background-color: #f7ede2;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 4px 4px 10px -15px rgba(0, 0, 0, 0.3.5);
}
.TimeRecord-Title {
    color: #f28482;
    font-size: 1.2rem;
    font-weight: 700;
    text-shadow: 1px 1px 2px rgb(245, 209, 209);
    background-image: url("../assets/Logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    padding-left: 5%;
}
.time-progress {
    width: 70%;
    height: 20px;
    border: #000;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 4px 4px 30px 0px rgba(0, 0, 0, 0.15);
    overflow: hidden;
}
.timeout {
    width: 30%;
    height: 100px;
    background-color: #f28482;
}
.time {
    color: #f28482;
    font-size: 1rem;
    font-weight: 700;
    text-shadow: 1px 1px 1px rgb(249, 249, 249);
}
</style>
