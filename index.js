let buttons = document.querySelectorAll('.btns')
let contents = document.querySelectorAll('.content')


console.log(buttons);
buttons.forEach(btn => {
	btn.onclick = () => {
		if(btn.getAttribute('data-p') === 'newsletter') {
			document.body.style.background = "rgb(40, 40, 40)"
		}
		contents.forEach(page => {
			if (page.id === btn.getAttribute('data-p')) {
				contents.forEach(el => el.classList.remove('activePage'))
				setTimeout(() => {
					page.classList.add('activePage')
// 					if (page.id === 'whatsnew') {
// open()

// console.log(page);
// 					}



				}, 10);
			}
		})
	}
})



// function open() {
window.addEventListener('DOMContentLoaded', () => {
	let pepsi = document.querySelector('.pepsi_top ')
	let pepsi2 = document.querySelector('.pepsi_bottom')
	let pepsiback = document.querySelector('.pepsi_back2')
	console.log(pepsiback);

	setTimeout(() => {
		pepsi.classList.add('pepsi_new')
		setTimeout(() => {
			pepsi2.classList.add('pepsi_new2')
			setTimeout(() => {
				pepsiback.classList.add('ps')
				setTimeout(() => {
					pepsiback.classList.remove('ps')
					// setTimeout(() => {
					// 	pepsi.classList.remove('pepsi_new')
					// 	setTimeout(() => {
					// 		pepsi2.classList.remove('pepsi_new2')
					// 	}, 50);
					// }, 1000);
				}, 800);
			}, 500);
		}, 50);
	}, 2000);
})

// }