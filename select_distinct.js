/*

    This method returns a string which is the query for SQL.

    The input for this method is the name of the table and an array of column names.

*/

// start of the program

function select_distinct(dbname,arr){
    let s = "select distinct ";
    arr.forEach(ele => {
        s = s + ele + " , ";
    });
    s = s.substring(0,s.length-2) + " from "+dbname+" ;";
    return s;
}

//end of program

