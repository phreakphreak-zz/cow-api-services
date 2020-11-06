const userController = {};
const User = require("./model");
const jwt = require("jsonwebtoken");


userController.createUser = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({
      username: username,
      email: email,
      password: password,
    });

    user.password = await user.encryptPassword(user.password);

    await user.save();
    const token = jwt.sign({ id: user._id }, process.env.KEY_SECRET, {
      expiresIn: 60 * 60 * 24,
    });

    res.json({ auth: true, token:token });
  } catch (err) {

    if(err.code === 11000){

    res.json({ message:"user already created" });
    }
    else{

    res.status(404).json({ error:err });
    }
  }
};


userController.singinUser = async (req,res, next)=>{
  try {
    //x-access-token
    const { username, password} = req.body;


  } catch (error) {
    res.status(404).json({error:error});
  }
}
userController.profileUser = async (req,res,next)=>{
  const token = req.headers['x-access-token'];
  if(!token){
    return res.status(401).json({auth:false,message:"No token provided"})
  }

  const decode = jwt.verify(token,process.env.KEY_SECRET)
  res.json({decode});
}

module.exports = userController;
