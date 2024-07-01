//next module is http 

const http = require('http')
    
const server = http.createServer((req,res) => {
   console.log(req)
   if(req.url === '/')
    res.end('hello to my homepage')
   if(req.url === '/about')
    res.end('Hello welcome to about homepage')

   end(`
    <h1>Error no kind of url</h1>
    <br>
    <p>kindly click here to go to homepage</p>
    <a href="/">Homepage</a>
    `)
})
server.listen(5007, () => {
    console.log('Server is running on port 5005');
});