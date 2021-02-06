<template>
<span :class="`poke-type ${typeClass} ${sizeClass}`">
    {{type}}
</span>
</template>
<script>
export default {
    props: {
        type: String,
        size: Number,
    },
    computed: {
        typeClass() {
            return `poke-type-${this.type.toLowerCase()}`
        },
        sizeClass() {
            const size = this.size || 1;
            return `poke-type-${size}x`;
        }
    }
}
</script>
<style scoped>

.poke-type {
    padding: 1.5px 2.5px;
    margin: 1.5px;
    width: 55px;
    display: inline-block;
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 12px;
}

.poke-type-2x  {
    width: 70px;
    padding: 3px 5px;
    font-size: 14px;
}

.poke-type-electric {
    background: #eed535;
}
.poke-type-flying {
    background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
}
.poke-type-rock {
    background-color: #a38c21;
}
.poke-type-water {
    background-color: #4592c4;
}
.poke-type-ice {
    background-color: #51c4e7;
}
.poke-type-fire {
    background-color:#fd7d24;
}
.poke-type-normal {
    background-color:#a4acaf;
}
.poke-type-poison {
    background-color:#b97fc9;
}
.poke-type-bug {
    background-color:#729f3f;
}
.poke-type-fighting {
    background-color:#d56723;;
}
.poke-type-fairy {
    background-color:#fdb9e9;
}
.poke-type-dark {
    background-color:#707070;
}
.poke-type-ground {
    background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%); 
}
.poke-type-psychic {
    background-color:#f366b9;;
}
.poke-type-steel {
    background-color:#9eb7b8;
}
.poke-type-ghost {
    background-color:#7b62a3;
}
.poke-type-grass {
    background-color:#9bcc50;
}
.poke-type-dragon {
    background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
}
</style>