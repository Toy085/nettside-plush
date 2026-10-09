<script lang="ts">
    // Social media icons
    import githubIcon from "$lib/img/icons/Octicons-mark-github.svg";
    import instagramIcon from "$lib/img/icons/Instagram_logo_2022.svg";
    import googlePlusIcon from "$lib/img/icons/Google_Plus_icon_(2011-2015),_shiny.svg";

    let currentYear = new Date().getFullYear();
</script>

<footer class="flex gap-5 w-full">
    <h3>© {currentYear}</h3>
    <div class="ml-auto flex gap-5">
        <a href="/privacy" class="text-gray-500 hover:text-black sm:text-base text-[0.7rem]">Privacy Policy</a>
        <a href="/terms" class="text-gray-500 hover:text-black sm:text-base text-[0.7rem]">Terms of Service</a>
        <a href="/about-us" class="text-gray-500 hover:text-black sm:text-base text-[0.7rem]">About us</a>
        <div class="sm:visible invisible flex gap-3 social-icons">
            <a href="/insta"><img class="h-5" src={instagramIcon}></a>
            <a href="https://blog.google/innovation-and-ai/technology/safety-security/expediting-changes-google-plus/"><img class="h-5" src={googlePlusIcon}></a>
            <a href="https://github.com/Toy085/nettside-plush"><img class="h-5" src={githubIcon}></a>
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
    @media (width < 40rem) {
        .social-icons {
            display: none;
        }
    }
</style>