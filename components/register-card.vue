<template>
    <div class="register-card">
        <div class="register-blur">
            <div class="color1"></div>
            <div class="color2"></div>
            <div class="color3"></div>
            <div class="color4"></div>
        </div>
        <div class="register-content">
            <div class="row">
                <div class="logo">
                    <img src="images/logo.svg" alt="">
                </div>
                <p class="mb-1">{{paragraph}}</p>
                <h1 class="mb-0">{{title}}</h1>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        paragraph:String,
        title:String,
    }
}
</script>