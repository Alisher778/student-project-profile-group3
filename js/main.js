

function convertInto(num, cs) {
	var con = num.toString(cs);
	alert(num + '  is equal to "'+ con +'" in '+cs+' counting system');
}

function test() {
    console.log('I am test function')
};


function result() {
	var myName = document.getElementById('myName').value;
	document.getElementById('name').innerHTML = myName;

	// Tugulgan sananai o'zgartir
	var myDob = document.getElementById('mydob').value;
	document.getElementById('dob').innerHTML = myDob || new Date().toLocaleDateString();

	// Title sananai o'zgartir
	var title = document.getElementById('myTitle').value;
	document.getElementById('title').innerHTML = title;

	var avatar = document.getElementById('avatar').src;
	var day = ['man-7','man-1','man-2','man-3','man-4','man-5','man-6'];
	var numDay = Math.floor(Math.random() * 7);
	document.getElementById('avatar').src = 'img/'+day[numDay]+'.png'

}

