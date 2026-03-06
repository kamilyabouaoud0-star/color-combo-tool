const book = document.getElementById("book");
const cover = document.getElementById("cover");

/* 30+ COLOR COMBINATIONS */
let combos = [
["#1E3A5F","Deep Navy","#F4EDE4","Warm Ivory"],
["#C9184A","Raspberry","#FFE5EC","Blush Pink"],
["#264653","Petrol Blue","#E9C46A","Soft Mustard"],
["#3A5A40","Forest Green","#DAD7CD","Linen"],
["#6D597A","Muted Plum","#F2E9E4","Pale Rose"],
["#2B2D42","Midnight","#EDF2F4","Cloud White"],
["#9A031E","Wine Red","#FB8B24","Burnt Orange"],
["#0F4C5C","Ocean Teal","#E36414","Amber"],
["#344E41","Deep Moss","#A3B18A","Sage"],
["#14213D","Royal Navy","#FCA311","Golden Ochre"],
["#3D405B","Slate Blue","#F2CC8F","Sand"],
["#7B2CBF","Royal Purple","#FFD6FF","Soft Lavender"],
["#006D77","Deep Cyan","#FFDDD2","Peach Cream"],
["#283618","Dark Olive","#FEFAE0","Vanilla"],
["#8D0801","Crimson","#FFC6FF","Light Pink"],
["#005F73","Teal Blue","#EE9B00","Golden Sun"],
["#4A4E69","Indigo Gray","#F2E9E4","Dust Rose"],
["#2A9D8F","Sea Green","#E9C46A","Honey"],
["#6A040F","Dark Red","#F48C06","Orange Glow"],
["#22223B","Charcoal Blue","#C9ADA7","Soft Mauve"],
["#3C096C","Deep Violet","#F72585","Pink Pop"],
["#0A9396","Turquoise","#94D2BD","Mint"],
["#5F0F40","Berry","#FB8B24","Tangerine"],
["#001219","Midnight Blue","#E9D8A6","Beige Sand"],
["#4F772D","Green Leaf","#90A955","Light Moss"],
["#9B2226","Ruby","#FFE6A7","Butter"],
["#023047","Dark Ocean","#FFB703","Sunshine"],
["#6C584C","Mocha","#DDBEA9","Cream Latte"],
["#7F5539","Brown Sugar","#FFE8D6","Light Peach"],
["#2E294E","Deep Indigo","#FFD400","Bright Gold"]
];

/* Randomize every time page loads */
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

combos = shuffle(combos);

/* Open Cover */
cover.addEventListener("click", () => {
    cover.classList.add("flipped");
    createPages();
});

function createPages() {

    combos.forEach((combo, index) => {

        const page = document.createElement("div");
        page.classList.add("page");
        page.style.zIndex = combos.length - index;

        page.innerHTML = `
            <div class="left">
                <div class="color-box" style="background:${combo[0]}"></div>
                <div class="color-name">${combo[1]}</div>
            </div>
            <div class="right">
                <div class="color-box" style="background:${combo[2]}"></div>
                <div class="color-name">${combo[3]}</div>
            </div>
        `;

        page.addEventListener("click", function(e) {
            e.stopPropagation();
            if (!this.classList.contains("flipped")) {
                this.classList.add("flipped");
            }
        });

        book.appendChild(page);
    });
}