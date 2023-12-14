"use strict";
function Search(e) {
	alert('hello')
let elem = e.parentElement
let input = elem.querySelector("div");
let chatbot = elem.querySelector("textarea");
let headText = elem.parentElement.querySelector("h3").innerText
Load()


//input.value = ""


console.log(sendMessage(input))

}

function Goto(n) {
	let current = [n + nav_links.length] % nav_links.length;
	get(".nav2").scrollLeft = current * nav_links[0].offsetWidth;
}


function getGroup(selector) {
	return document.querySelectorAll(selector);
};
function get(selector) {
	return document.querySelector(selector);
};
function Load() {
	document.getElementById('loader').className = "active";

}

function hideLoader() {
	document.getElementById('loader').classList.remove("active");

}
function waitForMs(ms) {
	return new Promise(resolve => setTimeout(resolve,
		ms))
}



const API_KEY = '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';


async function getResponse(input) {
	let options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${API_KEY}`,
		},
		body: JSON.stringify({
			//model: 'text-davinci-003',
		//	message: [{
		//		role: "user",
		//		content: input
		//	}]
			messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ]
			//max_tokens: 60,
			//temperature: 0.2,
			// top_p: 1,
			// n: 1,
			// stop: '\n'
		})
	}


	try {
		let response = await fetch('https://api.openai.com/v1/engines/davinci/completions', options
		);
		let data = await response.json();
		console.log(data)
		return data.choices[0].message.content;
	} catch (err) {
		console.error(err)
	}

}






async function sendMessage(message) {

	try {

		let response = await getResponse(message);


		console.log(response)




		if (!response) {
			// chatbot.innerHTML = `<i class="profile robot"> &#129302</i>error occurred`;
			
			await waitForMs(500);
			hideLoader();
			return 'error occurred'


		} else {
			return response
			//chatbot.innerHTML = `<i class="profile robot"> &#129302</i> ${response}`;

		}

	} catch (err) {
		console.error( err)

		chatbot.innerHTML = `<i class="profile robot"> &#129302</i> ${err}`;
		waitForMs(500).then(() => {
			hideLoader()
		})

	}
}

window.onload = function () {
	let modalpage = get(".modalpage");

	function toggle(action) {




		if (modalpage.className !== "modalpage active" && action === "open") {

			modalpage.className = "modalpage active"
		} else {
			modalpage.className = "modalpage"
		}




	}


	let page1,
		page2,
		page3,
		page4;


	page1 = document.querySelector("main").innerHTML

	page2 = `<div class="analysis1"> <section>
	<h4>Market Size<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<section>
	<h4>Target Market<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<section>
	<h4>Target Audience<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>

	<section>
	<h4>Pain Points<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<section>
	<h4>Solution<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<section>
	<h4>Competitive Analysis<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<section>
	<h4>Competitive Advantage<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<group class="btn">
	<button id="next-page" value="update-next" class="upload">Update and Next</button>
	<button value="upload">Save and Exit</button>
	</group>

	</div>

	`;



	page3 = `<div class="analysis1"> <section>
	<h4>Products and Services<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<section>
	<h4>Pricing Strategy<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<section>
	<h4>Place/Distribution (Sales Plan)<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>

	<section>
	<h4>Promotion (Marketing Plan)<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<section>
	<h4>People<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<group class="btn">
	<button id="next-page" value="update-next" class="upload">Update and Next</button>
	<button value="upload">Save and Exit</button>
	</group>

	</div>

	`;


	page4 = `<div class="analysis1">
	<section>
	<h4>Projected Revenue<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>


	<section class="expenses">

	<section>
	<p class="tag"> Year-1expenses </p>
	<p class="amount">$1000</p>
	</section>
	<section>
	<p class="tag"> Year-2expenses </p>
	<p class="amount">$1200</p>
	</section>
	<section>
	<p class="tag"> Year-3expenses </p>
	<p class="amount">$1500</p>
	</section>

	</section>

	<section>
	<h4>Projected Expenses<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>
	<section class="expenses">

	<section>
	<p class="tag"> Year-1expenses </p>
	<p class="amount">$1000</p>
	</section>
	<section>
	<p class="tag"> Year-2expenses </p>
	<p class="amount">$1200</p>
	</section>
	<section>
	<p class="tag"> Year-3expenses </p>
	<p class="amount">$1500</p>
	</section>

	</section>
	<section>
	<h4>Projected Profit<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>

	<section class="expenses">

	<section>
	<p class="tag"> Year-1expenses </p>
	<p class="amount">$1000</p>
	</section>
	<section>
	<p class="tag"> Year-2expenses </p>
	<p class="amount">$1200</p>
	</section>
	<section>
	<p class="tag"> Year-3expenses </p>
	<p class="amount">$1500</p>
	</section>

	</section>

	<section>
	<h4>Funding needs<b></b> </h4>
	<div class="ask-ai">
	<textarea placeholder=""></textarea>
	</div>
	</section>


	<group class="btn">
	<button id="next-page" value="update-next" class="upload">Update and Next</button>
	<button value="upload">Save and Exit</button>
	</group>

	</div>`

	const pages = [page1,
		page2,
		page3,
		page4]


	/*const special_button = document.createElement("button");
	special_button.value = "Search";
	special_button.innerText = "Search";
	special_button.id = "special-btn";
*/
	let page_counter = 0;



	let nav_links = document.querySelectorAll(".nav2 button");
	nav_links.forEach((li, index) => {
		li.onclick = () => {
			page_counter = index
			NextPage(index)
		}
	})


	async function NextPage(index) {
		for (let i = 0; i < nav_links.length; i++) {
			nav_links[i].className = ""
		}
		await Load()

		await waitForMs(800).then(() => {
		  
			get("body").scrollIntoView(true)
			
			nav_links[index].className = "active"
			let userDisplay = get("main");
			userDisplay.innerHTML = pages[index]

			LoadFunctions()


			hideLoader()
		})

	}

	LoadFunctions()

	function LoadFunctions() {
		let help_section = get(".modalpage section");
		help_section.innerHTML = "";

		get(".icon").onclick = () => {
			toggle("close")
		}
		let section = getGroup("main .ask-ai")
		section.forEach(elem => {
			Assistant(elem.parentElement.querySelector("h4").innerText)

			let input = elem.querySelector("input");

			let chatbot = elem.querySelector("div");

			elem.parentElement.onclick = function (e) {


				if (e.offsetY <= 15) {

					toggle("open")

					modalpage.onmouseleave = function () {

						toggle("close")

					}
				}

			}

		})










		let nextpage_btn = get("#next-page")

		if (nextpage_btn) {
			nextpage_btn.onclick = async function () {
				page_counter = [page_counter + 1] % nav_links.length;
				await NextPage(page_counter)
				Goto(page_counter);

			}
		}



		let userDisplay = get("main #container");

		let div = getGroup("main .ask-ai")

		div.forEach(elem => {

			let input = elem.querySelector("input");
			let chatbot = elem.querySelector("textarea");
			// if (input) {
			// 	input.oninput = function () {

			// 		if (input.value.length >= 5) {
			// 			elem.appendChild(special_button)

			// 		} else {
			// 			if (elem.querySelector("#special-btn")) {
			// 				elem.removeChild(get("#special-btn"))
			// 			}
			// 		}
			// 	}

			// }

			
		})
		
	}


	

	function ReadMore(e) {
		let save;
		if (e.innerText.length > 100) {
			let c = document.createElement('p');

			c.className = "more";
			c.style.display = "none"
			save = e.innerText.slice(100);
			c.textContent = save

			e.innerHTML = e.innerText.slice(0, 100)
			e.innerText += "..."
			e.appendChild(c)
			e.onmouseover = function () {
				this.style.cursor = "pointer";
			}
			e.onclick = function () {

				if (e.querySelector('.more')) {
					let getMore = e.querySelector('.more').textContent
					e.innerText = e.innerText.slice(0, e.innerText.length - 3) + getMore;
					e.removeChild(div.querySelector('.more'))

				} else {

					let c = document.createElement('p');
					c.className = "more";
					save = e.innerText.slice(100);
					c.textContent = save
					e.innerText = e.innerText.slice(0, 100)
					e.innerText += "..."
					e.appendChild(c)
				}
			}
		}





	}

	async function Assistant(text) {


		let help_section = get(".modalpage section");

		let key = await Object.keys(INSTRUCTIONS)
		key.forEach((key) => {
			if (key.replaceAll("_", "").match(text.toLowerCase().replace("(i)", "").replace(/[\W\d_]/g, ''))) {


				let segment = `<article>
				<h3 class="">${text.replace("(i)", "")} prompt</h3>
				<div contenteditable="true"> ${INSTRUCTIONS[key].instruction}</div>
				<button onclick="Search(this)">Get ${text.replace("(i)", "")} ${(page_counter > 0) ? "Statement" : ""}</button>
				</article>`;

				help_section.innerHTML += segment


			}
		})
		
				
			
		let drop = getGroup('.modalpage article');
		drop.forEach(e => {
			let dropTag = e.querySelector('h3');
			dropTag.onclick = function () {

				this.parentElement.classList.toggle("active");
			}


		})

		get("#fetch").onclick = function () {
			if (this.innerText == "Expand Info") {
				this.innerText = "Collapse Info"
				getGroup(".modalpage article").forEach(e => {
					e.classList.add("active")
				})
			} else {
				this.innerText = "Expand Info"
				getGroup(".modalpage article").forEach(e => {
					e.classList.remove("active")
				})
			}
		}



	}
	async function Action(e) {
		hideLoader()
		let container = e.parentElement

		let key = await Object.keys(INSTRUCTIONS)
		key.forEach((key) => {
			if (key.replaceAll("_", "").match(container.innerText.toLowerCase().replace("(i)", "").replace(/[\W\d_]/g, ''))) {
				//container.parentElement.querySelector(".ask-ai input").focus()

				function func(content) {
					container.parentElement.querySelector(".ask-ai input").value = content;
					container.parentElement.querySelector(".ask-ai").appendChild(special_button)
				}

				Collect(INSTRUCTIONS[key].statement, INSTRUCTIONS[key].instruction, container.innerText.replace("(i)", ""), func)



			}
		})
	}
















	let modal = document.querySelector('.modal');
	let close = document.querySelector('.close');
	let ok = document.querySelector('.ok');
	close.addEventListener("click", collapse);
	ok.addEventListener("click", collapse);
	function collapse() {

		modal.className = "modal";
		document.body.style.overflowY = "scroll";
	}
	window.onkeyup = function (e) {
		if (e.keyCode === 13) {
			collapse();
		}
	}
	function Collect(guideline, user_text, tag, func) {
		hideLoader()
		let modal = get('.modal');
		let fieldname = get(".modal label b")
		let content = get('#modal-text');
		let statement = get('.modal .statement');






		content.focus();

		if (modal.className === "modal") {

			modal.className = "modal active";
			document.body.style.overflowY = "hidden";
			statement.innerHTML = guideline

			content.innerHTML = user_text;
			fieldname.innerText = tag

			setTimeout(() => {
				ReadMore(statement)
			}, 100)
		}
		// let obj = {};
		// modal.onclick = (evt) => {



		// 	if (evt.target.id == "ok") {
		// 		Load()
		// 		waitForMs(500).then(() => {
		// 			hideLoader()
		// 		})
		// 		func(content.innerHTML)
		// 		return "granted"

		// 	} else if (evt.target.id == "close") {

		// 		obj = {
		// 			permission: "denied",
		// 			formulated: ""
		// 		};

		// 	}
		// }

	}



}