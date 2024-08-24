const jai = require('express');
const app = jai();
const port = 8080;
app.use(jai.static('imagesandcss'));
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/homelogin.html');
});
app.get('/register',(req,res)=>{
    res.sendFile(__dirname + '/register.html');
});
app.get('/dashboard',(req,res)=>{
    res.sendFile(__dirname + '/dashboard.html');
});
app.get('/profile',(req,res)=>{
    res.sendFile(__dirname + '/profile.html');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
