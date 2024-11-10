export const stringcutter = (word: string, number: number) => {
    if(word.length>number){
        return word.slice(0, number-3)+'...';
    }else{
        return word;
    }
}

export const priceformat = (price: number) => {
    const str = price.toString();
    let counter = 1
    let priceStr = '';
    for(let i=str.length-1; i>=0; i--){
        if(counter===3 && i!==0){
            priceStr = ','+str[i]+priceStr;
            counter=1
        }else{
            priceStr = str[i]+priceStr;
            counter++;
        }
    }

    return priceStr;
}

export const getMonthlyRange = (income: number) => { /*income is in the range of 1-10 */
    let min;
    let max;

    if(income===1){
        min=1;
        max=3;
    }else{
        if(income===10){
            min=8;
            max=10;
        }else{
            min=income-1;
            max=income+1;
        }
    }

    return '₦'+min+'00,000.00-₦'+max+'00,000.00';
}