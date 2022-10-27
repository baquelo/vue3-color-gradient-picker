<template>
    <Input
        v-model="hexValue"
        label="hex"
        @input="changeHex"
        :onFocus="() => inProgress = true"
        :onBlur="() => inProgress = false"
        :inProgress="inProgress"
        classes="hex"
    />
</template>

<script src="./script.js" />
