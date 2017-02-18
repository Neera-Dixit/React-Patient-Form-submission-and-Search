import $ from 'jquery';

let ajaxService = {

	get : (url)=>{

		return new Promise((success,error)=>{

			$.ajax({
				url,
				type : 'GET',
				success,
				error
			});

		});
	},

	post : (url,data)=>{

		return new Promise((success,error)=>{

			$.ajax({
				url,
				type : 'POST',
				data,
				success,
				error
			});

		});

	}
};

export default ajaxService;
