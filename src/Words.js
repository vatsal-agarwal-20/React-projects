import wordBank from './wordle_bank.txt';
export const boardDefault= [["","","","",""],
                           ["","","","",""],
                           ["","","","",""],
                           ["","","","",""],
                           ["","","","",""],
                           ["","","","",""]
                        ];


export const generateWordSet = async () =>{

    let wordSet;
    let todaysWord;

    await fetch(wordBank).then((Response) =>
                             Response.text()).then((result)=>{
                                
            const wordArr=result.split("\r\n");
            todaysWord=wordArr[Math.floor(Math.random()* wordArr.length)]
            wordSet=new Set(wordArr);
    });

    return {wordSet,todaysWord};
}