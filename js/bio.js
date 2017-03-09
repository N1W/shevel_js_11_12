$(function(){
	var html = $('#bio').html();
	var bio = {
		name: 'Шевель Виталий Викторович',
		education: 'ЧНТУ',
		reason: 'Я хочу учить FE, по тому что:',
		reason1: '1',
		reason2: '2',
		reason3: '3',
		number: '+38(093-111-11-11',
		vklink: 'vk.com',
		feedback: "feedback"
	};

	var content = tmpl(html, bio);

	$('body').append(content);



});