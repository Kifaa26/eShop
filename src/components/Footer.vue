<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead">Aakifah Palekar &copy; <span class="shadow">{{ cYear }}</span></p>
        </div>
    </footer>
</template>
<script>
export default {
    name: "FooterComp",
    data() {
        return {
            cYear: new Date().getUTCFullYear()
        }
    }
}
</script>
<style scoped>
footer {
    color: #fff;
    background: #000;
    font-family: "JetBrains Mono", monospace;
    font-optical-sizing: auto;
    font-style: normal;
    font-style: normal;
    bottom: 0;
}
footer p {
    padding-top: 2rem;
}
</style>






