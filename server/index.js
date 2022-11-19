const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "employeeSystem",
});

//POST request to create new employee
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//GET all employees
app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all employees ordered by name ASC
app.get("/employeesName", (req, res) => {
  db.query("SELECT * FROM employees ORDER By name", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all employees ordered by name DESC
app.get("/employeesNameDesc", (req, res) => {
  db.query("SELECT * FROM employees ORDER By name DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all employees ordered by age ASC
app.get("/employeesAge", (req, res) => {
  db.query("SELECT * FROM employees ORDER By age", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all employees ordered by age DESC
app.get("/employeesAgeDesc", (req, res) => {
  db.query("SELECT * FROM employees ORDER By age DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all employees ordered by country ASC
app.get("/employeesCountry", (req, res) => {
  db.query("SELECT * FROM employees ORDER By country", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all employees ordered by country DESC
app.get("/employeesCountryDesc", (req, res) => {
  db.query("SELECT * FROM employees ORDER By country DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all employees ordered by position ASC
app.get("/employeesPosition", (req, res) => {
  db.query("SELECT * FROM employees ORDER By position", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all employees ordered by position DESC
app.get("/employeesPositionDesc", (req, res) => {
  db.query("SELECT * FROM employees ORDER By position DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all employees ordered by wage ASC
app.get("/employeesWage", (req, res) => {
  db.query("SELECT * FROM employees ORDER By wage", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all employees ordered by wage DESC
app.get("/employeesWageDesc", (req, res) => {
  db.query("SELECT * FROM employees ORDER By wage DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET employee by name
app.get("/name/:name", (req, res) => {
  const input = req.params.name;
  db.query("SELECT * FROM employees WHERE name = ?", input, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET employee by age
app.get("/age/:age", (req, res) => {
  const input = parseInt(req.params.age);
  db.query("SELECT * FROM employees WHERE age = ?", input, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET employee by country
app.get("/country/:country", (req, res) => {
  const input = req.params.country;
  db.query(
    "SELECT * FROM employees WHERE country = ?",
    input,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//GET employee by position
app.get("/position/:position", (req, res) => {
  const input = req.params.position;
  db.query(
    "SELECT * FROM employees WHERE position = ?",
    input,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//GET employee by wage
app.get("/wage/:wage", (req, res) => {
  const input = parseInt(req.params.wage);
  db.query("SELECT * FROM employees WHERE wage = ?", input, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//PUT request to update name
app.put("/updateName", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  db.query(
    "UPDATE employees SET name = ? WHERE id = ?",
    [name, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//PUT request to update age
app.put("/updateAge", (req, res) => {
  const id = req.body.id;
  const age = parseInt(req.body.age);
  db.query(
    "UPDATE employees SET age = ? WHERE id = ?",
    [age, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//PUT request to update Country
app.put("/updateCountry", (req, res) => {
  const id = req.body.id;
  const country = req.body.country;
  db.query(
    "UPDATE employees SET country = ? WHERE id = ?",
    [country, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//PUT request to update position
app.put("/updatePosition", (req, res) => {
  const id = req.body.id;
  const position = req.body.position;
  db.query(
    "UPDATE employees SET position = ? WHERE id = ?",
    [position, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//PUT request to update wage
app.put("/updateWage", (req, res) => {
  const id = req.body.id;
  const wage = parseInt(req.body.wage);
  db.query(
    "UPDATE employees SET wage = ? WHERE id = ?",
    [wage, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
// DELETE employee
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on 3001");
});
