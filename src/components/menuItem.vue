<template>
    <div>
        <a href="" class="menu-a" :class="{'borderBottomHide':isBorderBottomHide}">
            <img class="left-img" :src="url" alt="">
            <div>{{info}}</div>
            <img class="more-img" src="/static/img/arrow_right_gray.png" alt="">
        </a>
    </div>
</template>

<script>
export default {
    props: ['url','info','isBorderBottomHide']
}
</script>

<style lang="scss">
    .menu-a {
        width: 100%;
        height: 99px;
        line-height: 99px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e0e0e0;
        padding-right: 25px;
        box-sizing: border-box;
        .left-img {
          flex: 0 0 34px;
          width: 34px;
          height: 37px;
          margin-right: 34px;
        }
        div {
          flex: 1;
        }
        .more-img {
          flex: 0 0 14px;
          width: 14px;
          height: 25px;
        }
    }
</style>
