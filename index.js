
// let buttons = document.querySelectorAll('nav a')
// let contents = document.querySelectorAll('.content')


// buttons.forEach(btn => {
// 	btn.onclick = () => {
// 		contents.forEach(page => {
// 			if (page.id === btn.getAttribute('data-p')) {
// 				contents.forEach(el => el.classList.remove('activePage'))
// 				page.classList.add('activePage')
// 			}
// 		})
// 	}
// })


let buttons = document.querySelectorAll('.btns')
let contents = document.querySelectorAll('.content')

console.log(buttons);
buttons.forEach(btn => {
	btn.onclick = () => {
		contents.forEach(page => {
			if (page.id === btn.getAttribute('data-p')) {
				contents.forEach(el => el.classList.remove('activePage'))
				setTimeout(() => {
                    page.classList.add('activePage') 
                }, 500);
			}
		})
	}
})
