/*

    This method returns a string which is the query for SQL.

    The input for this method is the name of the table and an array containing the names of the columns. This will return those values of the columns given in the order of the array.

*/

// start of program

async function get_data(dbname, arr){
    let r = "select "+commas(arr)+" from "+dbname+" ;"
    return r;
}

function commas(arr){
    let s = "";
    arr.forEach(ele => {
        s = s + ele + ", "
    });
    s=s.substring(0,s.length-2);
    return s;
}

// end of program


