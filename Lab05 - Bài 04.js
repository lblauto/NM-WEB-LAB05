let mang = [];
	let mangkq = [];

	function taoMang() {
	    const length = Math.floor(Math.random() * 11) + 10;
	    mang = Array.from({ length }, () => Math.floor(Math.random() * 91));
	    hienthimang();
	}

	function Sapxep() {
	    const sortDirection = document.getElementById("sortDirection").value;
	    mangkq = [...mang];
	    if (sortDirection === "asc") {
	        mangkq.sort((a, b) => a - b);
	    } else {
	        mangkq.sort((a, b) => b - a);
	    }
	    hienthimangkq();
	}

	function thempt() {
	    const vt = parseInt(document.getElementById("vitrithem").value);
	    const value = parseInt(document.getElementById("thempt").value);

	    if (!isNaN(vt) && vt >= 0 && vt <= mangkq.length) {
	        mangkq.splice(vt, 0, value);
	        hienthimangkq();
	    } else {
	        alert("vị trí chỉ được nhập từ 0 đến " + mangkq.length);
	    }
	}

	function hienthimang() {
	    const mangResult = document.getElementById("mangResult");
	    mangResult.innerText = mang.join(", ");
	}

	function hienthimangkq() {
	    const mangkqResult = document.getElementById("mangkqResult");
	    mangkqResult.innerText = mangkq.join(", ");
	}