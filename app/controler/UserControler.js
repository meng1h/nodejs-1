
var UserService=require('../service/UserService');

exports.api = {
	get_one_by_id : function(req,res,next){

	},
	get_all : function(req,res,next){
		//console.log('in service');
		//console.log(UserService.get_all());

		console.log('limit'+req.query.limit);

		pagesize,pageno,limit,sort,condition
		UserService.get_all(req.query.pagesize
			,req.query.pageno
			,req.query.limit
			)
		.then(function (u) {
			res.send(u)
		})
		// res.send(UserService.get_all());
		//return;
	}
}