const superheroes = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지'
];

for(let i; i<superheroes.length; i++) {
    console.log(superheroes[i]);
}

superheroes.forEach(function(hero) {
    console.log(hero);
});

superheroes.forEach(hero => {
    console.log(hero);
});