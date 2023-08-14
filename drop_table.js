/*

    this method drops the sql table.

    The input for this method is the name of the table.
*/

// start of program

function drop_table (dbname){
    let s = "drop table "+dbname+" ;";
    return s;
}

// end of program