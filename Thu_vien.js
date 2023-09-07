function laSo(so)
{
	return (!isNaN(parseInt(so)));
}

function lamTron(x, n)
{
	so = x*Math.pow(10,n);
	so = Math.round(Math.abs(so));
	so = so/Math.pow(10,n);
	if(x<0)
		so = -so;
		return so;
}

function dinhDangSo(x, n, ngoacDon, dauPhay, donVi)
{
	if(laSo(x) && laSo(n))
	{
		x = lamTron(x, n);
		chuoiSo=x.toString();
		if(dauPhay == true)
		{
			i = chuoiSo.indexOf(".");
		}

		if(ngoacDon == true && x<0)
			chuoiSo="("+chuoiSo+")";
		return chuoiSo+donVi;
	}
}

function trim(chuoi) 
{
	str =  chuoi;
	i=0;
	while(chuoi.charCodeAt(i) == 32)
	{
		str=chuoi.substr(i+, chuoi.length = (i+1));
		i++;
	}
	str2=str;
	i=chuoi.length - 1;
	while(str.charCodeAt(i) == 32)
	{
		str2 = ssstr.substr(0, i);
		i--;
	}
	return str2;
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

function tenThang(thang)
{
	monthName = new Array("Tháng một","Tháng hai","Tháng ba","Tháng bốn","Tháng năm","Tháng sáu","Tháng bảy","Tháng tám","Tháng chín","Tháng mười","Tháng mười một","Tháng mười hai");
	return (monthName[getMonth(thang)]);
}