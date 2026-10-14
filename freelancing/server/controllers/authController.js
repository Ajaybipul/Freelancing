import userSchema from "../models/userSchema";

const register = async (req, res) => {
    try{
       
               const {username, email, password, usertype} = req.body;
               const User= await userSchema.findOne({email});
       
               const salt = await bcrypt.genSalt();
               const passwordHash = await bcrypt.hash(password, salt);
            
       
               const newUser = new User({
                   username, 
                   email,
                   password: passwordHash,
                   usertype
               });
   
               const user = await newUser.save();
               
               if(usertype === 'freelancer'){
                   const newFreelancer = new Freelancer({
                       userId: user._id
                   })
                   await newFreelancer.save();
               }
       
               res.status(200).json(user);
       
           }catch(err){
               res.status(500).json({error: err.message});
           }
};

export  {register};