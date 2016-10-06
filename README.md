# EditViewRepo
Edit and View Repository used both for Employee and Customer 
# steps to include this repoistory  
  <b>1</b>.include below line in pacake.json in depencies section

  "EditViewRepo": "git+ssh://git@github.com/kaakateeya/EditViewRepo.git#develop"
  
  <b>2</b>.Add dependenices in app module in your application as 

   var app =angular.module('kaakateeya',['editView',...........]);
  
  <b>3</b>.run npm install  to download all dependenies in node modules foler

  <b>4</b>.Add min.js file from dist folder in node modules of edit and View into your application index.html page
        
