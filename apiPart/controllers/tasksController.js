

const Tasks = require("../models/tasks");

exports.createTask = async(req, res) => {
  try {
    const creatT = await Tasks.create({
        task: req.body.task,
        comment: req.body.comment
    })
    console.log(creatT)

    res.status(201).json({
      status: "successfully created",
      creatT
    });
  } catch (err) {
    res.status(400).json(err)
  }
};

exports.getallTask = async (req, res) => {
  try {
    const getallTasks = await Tasks.find();

    res.status(200).json({
      getallTasks
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteTask = async (req, res)=>{
    try{

        const deletetask = await Tasks.findByIdAndDelete(req.params.id)
        res.status(200).json("sucessfully deleted")

    }catch(err){
        res.status(400).json(err)

    }
}

exports.updatetask  = async(req,res)=>{
    try{
        const update = await Tasks.findByIdAndUpdate( req.params.id, req.body, {
            new:true,
            runValidators:true
            
        })
        res.status(201).json({
            status: "updated sucessfully",
            update
        })
    }catch(err){
        res.status(400).json(err)

    }
}
