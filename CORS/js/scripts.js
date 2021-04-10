async function getReq(url) {
	let res = await fetch(url, {
		method: 'GET', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
		  'Content-Type': 'application/json'
		  // 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *client
	  });
	let inf = await res;
	console.log(inf);
	
	let jso = await res.text();
	document.getElementById("resp").innerHTML = jso;
}

async function postReq(url, data) {
	let res = await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
		  'Content-Type': 'application/json'
		  // 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *client
		body: data // body data type must match "Content-Type" header
	  });
	let inf = await res;
	console.log(inf);
	
	let jso = await res.text();
	document.getElementById("resp").innerHTML = jso;
}

async function putReq(url, data) {
	let res = await fetch(url, {
		method: 'PUT', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
		  'Content-Type': 'application/json'
		  // 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *client
		body: data // body data type must match "Content-Type" header
	  });
	let inf = await res;
	console.log(inf);
	
	let jso = await res.text();
	document.getElementById("resp").innerHTML = jso;
}

async function deleteReq(url) {
	let res = await fetch(url, {
		method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		headers: {
		  'Content-Type': 'application/json'
		  // 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *client
	  });
	let inf = await res;
	console.log(inf);
	
	let jso = await res.text();
	document.getElementById("resp").innerHTML = jso;
}

function pop() {
	let method = document.getElementById("method").value;
	let url = document.getElementById("url").value;
	let body = document.getElementById("body").value;
	if (url == "") {
		document.getElementById("emptyURL").innerHTML = "URL must not be empty";
		return;
	} else {
		document.getElementById("emptyURL").innerHTML = "";
	}
	switch (method) {
		case 'GET':
			getReq(url);
			break;
		case 'POST':
			if (body == "") {
				document.getElementById("emptyBody").innerHTML = "Body must not be empty";
				return;
			} else {
				document.getElementById("emptyBody").innerHTML = "";
			}
			postReq(url, body);
			break;
		case 'PUT':
			if (body == "") {
				document.getElementById("emptyBody").innerHTML = "Body must not be empty";
				return;
			} else {
				document.getElementById("emptyBody").innerHTML = "";
			}
			putReq(url, body);
			break;
		case 'DELETE':
			deleteReq(url);
			break;
	}
}
