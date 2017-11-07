<template>
    <div>
        index index  index  {{storeState}} {{$store.state.count}}{{$store.state.menuData}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            storeState: this.$store.state.count
        }
    }
}
</script>