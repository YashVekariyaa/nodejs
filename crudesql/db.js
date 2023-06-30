import mysql from "mysql2"

var connection = mysql.createConnection({
  host: "localhost",
  port: 3301,
  database: "crude",
  user: "root",
  password: ""
});

connection.connect( function (err){
    if(err){
        console.log(err)
    }else{
        console.log('connected')
    }
})



export default connection;