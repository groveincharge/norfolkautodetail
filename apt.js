 let express = require("express");
 let mysql = require("mysql");
 let bodyParser = require("body-parser");
 let mysqlx = require('@mysql/xdevapi');
 let http = require('http');
 let path = require('path');
 let app = express();

let port = process.env.PORT || 4050;
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static(path.join(__dirname,"/p5/homePage/")));

let myTable;
 let data;
 let first;
 let last;
 let email;
 let address;
 let city;
 let state;
 let zip;
 let phone;

const config = {
    password: 'Iam50yearsold',
    user: 'root',
    host: 'localhost',
    port: 33060,
    schema: 'autodetailbase'
};

mysqlx
    .getSession(config)
   .then(session => {
       // console.log(session.inspect());
        // { user: 'root', host: 'localhost', port: 33060 }
    app.get('/miniVac/:first/:last/:email/:address/:city/:state/:zip/:phone', subCallback);
      function subCallback(req, res) {
          data = req.params;
          first = data.first;
          last = data.last;
          email = data.email;
          address = data.address;
          city = data.city;
          state = data.state;
          zip = data.zip;
          phone = data.phone;
        console.log(data);
         myTable = session.getSchema('autodetailbase').getTable('subscribers');
       return myTable
      .insert(['firstName', 'lastName', 'email','address','city','state','zipCode','phoneNumber'])
      .values([first, last, email, address, city, state, zip, phone])
      .execute()
          }

    }).catch(err => {
    console.error(err.stack);
    process.exit(1);
  });  

    mysqlx
    .getSession(config)
   .then(session => {

    app.get('/jumper/:first/:last/:email/:address/:city/:state/:zip/:phone', cusCallback);
      function cusCallback(req, res) {
            data = req.params;
            first = data.first;
            last = data.last;
            email = data.email;
            address = data.address;
            city = data.city;
            state = data.state;
            zip = data.zip;
            phone = data.phone;
        console.log(data);
         myTable = session.getSchema('autodetailbase').getTable('customers');
       return myTable
      .insert(['firstName', 'lastName', 'email','address','city','state','zipCode','phoneNumber'])
      .values([first, last, email, address, city, state, zip, phone])
      .execute()

          }

    }).catch(err => {
    console.error(err.stack);
    process.exit();
  });    
  