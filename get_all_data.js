/*

    This method returns a string which is the query for SQL.

    The input for this method is the name of the table. It returns a query which when excecuted will give out all the rows of the table.

*/

// start of method 

let dbname;

export async function get_all_data(dbname){
    let s = "select * from " + dbname + " ;";

    return s;
}

// end of method