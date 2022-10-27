export default {
    name: "Input",

    props: {
        modelValue: [String, Number],
        label: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text'
        },
        classes: {
            type: String,
            default: ''
        },
        onFocus: {
            type: Function,
            default: () => {
            }
        },
        onBlur: {
            type: Function,
            default: () => {
            }
        },
    },

    emits: ['update:modelValue'],
}
