/*

    This method returns a string which is the query for SQL.

    The input for this method is the name of the table, name of the old column and the new column.

*/

// start of the program

function rename_col(dbname,oldname,newname){
    let s = "alter table "+dbname+" rename column "+oldname+" to "+newname+" ;";
    return s;
}

// end of program


