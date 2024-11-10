app.delete('/hello', (req, res) => { //deletes
    res.status(204)
    res.send('<h1>DELETE - HELLO</h1>');
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About US</h1>');
});

app.get('/contact', (req, res) => { 
    res.send('<h1>Contact Us</h1>');
});

app.get('/hello', (req, res) => {  //creates
    res.status(200)
    res.send('<h1>GET - HELLO</h1>');
});

app.post('/hello', (req, res) => {  //creates
    res.status(201)
    res.send('<h1>POST - HELLO</h1>');
});

app.put('/hello', (req, res) => { //uploads / put / UPDATE
    res.status(203)
    res.send('<h1>PUT - HELLO</h1>');
});

app.delete('/hello', (req, res) => { //deletes
    res.status(204)
    res.send('<h1>DELETE - HELLO</h1>');
});

app.get('/student', (req, res) => { 
    res.status(200)
    const student = {
        name: "leo",
        age: 20
    }
    res.json(student);
});

//http://localhost:3000/employee?fnm=leonardo&lnm=P
app.get("/employee", (req, res) =>{
    console.log(req.query)
    const fnm = req.query.fnm;
    const lnm = req.query.lnm;
    res.send(`First name: ${fnm}, last name: ${lnm}`);
});


//http://localhost:3000/employee/leonardo/P/toronto
app.get('/employee/:fnm/:lnm/:city', (req, res) => {
    console.log(req.params)
    const fnm = req.params.fnm;
    const lnm = req.params.lnm;
    const city = req.params.city;
    res.send(`First Name: ${fnm}, Last Name: ${lnm}, City: ${city}`);
});



app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
