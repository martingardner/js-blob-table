window.onload = function(){

	let blobLink = document.getElementById('blobLink');
	let blobUpload = document.getElementById('blobUpload');
	let fileData = [];

	blobLink.addEventListener('click', blobFile, false);
	blobUpload.addEventListener('change', blobUploadFunc, false)


	function blobFile(){
		let sampleArr = [{name : 'Jim Livings', win : 3, loss : 1, draw : 1}, { name : 'Tony Zaa', win : 1, loss : 3, draw : 1}];
		let blobString = JSON.stringify(sampleArr);
		let blob = new Blob([blobString], {type: "octet/stream"});
		let url = window.URL.createObjectURL(blob);
		window.location.assign(url);
	}

	function blobUploadFunc(e){
		let files = e.target.files;
		let reader = new FileReader();
		
		reader.readAsText(files[0]);
		//console.log('blobUpload', files, typeof(files));

		reader.onload = function(){
			let readerResult = reader.result;

			fileData = JSON.parse(readerResult);
			buildTable();
			//console.log('readerResult', readerResult, typeof(readerResult));
			//console.log('spreadOpperator', JSON.parse(readerResult));
		}
	}

	function buildTable(){
		let table = document.getElementById('dataTable').getElementsByTagName("tbody")[0];
		fileData.forEach( (val, index) => {
			console.log('buildTable', val, index);
			let row = table.insertRow(index);
			row.insertCell(0).innerHTML = val.name || '';
			row.insertCell(1).innerHTML = val.win || '';
			row.insertCell(2).innerHTML = val.loss || '';
			row.insertCell(3).innerHTML = val.draw || '';
		});
	}


}