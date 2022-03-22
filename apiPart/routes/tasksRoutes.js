const express = require("express");

const { createTask, getallTask, deleteTask, updatetask } = require('./../controllers/tasksController')

const router = express.Router();



router.route('/').post(createTask).get(getallTask)


router.route('/:id').delete(deleteTask).patch(updatetask)




module.exports = router




