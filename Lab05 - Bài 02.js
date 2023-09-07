		function laSo(so)
		{
			if(isNaN(parseInt(so)))
				return false;
			else
				return true;
		}

		function tenThu(ngay)
		{
			i=ngay.getDay();
			var thu="";
			switch(ngay.getDay())
			{
				case 0:
					thu="Chủ nhật";
					break;
				case 1:
					thu="Thứ hai";
					break;
				case 2:
					thu="Thứ ba";
					break;
				case 3:
					thu="Thứ tư";
					break;
				case 4:
					thu="Thứ năm";
					break;
				case 5:
					thu="Thứ sáu";
					break;
				case 6:
					thu="Thứ bảy";
					break;
			}
			return thu;
		}

	function validateInput(ngay, thang, nam) {
		if (!laSo(ngay) || !laSo(thang) || !laSo(nam)) {
			alert("Vui lòng nhập vào số nguyên cho ngày, tháng, và năm.");
			return false;
		}

		ngay = parseInt(ngay);
		thang = parseInt(thang);
		nam = parseInt(nam);

		if (ngay < 1 || ngay > 31 || thang < 1 || thang > 12 || nam < 1) {
			alert("Ngày, tháng hoặc năm nhập vào không hợp lệ.");
			return false;
		}

		const maxDays = new Date(nam, thang, 0).getDate();
		if (ngay > maxDays) {
			alert("Ngày không hợp lệ trong tháng và năm đã chọn.");
			return false;
		}

		return true;
	}

	function xuatNgaySinh(ngay, thang, nam) {
		if (!validateInput(ngay, thang, nam)) {
			return "";
		}

		if(!laSo(ngay) || !laSo(thang) || !laSo(nam))
			{
				alert("Giá trị nhập không hợp lệ");
				return "";
			}
			else
			{
				d=new Date(nam, thang-1, ngay);
				str=tenThu(d) + ", ngày " + ngay + " tháng " + thang + " năm " + nam;
				return str;
			}
	}