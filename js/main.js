// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"


const sectionEl = document.querySelector(".article__header")
sectionEl.textContent = "Welcome to Chandler's Blog"
console.log(sectionEl)

// const sectionElAll = document.querySelectorAll(".article__header")
// sectionElAll.classlist.add = "important"
// console.log(sectionElAll)

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const sectionEl2 = document.querySelectorAll(".article__header")
for (let index = 0; index < sectionEl2.length; index++) {
sectionEl2[index].classList.add("important")
    
}
// Obtain a reference the element with a class of dashed and remove it.

const sectionEl3 = document.querySelector(".dashed")
console.log(sectionEl3)
sectionEl3.classList.remove("dashed")

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const sectionEl4 = document.querySelector(".article__footer")
console.log(sectionEl4)
sectionEl4.classList.add("goldenrod")