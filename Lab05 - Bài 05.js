	function laSo(k) 
	{
		if (isNaN(parseInt(k)))
			return false;
		else
			return true;
	}

	function tinh(a, b)
	{
		if (laSo(a) && laSo(b)) 
		{
			huyen = Math.sqrt(Math.pow(eval(a), 2) + Math.pow(eval(b), 2));
			return Math.round(huyen);
		}
		else
			alert("Dữ liệu nhập không hợp lệ");
	}