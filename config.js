// let fps = 30;
const cardWidth = 75;
const cardCount = 20;

const maxSpeed = 150;
const maxProximity = 500;
const maxFlatten = 1.5;
const maxScale = 2;
const maxPerspective = 200;

const devMode = false;

const myImages = [
    {
        url: "https://source.unsplash.com/a-walk-in-shower-sitting-next-to-a-bathroom-pftumwnUgSQ",
    },
    {
        url: "https://source.unsplash.com/the-sun-is-setting-over-the-desert-landscape-H4GL1O4Kuxo",
    },
    {
        url: "https://source.unsplash.com/a-building-carved-into-the-side-of-a-cliff-n5f0INq5uKI",
    },
    {
        url: "https://source.unsplash.com/a-narrow-street-with-people-walking-down-it-6GHOsNW3rI4",
    },
    {
        url: "https://source.unsplash.com/a-large-fireworks-is-lit-up-in-the-night-sky-gidi26ptYcs",
    },
    {
        url: "https://source.unsplash.com/a-plane-is-flying-in-the-sky-at-sunset-ORjtcInPH0s",
    },
    {
        url: "https://source.unsplash.com/the-sun-is-setting-over-a-beach-with-a-lifeguard-tower-91vxOyYuXPs",
    },
    {
        url: "https://source.unsplash.com/an-aerial-view-of-a-city-at-night-p_n0kx9WG5U",
    },
    {
        url: "https://source.unsplash.com/the-interior-of-an-old-car-with-a-steering-wheel-7WHW4a7xUFc",
    },
    {
        url: "https://source.unsplash.com/a-city-street-filled-with-lots-of-tall-buildings-K8toU5IiohE",
    },
    {
        url: "https://source.unsplash.com/the-night-sky-is-filled-with-stars-and-trees-DNHVBdt6vnA",
    },
    {
        url: "https://source.unsplash.com/eM-hfERmZ-M",
    },
    {
        url: "https://source.unsplash.com/a-narrow-slot-in-the-side-of-a-canyon-IaF0rM6i20o",
    },
    {
        url: "https://source.unsplash.com/a-plane-flying-through-a-cloudy-blue-sky-TFg35jn95OU",
    },
    {
        url: "https://source.unsplash.com/the-golden-gate-bridge-is-lit-up-at-night-Macs-aqy6Ek",
    },
    {
        url: "https://source.unsplash.com/a-man-walking-across-a-bridge-at-night-sCV96SDYUJk",
    },
    {
        url: "https://source.unsplash.com/a-very-tall-building-with-a-sky-background-NP7Lgy_BKGA",
    },
    {
        url: "https://source.unsplash.com/a-multicolored-object-with-a-smiley-face-on-it-1J-CM0YD8sQ",
    },
    {
        url: "https://source.unsplash.com/a-city-skyline-at-night-with-a-lit-up-skyscraper-FXKohzaR3Uo",
    },
    {
        url: "https://source.unsplash.com/aWHKsYkbCi8",
    },
]
