//loader
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.querySelector('.preloader');
    const minimumLoadingTime = 3700; // 2 seconds minimum display time
    const startTime = Date.now();

    window.addEventListener('load', function() {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(minimumLoadingTime - elapsedTime, 0);

        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500); // Wait for fade animation to complete
        }, remainingTime);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slide = document.querySelector('.slide');
    let intervalId;

    function moveNext() {
        let items = document.querySelectorAll('.item');
        slide.appendChild(items[0]);
    }

    function movePrev() {
        let items = document.querySelectorAll('.item');
        slide.prepend(items[items.length - 1]);
    }

    function startAutoSlide() {
        intervalId = setInterval(moveNext, 10000);
    }

    function stopAutoSlide() {
        clearInterval(intervalId);
    }

    next.addEventListener('click', function () {
        moveNext();
        stopAutoSlide();
        startAutoSlide();
    });

    prev.addEventListener('click', function () {
        movePrev();
        stopAutoSlide();
        startAutoSlide();
    });

    // Start auto-sliding
    startAutoSlide();
});
//To load different set of images 
window.onload = function() {
    // Get the value of the 'game' parameter from the URL
    const { game } = Qs.parse(location.search, { ignoreQueryPrefix: true });

    // Define the background images for Valorant and BGMI
    const valorantImages = [
        "https://res.cloudinary.com/dq2skbvkx/image/upload/v1733828214/IMG20230310140627_hahwzr.jpg",
        "https://res.cloudinary.com/dq2skbvkx/image/upload/v1734722838/DSC00332_1_kho9eh_qr24it.jpg",
        "https://res.cloudinary.com/dq2skbvkx/image/upload/v1734723078/valo1_1_hczqrv.jpg",
        "https://res.cloudinary.com/dq2skbvkx/image/upload/v1734211711/IMG20230310130447_amr2yc_gzqaii.jpg",
        "https://res.cloudinary.com/duf3hruwc/image/upload/v1733854721/lh0hizd1w4a7pku1kran.jpg"
    ];
    
    const bgmiImages = [
        "https://res.cloudinary.com/duf3hruwc/image/upload/v1733854229/rfjmck5ccikaiqomfzzi.jpg",
        "https://res.cloudinary.com/duf3hruwc/image/upload/v1733854229/j3hjx9jln76n6tw07dqf.jpg",
        "https://res.cloudinary.com/duf3hruwc/image/upload/v1733853245/jpq1qwiy0ytgyobszkdc.jpg",
        "https://res.cloudinary.com/dq2skbvkx/image/upload/v1733930499/b70cvd0i8orkzmtfajxp.jpg",
        "https://wallpaperaccess.com/thumb/9905503.jpg",
        
    ];


    const Fifa=["https://res.cloudinary.com/dq2skbvkx/image/upload/v1734722916/fifa_1_ybnbjr.jpg",
    "https://res.cloudinary.com/dq2skbvkx/image/upload/v1733844753/ropcu3koznwoiqrjoxq4.jpg",
    "https://res.cloudinary.com/dq2skbvkx/image/upload/v1733828217/DSC06719_hr5tlg.jpg"
,"https://res.cloudinary.com/duf3hruwc/image/upload/v1733856393/uyntqhckfnfh6fblqslq.jpg",
"https://res.cloudinary.com/dq2skbvkx/image/upload/v1734722775/s9xnodyzw3r3kmbp5ev1_1_m5iw8j.jpg"]

    const Minecraft=["https://res.cloudinary.com/duf3hruwc/image/upload/v1733849274/kois6hhlo6l9o6jpqiw4.jpg",
    "https://res.cloudinary.com/duf3hruwc/image/upload/v1733849273/nhrxq0p3f7gejgcmcpd4.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733849272/yd5k4x2firmmjbjwcaus.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733849275/lodedcxgwfqoavaqtyd3.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733854723/ashe5bghgm2izazfbxmr.jpg",
]

const MortalKombat=["https://res.cloudinary.com/dq2skbvkx/image/upload/v1733844752/ma2pzuojuj6nor5xn5eq.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733855768/gm9mrnhelyk8as2dbpvh.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1734720758/WhatsApp_Image_2024-12-09_at_17.11.10_59d08aaf_ukapfg.jpg",
"https://res.cloudinary.com/dq2skbvkx/image/upload/v1733844752/ma2pzuojuj6nor5xn5eq.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733855768/gm9mrnhelyk8as2dbpvh.jpg",
]

const Rocket=["https://res.cloudinary.com/duf3hruwc/image/upload/v1733849275/fygb6uu8njtq9b13uxwx.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733849272/ekhuofivk6lxrqifsrab.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733849271/jxvpkbmq0fnascpc1juz.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733854723/bwvztdnngjelc2w7j3g2.jpg",
"https://res.cloudinary.com/duf3hruwc/image/upload/v1733854723/eqohcrr3kar4bgvidhsg.jpg"]

    // Select all slide items
    const slideItems = document.querySelectorAll('.slide .item');
    const slideText = document.querySelectorAll('.slide .item .content');

    // Function to set background images based on the game
    function setBackgroundImages(images) {
        slideItems.forEach((item, index) => {
            // Set the background image for each slide
            if (images[index]) {
                item.style.backgroundImage = `url(${images[index]})`;
            }
        });
    }
    // Function to set background images based on the game
    function setText(text) {
        slideText.forEach((item, index) => {

            if (text[index]) {
                item.innerHTML = `<h1 style="color:white">${text[index]}</h1>`;
            }
        });
    }
    let valoText=["Glitchpop 2.0","Avalanche 2.0","Glitchpop 3.0","Glitchpop 2.0","Glitchpop 3.0"]
    let fifaText=["Glitchpop 3.0","T vs M","Glitchpop 3.0","Glitchpop 3.0","Glitchpop 3.0"]
    let Mine=["Cubewars","Cubewars","Cubewars","Cubewars","Cubewars"]
    let rocket=["Octane 1.0","Octane 1.0","Octane 1.0","Octane 1.0","Octane 1.0"]
    let tekken=["T VS M","T VS M","IronWill","T VS M","T VS M"]
    let bgmiText=["UnderDogs","UnderDogs","UnderDogs","Freshers Cup","Freshers Cup","Freshers Cup"]
    // Check the game and set the respective images
    if (game === 'Valorant') {
        setBackgroundImages(valorantImages);
        setText(valoText);

    } else if (game === 'BGMI') {
        setBackgroundImages(bgmiImages);
        setText(bgmiText);
    }
    else if(game==='Fifa'){
        setBackgroundImages(Fifa);
        setText(fifaText);
    }
    else if(game==='Minecraft'){
        setBackgroundImages(Minecraft);
        setText(Mine);
    }
    else if(game==='MortalKombat'){
        setBackgroundImages(MortalKombat);
        setText(tekken);
    }
    else if(game==='Rocket'){
        setBackgroundImages(Rocket);
        setText(rocket);
    }
}
