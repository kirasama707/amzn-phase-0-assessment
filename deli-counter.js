// 1. Write your functions here
const katzDeli = []


// 2. Example Usage

// const katzDeli = []

// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"


//need to make an for loops cause we need to iterate through the array to different customers.
//need to make an .push so we can add customers to an array.
// need to use .shift cause it removes the first element unlike pop which only removes the last element.

//console.log(nameOfCustomer = "Ada", "Grace", "Kent")

function takeANumber(katzLineQue, nameOfCustomer) {
    katzLineQue.push(nameOfCustomer);
    for (let [index, value] of katzDeli.entries()){
        if (value === nameOfCustomer)
        console.log(`welcome, ${value}. you are currently number ${index +=1} in line.`)
    }

}


//input array
//output current place in line
//side effects

//step one- need to use the join method.
let lineQue = []

function line (katzLineQue) {
    for(let i = 0; i < katzLineQue.length; i ++) {
        let newCustomer = katzLineQue[i];
        lineQue.push(' ' + [i + 1] + '. ' + newCustomer)
        
    }
    if(katzLineQue === 0) {
        `the line is currently empty`
    }
    else lineUpdate = lineQue.splice(0,3)
    return "the line is currently" + `${lineUpdate.join(" ")}`

}

   function nowServing(katzLineQue) {
    if(katzLineQue.length > []) {
        return console.log(`"currently serving ${katzLineQue.shift()}"`);
    } else {
        return "there is nobody waiting to be served!";
    }
}
takeANumber(katzDeli, "Ada")
takeANumber(katzDeli, "Grace")
takeANumber(katzDeli, "Kent")
console.log(line(katzDeli))
nowServing(katzDeli)
console.log(line(katzDeli))
takeANumber(katzDeli, "Matz")
console.log(line(katzDeli))
nowServing(katzDeli)
console.log(line(katzDeli))

 