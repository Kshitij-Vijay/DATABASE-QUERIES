/*

    This method returns a string which is the query for SQL.

    The input for this method is the name of the table and an array containing the list of column names and datatypes in the order.

*/

// start of program

export async function create_table(dbname,column,type){
    let r = "create table " + dbname + " ( ";
    for(var i=0;i<column.length;i++){
        r = r + column[i] + " " + type[i] + " , ";
    }
    r = r.substring(r.length - 2, r.length) + " );";
    return r;
}

// end of program
