fetch("json/story.json")
    .then(function(response) {
        return response.json();
        console.log(story);
        patcheventName(story);
    })

.then(function(story) {
    document.getElementById("mentee_name1").innerHTML += story[0].name;
    document.getElementById("mentee_name2").innerHTML += story[1].name;
    document.getElementById("mentee_name3").innerHTML += story[2].name;
    document.getElementById("mentee_name4").innerHTML += story[3].name;
    document.getElementById("mentee_name5").innerHTML += story[4].name;
    document.getElementById("mentee_name6").innerHTML += story[5].name;
    document.getElementById("mentee_name7").innerHTML += story[6].name;

    document.getElementById("mentee_dest1").innerHTML += story[0].design;
    document.getElementById("mentee_dest2").innerHTML += story[1].design;
    document.getElementById("mentee_dest3").innerHTML += story[2].design;
    document.getElementById("mentee_dest4").innerHTML += story[3].design;
    document.getElementById("mentee_dest5").innerHTML += story[4].design;
    document.getElementById("mentee_dest6").innerHTML += story[5].design;
    document.getElementById("mentee_dest7").innerHTML += story[6].design;

    document.getElementById("mentee_img1").src = story[0].image;
    document.getElementById("mentee_img2").src = story[1].image;
    document.getElementById("mentee_img3").src = story[2].image;
    document.getElementById("mentee_img4").src = story[3].image;
    document.getElementById("mentee_img5").src = story[4].image;
    document.getElementById("mentee_img6").src = story[5].image;
    document.getElementById("mentee_img7").src = story[6].image;
});

function patchname(story) {
    document.getElementById("mentee_name1").innerHTML += story[0].name;
}

function patchimage(story) {
    document.getElementById("mentee_img1").innerHTML += story[0].image;
}

function patchdesign(story) {
    document.getElementById("mentee_dest1").innerHTML += story[0].design;
}

function patchhi(story) {
    document.getElementById("mentee_hi1").innerHTML += data[0].hi;
}

function navigationpage1() {
    window.location.href =
        "https://relaxed-albattani-e261f4.netlify.app/story_page2.html?id=1";
}

function navigationpage2() {
    window.location.href =
        "https://relaxed-albattani-e261f4.netlify.app/story_page2.html?id=2";
}

function navigationpage3() {
    window.location.href =
        "https://relaxed-albattani-e261f4.netlify.app/story_page2.html?id=3";
}

function navigationpage4() {
    window.location.href =
        "https://relaxed-albattani-e261f4.netlify.app/story_page2.html?id=4";
}

function navigationpage5() {
    window.location.href =
        "https://relaxed-albattani-e261f4.netlify.app/story_page2.html?id=5";
}

function navigationpage6() {
    window.location.href =
        "https://relaxed-albattani-e261f4.netlify.app/story_page2.html?id=6";
}

function navigationpage7() {
    window.location.href =
        "https://relaxed-albattani-e261f4.netlify.app/story_page2.html?id=7";
}