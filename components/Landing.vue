<template>
    <div class="wrap">
        <div class="background-container">
            <div v-for="n in 8" class="light" />
            <div class="glass" />
        </div>
        <div class="content-container">
            <div class="info-container">
                <h1>
                    Discove, Collect, and Sell Various Extraordinary NFTS
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio eius dolor nihil nam excepturi!</p>

                <div class="landing-btn-container">
                    <button class="landing-btn" type="button">Explore</button>
                    <button class="landing-outlined-btn" type="button">About</button>
                </div>
            </div>

            <div class="landing-image-container">
                <div class="landing-image">
                    <img src="/game-website/landing-image-1.jpg" />
                </div>
                <div class="landing-image">
                    <img src="/game-website/landing-image-2.jpg" />
                </div>
                <div class="landing-image">
                    <img src="/game-website/landing-image-3.jpg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        import('@/assets/js/animation.js');
    }
}
</script>

<style scoped>
.landing-btn-container {
    display: flex;
    margin-top: 4rem;
}

.landing-outlined-btn {
    background-color: transparent;
    padding: 16px 70px;
    border: 3px solid #3A2B59;
    border-radius: 8px;
    margin-left: 1.5rem;
    text-transform: uppercase;
    transition: all 600ms;
}

.landing-outlined-btn:hover {
    background-color: #3A2B59;
}

.landing-btn {
    background-image: linear-gradient(to right, #24C6DC 0%, #514A9D 51%, #24C6DC 100%);
    padding: 16px 70px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    border-radius: 8px;
    display: block;
    font-size: 0.9rem;
}

.landing-btn:hover {

    background-position: right center;
    text-decoration: none;
}

.info-container {
    width: 50%;
    font-family: "Roboto";
    padding-left: 150px;
    padding-top: 40px;
    line-height: 1.4;
}

.info-container h1 {
    font-size: 3.5rem;
}

.info-container p {
    color: #71758E;
    font-size: 0.9rem;
    margin-top: 3rem;
}

.wrap {
    position: relative;
    width: 100%;
    height: 100vh;
}

.content-container {
    position: absolute;
    width: 100%;
    height: 100%;
    padding-top: 100px;
    display: flex;
}

.background-container {
    position: absolute;
    width: 100%;
    height: 100%;
}

.glass {
    position: absolute;
    width: 100%;
    height: 180%;
    background: rgba(12, 13, 33, 0.507);
    backdrop-filter: blur(90px);
    -webkit-backdrop-filter: blur(6.8px);
}

.theme--light .glass {
    background: rgba(255, 255, 255, 0.312);
}

.landing-image-container {
    display: flex;
    justify-content: center;
    width: 50%;
}

.landing-image {
    position: relative;
    width: 180px;
    height: 400px;
    transform: skew(-22deg);
    overflow: hidden;
}

.landing-image img {
    position: absolute;
    width: 200%;
    height: 100%;
    transform: skew(22deg) translateX(-25%);
    object-fit: cover;
    object-position: center;
    transition: all 500ms;
}

.landing-image img:hover {
    transform: scale(1.1) skew(22deg) translateX(-25%);
    object-position: right;
}

.landing-image:nth-child(2) {
    margin-top: 3rem;
    margin-left: 8px;
}

.landing-image:nth-child(3) {
    margin-top: 6rem;
    margin-left: 8px;
}

.light {
    position: absolute;
    border-radius: 100%;
}

.light:nth-child(1) {
    background-color: mediumseagreen;
    top: 50%;
    left: 40%;
    width: 150px;
    height: 150px;
}

.light:nth-child(2) {
    left: 10%;
    top: 10%;
    width: 200px;
    height: 200px;
    background-color: mediumorchid;
}

.light:nth-child(3) {
    background-color: rgba(255, 255, 255, 0.679);
    width: 400px;
    height: 400px;
    right: -200px;
    top: -200px;
}

.theme--light .light:nth-child(3) {
    background-color: rgba(132, 132, 132, 0.679);

}

.light:nth-child(4) {
    width: 300px;
    height: 300px;
    background-color: #840fcd91;
    bottom: -150px;
    left: -100px;
}

.light:nth-child(5) {
    width: 500px;
    height: 500px;
    background-color: #3755ff17;
    top: 30%;
    left: 10%;
}

@media only screen and (max-width: 600px) {
    .wrap {
        height: 120vh;
    }

    .content-container {
        flex-direction: column;
    }

    .landing-image-container {
        order: -1;
        width: 100%;
    }

    .info-container {
        width: 100%;
        padding: 2rem;
    }

    .info-container h1 {
        font-size: 2.5rem;
    }

    .landing-image {
        width: 24%;
        height: 30vh;
    }

    .landing-btn,
    .landing-outlined-btn {
        padding: 16px 35px;
    }
}</style>