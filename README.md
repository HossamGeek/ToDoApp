## General info
This a todo app .

## installtion
To run this project, install it locally using npm:
Tools required:
* git
* nodejs
* mongodb
* postman or other app to test API

```
$ git clone https://??
$ cd Todo
$ npm install
$ npm start
```

## API contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)


## create New ToDo 
* Method : POST
* url : localhost:3000/todo/new
* requestBody : 
    ```
    {
    "title":"new1", // optional
    "isCompoleted": false // default
    "items":[{ // optional
        "title":"new12"
    }]
    }
    ```
## create New ToDo item
* Method : POST
* url : localhost:3000/todo/newItem
* requestHeader : 
    ```
    {
        todo_id : "" //required
    }
    ```
* requestBody : 
    ```
    {
    "items":[{ // required
        "title":"new1", // optional
        "isCompoleted": false // default
    }]
    }
    ```
## Get All ToDo 
* Method : GET
* url : localhost:3000/todo/all

## Get specific ToDo 
* Method : GET
* url : localhost:3000/todo/todo
* requestHeader : 
    ```
    {
        todo_id : "" //required
    }
    ```

## Mark ToDo is complete 
* Method : PUT
* url : localhost:3000/todo/markTodoIsComplete
* requestHeader : 
    ```
    {
        todo_id : "" //required
    }
    ```
## Mark item is complete 
* Method : PUT
* url : localhost:3000/todo/markItemIsComplete
* requestHeader : 
    ```
    {
        todo_id : "" //required
        item_id : "" //required
    }
    ```    
## Update Todo 
* Method : PUT
* url : localhost:3000/todo/todo
* requestHeader : 
    ```
    {
        todo_id : "" //required
    }
    ```     
* requestBody : 
    ```
    {
    "title":"new1", 
    }
    ```      
## Update Todo item
* Method : PUT
* url : localhost:3000/todo/item
* requestHeader : 
    ```
    {
        todo_id : "" //required
         item_id : "" //required
    }
    ```     
* requestBody : 
    ```
    {
    "title":"new1", 
    }
    ```          
## Delete specific Todo 
* Method : DELETE
* url : localhost:3000/todo/todo
* requestHeader : 
    ```
    {
        todo_id : "" //required
         item_id : "" //required
    }
    ```     
## Delete specific item
* Method : DELETE
* url : localhost:3000/todo/item
* requestHeader : 
    ```
    {
        todo_id : "" //required
         item_id : "" //required
    }
    ```      