	function trim(chuoi)
	{
		i=0;
		str = chuoi;
		while(chuoi.charCodeAt(i)==32)
		{
			str = chuoi.substr(i+1,chuoi.length - (i+1));
			i++;
		}
		str2=str;
		i=str.length-1;
		while(str.charCodeAt(i)==32)
		{
			str2 = str.substr(0,i);
			i--;
		}
		return str2;
	}

	function isInvalidName(chuoi) {
		return chuoi.trim().indexOf(" ") === -1 || !/^[\p{L}\s]+$/u.test(chuoi);
	}

	function PhanTich(chuoi) {
		chuoi = trim(chuoi);
		
		if (isInvalidName(chuoi)) {
			alert("Họ tên nhập vào không hợp lệ. Vui lòng nhập họ và tên đầy đủ chỉ bằng chữ cái.");
			return;
		}

		d1 = chuoi.indexOf(" ");
		d2 = chuoi.lastIndexOf(" ");
		Ho.innerText = chuoi.substr(0, d1);
		Lot.innerText = chuoi.slice(d1, d2);
		Ten.innerText = chuoi.slice(d2 + 1, chuoi.length);
	}