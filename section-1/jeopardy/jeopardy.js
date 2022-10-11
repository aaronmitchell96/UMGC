const numCategories = 6;
//select gameboard HTML
const gameBoard = document.getElementById('gameboard')
//built function to where you input category id,
//and function loads corresponding category DATA
async function getCategories(catID){
    const res = await axios.get(`http://jservice.io/api/category?id=${catID}`)
    return res;
}
//assuming 2700 category options
//return array of 6 random category id's
function randomCategoryIDS(numCategories){
    let categories = []
    for (let i = 0; i<numCategories; i++){
        categories[i] = Math.floor(Math.random() * 2700)
    }
    return categories
}

//get api data to get categories
//return our category array for future acsess 
async function makeCategoryHeader(){
    let resultsArr = [];
    const categoryTr = document.createElement('tr');
    let catArr = randomCategoryIDS(numCategories);
    for (let i = 0; i<numCategories; i++){
        const randCategory = await getCategories(catArr[i])
        resultsArr.push(randCategory);
        const categoryTh = document.createElement('th');
        categoryTh.innerText = randCategory.data.title;
        categoryTr.appendChild(categoryTh);
    }
    gameBoard.appendChild(categoryTr);
    return resultsArr;

}
//make game board function that when called creates 6x6 table
//in table should be categories,questions,and answers for 
//
async function makeGameBody(){
    //save complete api data to an object
    let res = await makeCategoryHeader();
    console.log(res)
    //create table with proper class names for coresponding category
    //and append to gameboard 
    for (let i = 1; i<numCategories; i++){
        const clueTr = document.createElement('tr');
        for (let i = 0; i<numCategories; i++){
            const clueTd = document.createElement('td');
            clueTd.innerText = '?';
            clueTd.className = res[i].data.id;
            clueTr.appendChild(clueTd);
        }
        gameBoard.appendChild(clueTr);
    }

    //use our 'res' object from earlier to pull clues 
    //and place them inside of a td using jquery 
    for (let i = 0; i<numCategories; i++){
        const td = $(`.${res[i].data.id}`);
        td.on("click",function(){
            //find out how big our 'clue' array is and generate 
            //a random number so that we can display a random clue 
            let clueAmount = res[i].data.clues.length;
            let randClue = Math.floor(Math.random() * clueAmount);
            this.innerText = res[i].data.clues[randClue].question;
            //remove clue from array so we dont duplicate clues    
            $(this).on('click',function(){
                this.innerText = res[i].data.clues[randClue].answer;
                res[i].data.clues.splice(randClue,1)
                $(this).off();
            })
        })
    }
}

makeGameBody()
$('button').on('click',function(){
    location.reload();
})


