const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const db = mysql.createConnection({
  user: "b502fcbe8105bf",
  host: "us-cdbr-east-06.cleardb.net",
  password: "19fd6578",
  database: "heroku_77bcd9d36202d65",
});

// mysql://b502fcbe8105bf:19fd6578@us-cdbr-east-06.cleardb.net/heroku_77bcd9d36202d65?

//////////////////////    EMPLOYEES ////////////////////////
//POST request to create new employee
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;
  const manager = req.body.manager;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage, manager) VALUES (?,?,?,?,?,?)",
    [name, age, country, position, wage, manager],
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
//PUT request to update supervisor
app.put("/updateSupervisor", (req, res) => {
  const id = req.body.id;
  const manager = req.body.newManager;
  db.query(
    "UPDATE employees SET manager = ? WHERE id = ?",
    [manager, id],
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

//////////////////////     MANAGERS     ////////////////////////////

//POST request to create new manager
app.post("/createManager", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const emp_id = req.body.emp_id;
  const title = req.body.title;

  db.query(
    "INSERT INTO managers (first_name, last_name, emp_id, title) VALUES (?,?,?,?)",
    [first_name, last_name, emp_id, title],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

//GET all managers
app.get("/managers", (req, res) => {
  db.query("SELECT * FROM managers", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//GET all managers ordered by first_name ASC
app.get("/managerFirstName", (req, res) => {
  db.query("SELECT * FROM managers ORDER By first_name", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//GET all managers ordered by first_name DESC
app.get("/managerFirstNameDesc", (req, res) => {
  db.query("SELECT * FROM managers ORDER By first_name DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all managers ordered by last_name ASC
app.get("/managerLastName", (req, res) => {
  db.query("SELECT * FROM managers ORDER By last_name", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//GET all managers ordered by last_name DESC
app.get("/managerLastNameDesc", (req, res) => {
  db.query("SELECT * FROM managers ORDER By last_name DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all managers ordered by emp_id
app.get("/managersID", (req, res) => {
  db.query("SELECT * FROM managers ORDER By emp_id", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all managers ordered by emp_id DESC
app.get("/managersIDDesc", (req, res) => {
  db.query("SELECT * FROM managers ORDER By emp_id DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all managers ordered by title
app.get("/managersTitle", (req, res) => {
  db.query("SELECT * FROM managers ORDER By title", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET all managers ordered by title DESC
app.get("/managersTitleDesc", (req, res) => {
  db.query("SELECT * FROM managers ORDER By title DESC", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//PUT request to update manager first name
app.put("/updateManagerFirstName", (req, res) => {
  const id = req.body.manager_id;
  const first_name = req.body.first_name;
  db.query(
    "UPDATE managers SET first_name = ? WHERE manager_id = ?",
    [first_name, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//PUT request to update manager last name
app.put("/updateManagerLastName", (req, res) => {
  const id = req.body.manager_id;
  const last_name = req.body.last_name;
  db.query(
    "UPDATE managers SET last_name = ? WHERE manager_id = ?",
    [last_name, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//PUT request to update manager title
app.put("/updateManagerTitle", (req, res) => {
  const id = req.body.manager_id;
  const title = req.body.title;
  db.query(
    "UPDATE managers SET title = ? WHERE manager_id = ?",
    [title, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//GET manager by first name
app.get("/firstName/:firstName", (req, res) => {
  const first_name = req.params.firstName;
  db.query(
    "SELECT * FROM managers WHERE first_name = ?",
    first_name,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//GET manager by last name
app.get("/lastName/:lastName", (req, res) => {
  const input = req.params.lastName;
  db.query(
    "SELECT * FROM managers WHERE last_name = ?",
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
//GET manager by ID
app.get("/id/:id", (req, res) => {
  const input = req.params.id;
  db.query("SELECT * FROM managers WHERE emp_id = ?", input, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//GET manager by title
app.get("/title/:title", (req, res) => {
  const input = req.params.title;
  db.query("SELECT * FROM managers WHERE title = ?", input, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// DELETE manager
app.delete("/deleteManager/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM manager WHERE manager_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
