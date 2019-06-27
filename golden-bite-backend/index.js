const express = require('express')
const app = express()



const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./goldenbites')


app.get("/products/read", function(req,res){

    let sql = "Select * from products";

    db.all(sql,[], (err,rows)=>{
        data = []
        if(err){throw err}
        rows.forEach(async (row)=>{
            await data.push(row)
            res.send({DATA:data})
        })
    })
})


app.get("/products/delete/:id?" ,function(req,res){
        ID = req.params.id
        console.log(ID)
        
        db.run(`DELETE FROM products WHERE products_id=${ID}`, function(err){
            if(err){
                console.log(err);
            }else{
                console.log(`Product ${ID} got deleted!`)
            }
        })
    })

    app.get("/products/edit/:id?", function(req,res){

        const ID = req.params.id

        const PRODUCTS_ID = req.query.products_name
        res.set('Content-Type', 'text/plain');
        
        db.run(`UPDATE products SET products_name = ?

                WHERE products_id= ? `,[PRODUCTS_ID,ID] ,function(err){
            if(err){
                console.log(err)
            }else{
                console.log(`edited product ${ID} with ${PRODUCTS_ID}`)
            }
        })

    })

 

app.listen(3001);