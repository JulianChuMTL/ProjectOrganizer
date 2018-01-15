$( document ).ready(function() {

	insertProject("Project A");
	insertProject("Project B");
	insertProject("Project C");
	insertProject("Project D");

});

// Checks for empty string
function isEmpty(s) {
    return s.trim().length == 0;
};

function dec2hex(dec) {
    return ('0' + dec.toString(16)).substr(-2)
};

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
};

// Gets value of an element
function getValue(id) {
    if(id == null) return;
    var v = document.getElementById(id).value;
    return v;
};

function generateId(len) {
    var arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
};

function createProject(projectName) {
	
	$('#create-project-modal').modal('hide');
	$('#projectName').val('');
	insertProject(projectName);
};

function insertProject(projectName) {
	
	var id =  generateId(); 
	var projectlist = document.getElementById('project-list');
	var newProject = '<li class="list-group-item project-card" id="' + id + '"><div class="container"><div class="row"><div class="col-9"><a href="#"><h5 class="project-title">'+projectName+'</h5></a></div><div class="col-3"><button class="btn btn-primary btn-lg edit-project-button" onclick="editProject(this)" data-id="'+id+'" data-toggle="modal" data-target="#edit-project-modal">Edit Project</button></div></div></div></li>';

	projectlist.insertAdjacentHTML('beforeend', newProject);

};

function editProject(e) {

	var id = e.dataset.id;

	var projectElement = document.getElementById(id);
	var title = projectElement.getElementsByClassName('project-title')[0].innerHTML;

    document.getElementById('editprojectId').value = id;
    document.getElementById('editprojectName').value = title;

};

function updateProject(projectId, projectName) {

	var e = document.getElementById(projectId);

	e.getElementsByClassName('project-title')[0].innerHTML = projectName;

    $('#edit-project-modal').modal('hide');
	$('#projectName').val('');

};

function removeProject(id) {

	var e = document.getElementById(id);
	e.parentElement.removeChild(e);

	$('#edit-project-modal').modal('hide');
	$('#projectName').val('');

};