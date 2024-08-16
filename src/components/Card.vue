<template>
 <div class="card">
        <div class="card-header">
            <slot name="card-header"></slot>
        </div>
        <div class="card-body">
            <slot name="card-body"></slot>
        </div>
    </div>
</template>

<script>

export default {
name: 'CardComp'
}
</script>

<style scoped>

</style>