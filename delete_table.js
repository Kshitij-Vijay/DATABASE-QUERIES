/*

    this method deletes the sql table.

    The input for this method is the name of the table.
*/

// start of program

function delete_table (dbname){
    let s = "delete from "+dbname+" ;";
    return s;
}

// end of program