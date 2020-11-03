import { Utils } from '../../../services/utils.service.js';

const STORE_KEY = 'pegasusMails';
const gFakeEmails = [
	{
		subject: 'Thank You',
		from: 'Yael@gmail.com',
		body:
			`
			There’s an art to writing a thank-you letter. It goes beyond saying, “Thanks for _____. I really appreciate it.” We’ll show you some thank-you letter examples and templates that will help you express your gratitude in style.
			<br>
			<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.winwood-outdoor.co.uk%2Facatalog%2Fduck_small.jpg&f=1&nofb=1"/>
			<br>
			Your Sister
			`,
		tags: { isRead: false, isStared: true , isSent: false},
		sentAt: 1551133930594,
		id: null,
	},
	{
		subject: 'To my big brother',
		from: 'Joe@gmail.com',
		body:
			`
			If you've grown up with an older brother like I have, you know the life long love and struggles that come with him. As a younger sibling, we tend to always look up to our older brother. 
			<br>
			They become our role models, our go to person and best friend. With years and years I have discovered that my hero does not wear a fancy cape but carries a heart of gold that I hold so dearly. Even though at times he may seem like you are the biggest pain in his life, you are his biggest joy. 
			<br>
			Time after time you have done countless things to annoy him, things that drive him off the wall, but he fights daily to protect and love you. Other than a parents love, I feel that there is no greater bond in love than there is between siblings. A lot of the things my brother has done for me goes unnoticed and at times i'm sure he has felt unappreciated by his gestures because my lack of gratitude. We all tend to take the smallest things for granite, especially those we love. Because I know I haven't told him lately, here is the thank you letter that all older brothers deserve every once in a blue moon. 
			<br>
			<audio controls src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_5MG.mp3">
				Your browser does not support the
				<code>audio</code> element.
			 	</audio>
			`,
		tags: { isRead: false, isStared: true , isSent: false},
		sentAt: 1551133930594,
		id: null,
	},
	{
		subject: 'A Winner',
		from: 'Lottery@gmail.com',
		body: `YOU\'VE JUST HIT IT BIG...REAL BIG Now What?
		<br>
		<iframe src="https://www.youtube.com/embed/1m-yRZUFhys"></iframe>
		`
		,
		tags: { isRead: false, isStared: false , isSent: false},
		sentAt: 1550133000094,
		id: null,
	},
	{
		subject: 'New friend request from Dorothi💫Bareket',
		from: '‫FaeNet@faenet.org‬',
		body: `
		New Friend Request

		Dorothi Bareket added you as a friend
		Hello Stray Fox,

		This is a notification to let you know that Dorothi💫Bareket has just added you as a friend. Login to accept or reject this friend request.

		Dorothi💫Bareket
		Dorothi💫Bareket
		Friends: 94 • Mutual Friends: 16
		View all of your friends on the friends page. See All Friends
		<br>
		<img src="https://ci4.googleusercontent.com/proxy/n0oGSAb72tcNB2k_pvGAwJF4ERKoO9g8FxYJBwSp3tC3RJcmLLkS6nu5hTMB6V7RAgSceyvn09sXRRQtoxV4cTNw383BSvf1yS68mvJKdQ=s0-d-e1-ft#https://faenet.org/images/easysocial_override/email_logo.png"/>
		`
		,
		tags: { isRead: false, isStared: false , isSent: false},
		sentAt: 1550133000094,
		id: null,
	},
	{
		subject: 'Primavera Sound 2021 -15%',
		from: '‫PrimaveraSound@primavera.org‬',
		body: `
			Tal y como te informamos en el correo que te enviamos el 27 de mayo, si en 2021 decides seguir formando parte de la grandísima familia de Primavera Sound, aquí tienes a tu disposición un código de descuento del 15% en el precio de la nueva entrada que desees adquirir como parte de tus beneficios por conservar tu ticket.
			<br>
			As we informed you by e-mail on May 27th, if you want to continue being part of the Primavera Sound's great family in 2021, here is a discount code to give you 15% off the price of your new ticket purchase as part of your advantages for keeping your ticket.
			<br>
			Tu(s) código(s):
			Your code(s):
			<br>
			6VN36EV / CV6LBZU 
			<br>			
			Este es el link donde adquirir tu entrada con descuento 
			<br>
			Follow this link to buy your discounted ticket 
			<br>
			El código de descuento es de UN SOLO USO. Podrás hacer uso propio de este código, o compartirlo con quien quieras. En todo caso, recomendamos no publicar tu código de descuento en redes sociales y guardarlo fuera del alcance de terceras personas no deseadas. La utilización del descuento del 15% se condiciona a mantener tus entradas originalmente adquiridas para el Festival Primavera Sound 2020, que serán válidas para sus nuevas fechas en 2021.
			<br>
			The discount code is for ONE USE ONLY. You can use this code yourself or share it with whoever you want. But we recommend that you don’t post your discount code on social networks and that you keep it out of the the reach of any unwanted third parties.The use of the 15% discount is conditional on maintaining the tickets originally purchased for the Primavera Sound 2020 Festival, which will be valid for its new dates in 2021.
			<br>
			Gracias por elegir bailar junto a nosotros en Primavera Sound 2021. Can’t Do without You. 
			<br>
			Thank you for choosing to dance along with us at Primavera Sound 2021. Can’t Do without You.
		`
		,
		tags: { isRead: true, isStared: true , isSent: false},
		sentAt: 1550133000094,
		id: null,
	},
	{
		subject: 'Your Reservation',
		from: 'MoonRestaurant@gmail.com',
		body: `
		At most full service restaurants, your customers usually have two options: make a reservation to secure a spot in advance or show up in hopes they’ll snag an open table. For restaurant owners and managers, managing the mix between reservations and walk-ins can be challenging.
		<br>
		<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Freserved-table-colored-vector-illustration-vector-id494158304%3Fs%3D170x170&f=1&nofb=1"/>
		`,
		tags: { isRead: true, isStared: false , isSent: false},
		sentAt: 1502133930594,
		id: null,
	},
	{
		subject: 'Get back to your projects',
		from: 'Avocode@avocode.com',
		body: `Hello Idov,
		Your free trial expired a week ago, and we already miss you. 💔
		<br>
		Your projects, designs, and share links have been automatically locked. The good news is you can still get them back.
		<br>
		Purchase a subscription within 7 days to unlock your projects.
		<br>
		`,
		tags: { isRead: true, isStared: false , isSent: false},
		sentAt: 1503133930594,
		id: null,
	},
	{
		subject: 'Slack 101: Kicking off a new project?',
		from: 'Slack@email.slackhq.com',
		body: `
		Set the stage for your team to get work done
		Bring the right people and information together, so you can share ideas, make decisions, and move work forward.
		Dive into Slack 101 and learn how to:
		•	Keep channels organized and discoverable with naming conventions
		•	Pin files to channels
		•	Invite your team to channels
		<br>
		<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.techlegends.in%2Fwp-content%2Fuploads%2F2019%2F09%2Fslack-icon.png&f=1&nofb=1"/>
		`,
		tags: { isRead: true, isStared: false , isSent: false},
		sentAt: 1506133930594,
		id: null,
	},
	{
		subject: 'Imagine',
		from: 'Sponge@bob.com',
		body: `
		You are a great friend, here's a reminder
		<br>
		<img src="https://media1.giphy.com/media/SKGo6OYe24EBG/giphy.gif?cid=ecf05e476bc17bf1bbf31705208d999c526ef5437c50e796&rid=giphy.gif"/>
		`,
		tags: { isRead: false, isStared: false , isSent: false},
		sentAt: 1411133930594,
		id: null,
	},
	{
		subject: 'How Are You',
		from: 'SecretLover@gmail.com',
		body: 'Hello love ,I loved you even before I met you in person. Once I laid eyes on you, that love grew by infinite measure.',
		tags: { isRead: false, isStared: false , isSent: false},
		sentAt: 1350133930594,
		id: null,
	},
	{
		subject: 'How Are You',
		from: 'SecretLover@gmail.com',
		body: 'Hello love ,I loved you even before I met you in person. Once I laid eyes on you, that love grew by infinite measure.',
		tags: { isRead: false, isStared: false , isSent: false},
		sentAt: 1351103930594,
		id: null,
	},
	{
		subject: 'How Are You',
		from: 'SecretLover@gmail.com',
		body: 'Hello love ,I loved you even before I met you in person. Once I laid eyes on you, that love grew by infinite measure.',
		tags: { isRead: true, isStared: true , isSent: false},
		sentAt: 1301133930594,
		id: null,
	},
	{
		subject: 'How Are You',
		from: 'SecretLover@gmail.com',
		body: 'Hello love ,I loved you even before I met you in person. Once I laid eyes on you, that love grew by infinite measure.',
		tags: { isRead: false, isStared: false , isSent: false},
		sentAt: 1251103930594,
		id: null,
	},
	{
		subject: 'it\'s your partner',
		from: 'Idov@gmail.com',
		body: 'I had such a great time working together, you are a realy good programmer',
		tags: { isRead: false, isStared: false , isSent: true},
		sentAt: 1251103930594,
		id: null,
	},
	{
		subject: 'it\'s your partner',
		from: 'Asaf@gmail.com',
		body: 'I had such a great time working together, you are a realy good programmer',
		tags: { isRead: false, isStared: false , isSent: true},
		sentAt: 1251103930594,
		id: null,
	},

];
let gEmails = null;
let gDraftsEmails= null;
let gDeletedEmails= null;

export const emailService = {
    getEmails,
	updateEmail,
	deleteEmails,
	updateEmails,
	getById,
	sendEmail,
};

function getEmails() {
	gEmails = Utils.loadFromStorage(STORE_KEY);
	gEmails = (!gEmails) ? addIdTo(gFakeEmails.slice()) : gEmails;
	Utils.storeToStorage(STORE_KEY, gEmails);
	return Promise.resolve(gEmails);
}
function addIdTo(fakeMails) {
	return fakeMails.map((mail) => {
		let mailWithId = { ...mail };
		mailWithId.id = Utils.getRandomId();
		return mailWithId;
	});
}
function getById(emailId) {
	if (!gEmails) getEmails()
	const email = gEmails.find(email => email.id === emailId)
	return Promise.resolve(email)
}

function sendEmail(to,email){
	if (to==='To: me@myself.com'){
		getEmails()
		email.id = Utils.getRandomId()
		email.sentAt = Date.now()
		gEmails.unshift(email)
		Utils.storeToStorage(STORE_KEY, gEmails);
	}
	return Promise.resolve('sent')
}

function findIndexById(id){
return gEmails.findIndex((email) => email.id === id)
}
function updateEmail(emailId,tags) {
	const idx = findIndexById(emailId);
	// gEmails.splice(idx, 1, emailId);
	gEmails[idx].tags = tags;
	Utils.storeToStorage(STORE_KEY, gEmails);
}

function updateEmails(tag, state, checkedEmailsIds) {
	checkedEmailsIds.forEach((checkedEmailId) => {
		const idx = findIndexById(checkedEmailId)
		gEmails[idx].tags[tag] = state;
		Utils.storeToStorage(STORE_KEY, gEmails);
	});
}
function deleteEmails(checkedEmails) {
	checkedEmails.forEach((checkedMail) => {
		const idx = findIndexById(checkedMail.id)
		gEmails.splice(idx, 1);
	});
	Utils.storeToStorage(STORE_KEY, gEmails);
}

