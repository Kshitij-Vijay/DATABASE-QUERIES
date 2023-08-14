/*

    This method returns a string which is the query for SQL.

    The input for this method is the name of the table. 

*/

// start of the program

function count_all(dbname){
    let s = "select count(*) from "+dbname+" ;";
    return s;
}

// end of program

