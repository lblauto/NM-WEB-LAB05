		function tinhTien()
		{
			str = "<table width='250' align='center' border='1' bordercolor='#CC000' style='border-collapse: collapse;'><tr><th colspan='3' align='center' style='color:#CC000'>Hóa đơn tính tiền</th></tr>";
			stt = 0;
			tong = 0;
			chonAn = document.getElementById("thucAn");
			for (i = 0; i < chonAn.options.length; i++)
			{
				if (chonAn.options[i].selected)
				{
					stt++;
					tong += eval(chonAn.options[i].value);
					str += "<tr>";
					str += "<td width='20px' align='center'>" + stt + "</td>";
					str += "<td>" + chonAn.options[i].innerText + "</td>";
					str += "<td align='right'>" + chonAn.options[i].value + "</td></tr>";
				}
			}
			chonUong = document.getElementById("giaiKhat");
			for (i = 0; i < chonUong.options.length; i++)
			{
				if (chonUong.options[i].selected)
				{
					stt++;
					tong += eval(chonUong.options[i].value);
					str += "<tr><td width='20px' align='center'>" + stt + "</td><td>" + chonUong.options[i].innerText + "</td><td align='right'>" + chonUong.options[i].value + "</td></tr>";
				}
			}

			if (document.getElementById("khan").checked)
			{
				stt++;
				tong += 5000;
				str += "<tr><td width='20px' align='center'>" + stt + "</td><td> Khăn</td><td align='right'> 5000</td></tr>";
			}

			if (document.getElementById("phong").checked)
			{
				stt++;
				tong += 10000;
				str += "<tr><td width='20px' align='center'>" + stt + "</td><td> Phòng</td><td align='right'> 10000</td></tr>";
			}

			str += "<tr style='color:#CC0000'><td width='20px' align='center'></td><td> Tổng cộng</td><td align='right'>" + tong + "</td></tr></table>";
			return str;
		}