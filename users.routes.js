const{ Router } = require ("express");


//function myMiddleware (request, response, next){
 //console.log("Você passou pelo myMiddleware!");
 //if(!request.body.isAdmin){
   // return response.json({ message: "user unauthorized" });
 //}
//
 //next();
//}

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router();

const usersController = new UsersController();
//usersRoutes.use(myMiddleware);
usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;