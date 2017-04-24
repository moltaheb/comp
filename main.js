function myMain()
{
	//var list = [1,2,3,4,5,6,7,8,9,99];
	var list = [1,2,3];
	// for (var i=0; i < list.length ; i ++)
	// {
//		console.log( list[i]);
		_.each(list, function(item){ console.log("from"+ item)});
//	}
	
}
myMain();