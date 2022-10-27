<template>
    <div :class="`input-field ${classes}`">
        <div class="input-container">
            <input
                :class="`${type}-input input`"
                @focus="onFocus"
                @blur="onBlur"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
            />
        </div>
        <div class="label">
            {{label}}
        </div>
    </div>
</template>

<script src="./script.js" />

<style src="./index.scss" lang="scss" />
