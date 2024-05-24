import {db} from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup=(req,res)=>{

//check if user already exist

   const q='select * from user where username=? or email=?';
   db.query(q,[req.body.username,req.body.email],(err,result)=>{
    if (err) return err;

    else if (result.length){
        res.status(409).json("already exist")

    }

    else {
        //hash  the password

        const salt=bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password,salt);
        console.log(hash);


        //insert the user data

        const q="insert into user(username,email,password) values(?)";
        const values =[req.body.username,req.body.email,hash];
        db.query(q,[values],(err,result)=>{
            if (err) return err;
            else {
                res.send("inserted successfully")
                console.log("inserted successfully")
            }
        });

    }
   });

}

export const login=(req,res)=>{

    //check user if exist
     const q="select * from user where email=?";
     db.query(q,[req.body.email], 
          (err,data)=>{
            if (err) return err;
            else if(data.length === 0) return res.status(404).send("User not found!");
 
            //check  password
           
            
             const checkPassword = bcrypt.compareSync(
               req.body.password,
               data[0].password
               );
             
            
 
            if(!checkPassword) return res.status(400).send("invalid email or password");
            else  {
                    
             //jwt token
               const token=jwt.sign({id:data[0].id},"jwtkey");
               const {password,...other}=data[0];
               console.log(token);
 
               res.cookie("access_token",token,{
                 httpOnly:true
               }).status(200).json(other)
            }
 
           
         })
 }