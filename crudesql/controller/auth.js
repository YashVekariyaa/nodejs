import connection from "../db.js";

export const getUsers = (req, res) => {
    const q = "SELECT * FROM user"

    connection.query(q, (err,data ) => {
        if(err) return res.json(err);
        return res.json(data);
    }); 
}   

export const authRegister = (req, res) => {

    const q = "INSERT INTO user (`firstName`, `lastName`,`email`,`mobile`,`address`) VALUES (?)"
0
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.mobile,
        req.body.address,
    ];

    connection.query(q, [values], (err, result) => {
        if (err) {
          return res.json(err);
        }
    
        const response = {
          id: result.insertId,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          mobile: req.body.mobile,
          address: req.body.address
        };
    
        return res.json(response);
      });
};

export const authEdit = (req, res) => {

    const userid = req.params.id;
    const q = "UPDATE user SET `firstName` = ?, `lastName` = ?, `email` = ?, `mobile` = ?, `address` = ? WHERE id = ?";

    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.mobile,
        req.body.address,
    ];
    
    connection.query(q, [...values, userid], (err, data) => {
        if(err) return res.json(err);

        const response = {
            id: userid,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            mobile: req.body.mobile,
            address: req.body.address
          };
      
          return res.json(response);
    }); 
};

export const authDelete = (req, res) => {

    const userid = req.params.id;
    const q = "DELETE FROM user WHERE id = ?";
    
    connection.query(q, [userid], (err, data) => {
        if(err) return res.json(err);
        return res.json("User has been deleted successfully.");
    }); 
};


