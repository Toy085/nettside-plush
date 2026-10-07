<script lang="ts">
    let currentYear = new Date().getFullYear();
</script>

<footer class="flex gap-5">
    <h3>© {currentYear}</h3>
    <div class="float-right flex gap-5">
        <a href="/privacy" class="text-gray-500 hover:text-black">Privacy Policy</a>
        <a href="/terms" class="text-gray-500 hover:text-black">Terms of Service</a>
        <a href="/about-us" class="text-gray-500 hover:text-black">About us</a>
        <div>
            <!--Add social media icons-->
        </div>
    </div>
</footer>

<style>
    footer {
        background-color: white;
        height: 50px;
        width: 100vw;
        display: flex;
        align-items: center;
        padding: 0 15px;
    }
</style>