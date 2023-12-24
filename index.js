let wrapper = document.querySelector('.wrapper')
let question = document.querySelector('.question')
let gif = document.querySelector('.gif')
let yesBtn = document.querySelector('.yes-btn')
let noBtn = document.querySelector('.no-btn')

yesBtn.addEventListener('click' , () => {
    question.innerHTML = 'Fr?? I like you too ;)'
    gif.src = 
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp"
})

noBtn.addEventListener('mouseover', () => {
    let noBtnRect = noBtn.getBoundingClientRect()
    let maxX = window.innerWidth - noBtnRect.width
    let maxY = window.innerHeight - noBtnRect.height

    let randomX = Math.floor(Math.random() * maxX)
    let randomY = Math.floor(Math.random() * maxY)

    noBtn.style.left = randomX + 'px'
    noBtn.style.top = randomY + 'px'
    
})



// MIT License

// Copyright (c) 2023 Dzarel Developer 

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.