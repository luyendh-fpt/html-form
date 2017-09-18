var apiUrl = "http://youtube-video-api-1608.appspot.com/youtube/api";

function handleForm() {	
	var videoId = $("#video-id").val();
	var videoName = $("#video-name").val();
	var videoDescription = $("#description").val();
	var videoKeywords = $("#keywords").val();

	var video = {
		"videoId": videoId,
		"name": videoName,
		"description": videoDescription,
		"keywords": videoKeywords
	};

	$.ajax(
	{
	    url: apiUrl, // Địa chỉ api.
	    data: JSON.stringify(video), // Chuyển đổi kiểu dữ liệu về json.
	    type: 'POST', // method của phương thức gọi.
	    success: function(data, status) { 		    	
	    	alert("Lưu thành công video với tên: " + videoName); 		    	
		},
	    error: function() { 
	    	alert('Lỗi không thể lưu dữ liệu!'); 	
		}
	});
}

function loadVideo(){
	$.ajax(
	{
	    url: apiUrl, // Địa chỉ api.	    
	    type: 'GET', // method của phương thức gọi.
	    success: function(data, status) {
	    	var htmlContent = '';
	    	for (var i = data.length - 1; i >= 0; i--) {
	    		console.log();
	    		console.log(data[i].name);
	    		htmlContent += '<div>';
	    		htmlContent += '<div>Id: ' + data[i].videoId + '</div>';
	    		htmlContent += '<div>Name:' + data[i].name +'</div>';
	    		htmlContent += '</div>';														
	    	}
	    	$("#main").html(htmlContent);
		},
	    error: function() { 
	    	alert('Lỗi không thể lấy dữ liệu từ API!'); 	
		}
	});
}