let baseURL = 'http://numbersapi.com';
let favNumber = 5;

//1
async function part1(){
    let res = await $.getJSON(`${baseURL}/${favNumber}?json`)
    console.log(res)
}

//2
async function part2(){
    let favNumbers = [1,2,3]
    let res = await $.getJSON(`${baseURL}/${favNumbers}?json`)
    console.log(res)
}

//3
async function part3() {
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }