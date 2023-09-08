const links = document.querySelectorAll(".link-tree li")
const getRandomPosition = (min,max) => {
    return Math.round(Math.random() * (max - min) + min)
}

console.log(getRandomPosition(0,100))

for(let i =0; i < links.length; i ++){
    links[i].style.top = `${getRandomPosition(0, window.innerHeight)}px`;
    links[i].style.left = `${getRandomPosition(0, window.innerHeight)}px`;
}

//1. HTML DOM엘리먼트 불러오기
//2. Random Position 값 구하기
//3. HTML DOM엘리먼트 스타일에 Random Position 적용하기