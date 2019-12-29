// modules -http,url,querystring,fs
// http a. createServer() listen() -both function used to create SERVER  
http=require('http');
url=require('url');
query=require('querystring');
fs=require('fs');
mymodule=require('./mymodule');
processrequest=function(req,resp)
{
	
	// resp.write(),resp.writeHead(),resp.end()
	//resp.writeHead(200,{'Content-Type':'text/html'});
	//resp.write("<h1>Hello</h1>");
	//resp.end("<h1>Hello</h1>");
	console.log(req);
	u=url.parse(req.url);
	switch(u.pathname)
	{
		case '/':
		resp.writeHead(200,{'Content-Type':'text/html'});
		fs.readFile('form.html',function(err,data)
		{
			if(err)
			{
			console.log("Error");
			}
			else
			{
				resp.write(data);
			}
			
		});
		break;
		case '/add':
		resp.writeHead(200,{'Content-Type':'text/html'});
		data=query.parse(u.query);
		console.log(req);
		console.log(data.num1+' '+data.num2);	
		a=data.num1;
		b=data.num2;
		if(data.opr=='add')
		{
	//add=mymodule.add(req.query.num1,req.query.num2);
		add=mymodule.add(a,b);
		resp.write('<h1>Addition :</h1>'+add);
		}
		else if(data.opr=='sub')
		{
		sub=mymodule.sub(a,b);
		resp.write('<h1>Sub :</h1>'+sub);
		}
		else if(data.opr=='mul')
		{
		mul=mymodule.mul(a,b);
		resp.write('<h1>Mul :</h1>'+mul);
			
		}
		else if(data.opr=='div')
		{
		div=mymodule.div(a,b);
		resp.write('<h1>Divison :</h1>'+div);
		}
		break;
		default:
		resp.write('<h1>Page Not Found</h1>');
		break;
		}
	
}
http.createServer(processrequest).listen(3006);
console.log('Server running at port number 3006');

 