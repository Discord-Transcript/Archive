
require('dotenv').config()
const express = require("express");
const app = express();

const bodyparser = require("body-parser");
const session = require("express-session");
const ejs = require("ejs");
const passport = require("passport");
const path = require("path");
const { Strategy } = require("passport-discord");
const fs = require('fs');
const { join } = require('path');
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
console.log(`${client.user.tag} is Online`);
})
client.login(process.env.TOKEN)
mongoose = require("mongoose");
 var srs = require('secure-random-string');

  var download = require('download-file');
  

app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({ extended: true }));
    app.engine("html", ejs.renderFile);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, "/views"));
    
    
    

    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/api/avatars/:userID/:avatarID.png', async(req, res) => {
      let urll = 'https://cdn.discordapp.com/avatars/' + req.params.userID + '/' + req.params.avatarID + '.png';
      var options = {
    directory: `./user/`,
    filename: req.params.avatarID + '.png'

    }
download(urll, options, function(err){
    if (err) return res.status(404).end();
    
}) 
     
    setTimeout(function(){ 
    try {
     
res.sendFile(join(__dirname, `./user/${req.params.avatarID}.png`));
    } catch (err){
      return res.status(404).end();
    }

}, 1000);
setTimeout(function(){ 
    try {

 const dir = join('user');
		const path = join(dir, req.params.avatarID + '.png');
    fs.unlinkSync(join(path));
    } catch (err){
      return;
    }
}, 15000);

    })
    app.get('/api/avatars/:userID/:avatarID.webp', async(req, res) => {
      let urll = 'https://cdn.discordapp.com/avatars/' + req.params.userID + '/' + req.params.avatarID + '.webp';
      var options = {
    directory: `./user/`,
    filename: req.params.avatarID + '.webp'

    }
download(urll, options, function(err){
    if (err) return res.status(404).end();
    
}) 
     
    setTimeout(function(){ 
    try {
     
res.sendFile(join(__dirname, `./user/${req.params.avatarID}.webp`));
    } catch (err){
      return res.status(404).end();
    }

}, 1000);
setTimeout(function(){ 
    try {

 const dir = join('user');
		const path = join(dir, req.params.avatarID + '.webp');
    fs.unlinkSync(join(path));
    } catch (err){
      return;
    }
}, 15000);

    })
    app.get('/api/avatars/:userID/:avatarID.gif', async(req, res) => {
      let urll = 'https://cdn.discordapp.com/avatars/' + req.params.userID + '/' + req.params.avatarID + '.gif';
      var options = {
    directory: `./user/`,
    filename: req.params.avatarID + '.gif'

    }
download(urll, options, function(err){
    if (err) return res.status(404).end();
    
}) 
     
    setTimeout(function(){ 
    try {
     
res.sendFile(join(__dirname, `./user/${req.params.avatarID}.gif`));
    } catch (err){
      return res.status(404).end();
    }

}, 1000);
setTimeout(function(){ 
    try {

 const dir = join('user');
		const path = join(dir, req.params.avatarID + '.gif');
    fs.unlinkSync(join(path));
    } catch (err){
      return;
    }
}, 15000);

    })
app.get('/', async(req, res) => {
 let ui = srs({length: 40});
 
  res.status(200).send({
			status: 200,
			message: `Discord Transcript Archive Api |  Your IP Key: ${ui}`
		});
})
app.get('/view', async(req, res) => {
  if(!req.query.uri) return res.redirect('/api/view');
  if(req.query.uri){
    res.redirect(`/api/view?uri=${req.query.uri}`);
  }
})

   app.get('/api/view', async(req, res) => {
     if(!req.query.uri) return res.status(404).end();
    
    
     let uri = srs({length: 40});
 
var url = req.query.uri;
 
var options = {
    directory: "./files",
    filename: uri + '.html'
}
 
download(url, options, function(err){
    if (err) return res.redirect(req.query.uri);
    
}) 
     
    setTimeout(function(){ 
    try {
      console.log(`New Transcript Access  ${url}`)
res.sendFile(join(__dirname, `./files/${uri}.html`));
    } catch (err){
      return res.redirect(req.query.uri);
    }

}, 1000);
setTimeout(function(){ 
    try {

 const dir = join('files');
		const path = join(dir, uri + '.html');
    fs.unlinkSync(join(path));
    } catch (err){
      return;
    }
}, 15000);
       
   })

    

    app.listen(process.env.port, (err) => {
        console.log(`Webserver now online on port ${process.env.port}`);
    });
