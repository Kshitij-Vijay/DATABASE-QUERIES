/*

    This method returns a string which is the query for SQL.

    The input for this method is the name of the table and the new name for it.
*/

// start of program

function rename_table (dbname, newname){
    let s = "alter table "+dbname+" rename column "+dbname+" to "+newname+" ;";
    return s;
}

// end of program