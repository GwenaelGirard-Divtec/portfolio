<template>
    <router-view />
</template>

<style lang="scss">
* {
    box-sizing: border-box;
    font-family: $body-font;
    color: $color;
}

html {
  scroll-behavior: smooth;
}

body {
    background-color: $background;
}

section {
    color: red;
    padding: 16px;
    min-height: calc(100vh - $navbar-height);
}

h1,
h2,
h3,
h4,
h5,
h6,
.title {
    font-family: $heading-font;
    margin: 0;
}

h3 {
    font-size: 2em;
    border-bottom: 2px solid $color;
}

.glass {
    $glass-color: $color;
    $glass-opacity: 0.2;
    $glass-blur: 2px;
    background: rgba(red($glass-color), green($glass-color), blue($glass-color), $glass-opacity);
    -webkit-backdrop-filter: blur($glass-blur);
    backdrop-filter: blur($glass-blur);
    border: 1px solid rgba(red($glass-color), green($glass-color), blue($glass-color), $glass-opacity / 2);
}

.glass-dark {
    $glass-color: $background;
    $glass-opacity: 0.2;
    $glass-blur: 2px;
    background: rgba(red($glass-color), green($glass-color), blue($glass-color), $glass-opacity);
    -webkit-backdrop-filter: blur($glass-blur);
    backdrop-filter: blur($glass-blur);
    border: 1px solid rgba(red($glass-color), green($glass-color), blue($glass-color), $glass-opacity / 2);
}
</style>
