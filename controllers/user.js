const UserModel = require("../Schema/User");
const bcrypt = require("bcrypt");

exports.UserLogin = (req, res, next) => {
  console.log("User Details");
  const { UserMail, UserPassword } = req.body;
  console.log(req.body)
  UserModel.find({email:UserMail}).then((result)=>{
    console.log(result)
      const resultValue=bcrypt.compareSync(UserPassword, result[0].password);
      console.log(resultValue)
      if(!resultValue){
    return res.status(404).json({message:'Invalid Email or Password'})
      }
    return res.status(200).json({message:'Logged In'})
      
    
  }).catch(error=>{
    return res.status(404).json({message:'Invalid Email or Password'})
  })
};

exports.registerUser = (req, res, next) => {
  console.log(req.body);
  const { userMail, userPassword } = req.body;

  UserModel.create({ email: userMail, password: userPassword })
    .then((result) => {
      console.log(result);
      return res.json({ message: "Successfully Registered" });
    })
    .catch((error) => {
      console.log(error.code);
      if (error.code) {
        return res.status(409).json({ message: "Email Already Exist"});
      }
    });
};
