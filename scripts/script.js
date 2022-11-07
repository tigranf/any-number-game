// Confetti
var Confetti=function(){var t=function(){return function(){this.gravity=10,this.particle_count=75,this.particle_size=1,this.explosion_power=25,this.destroy_target=!0,this.fade=!1}}(),e=function(){function e(n){var r=this;if(this.bursts=[],this.setCount=function(t){if("number"!=typeof t)throw new Error("Input must be of type 'number'");e.CONFIG.particle_count=t},this.setPower=function(t){if("number"!=typeof t)throw new Error("Input must be of type 'number'");e.CONFIG.explosion_power=t},this.setSize=function(t){if("number"!=typeof t)throw new Error("Input must be of type 'number'");e.CONFIG.particle_size=t},this.setFade=function(t){if("boolean"!=typeof t)throw new Error("Input must be of type 'boolean'");e.CONFIG.fade=t},this.destroyTarget=function(t){if("boolean"!=typeof t)throw new Error("Input must be of type 'boolean'");e.CONFIG.destroy_target=t},this.setupCanvasContext=function(){if(!e.CTX){var t=document.createElement("canvas");e.CTX=t.getContext("2d"),t.width=2*window.innerWidth,t.height=2*window.innerHeight,t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="calc(100%)",t.style.height="calc(100%)",t.style.margin="0",t.style.padding="0",t.style.zIndex="999999999",t.style.pointerEvents="none",document.body.appendChild(t),window.addEventListener("resize",function(){t.width=2*window.innerWidth,t.height=2*window.innerHeight})}},this.setupElement=function(t){var n;r.element=document.getElementById(t),null===(n=r.element)||void 0===n||n.addEventListener("click",function(t){var n=new o(2*t.clientX,2*t.clientY);r.bursts.push(new i(n)),e.CONFIG.destroy_target&&(r.element.style.visibility="hidden")})},this.update=function(t){r.delta_time=(t-r.time)/1e3,r.time=t;for(var e=r.bursts.length-1;e>=0;e--)r.bursts[e].update(r.delta_time),0==r.bursts[e].particles.length&&r.bursts.splice(e,1);r.draw(),window.requestAnimationFrame(r.update)},!n)throw new Error("Missing id");e.CONFIG||(e.CONFIG=new t),this.time=(new Date).getTime(),this.delta_time=0,this.setupCanvasContext(),this.setupElement(n),window.requestAnimationFrame(this.update)}return e.prototype.draw=function(){s.clearScreen();for(var t=0,e=this.bursts;t<e.length;t++){e[t].draw()}},e}(),i=function(){function t(t){this.particles=[];for(var i=0;i<e.CONFIG.particle_count;i++)this.particles.push(new n(t))}return t.prototype.update=function(t){for(var e=this.particles.length-1;e>=0;e--)this.particles[e].update(t),this.particles[e].checkBounds()&&this.particles.splice(e,1)},t.prototype.draw=function(){for(var t=this.particles.length-1;t>=0;t--)this.particles[t].draw()},t}(),n=function(){function t(t){this.size=new o((16*Math.random()+4)*e.CONFIG.particle_size,(4*Math.random()+4)*e.CONFIG.particle_size),this.position=new o(t.x-this.size.x/2,t.y-this.size.y/2),this.velocity=r.generateVelocity(),this.rotation=360*Math.random(),this.rotation_speed=10*(Math.random()-.5),this.hue=360*Math.random(),this.opacity=100,this.lifetime=Math.random()+.25}return t.prototype.update=function(t){this.velocity.y+=e.CONFIG.gravity*(this.size.y/(10*e.CONFIG.particle_size))*t,this.velocity.x+=25*(Math.random()-.5)*t,this.velocity.y*=.98,this.velocity.x*=.98,this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.rotation+=this.rotation_speed,e.CONFIG.fade&&(this.opacity-=this.lifetime)},t.prototype.checkBounds=function(){return this.position.y-2*this.size.x>2*window.innerHeight},t.prototype.draw=function(){s.drawRectangle(this.position,this.size,this.rotation,this.hue,this.opacity)},t}(),o=function(){return function(t,e){this.x=t||0,this.y=e||0}}(),r=function(){function t(){}return t.generateVelocity=function(){var t=Math.random()-.5,i=Math.random()-.7,n=Math.sqrt(t*t+i*i);return i/=n,new o((t/=n)*(Math.random()*e.CONFIG.explosion_power),i*(Math.random()*e.CONFIG.explosion_power))},t}(),s=function(){function t(){}return t.clearScreen=function(){e.CTX&&e.CTX.clearRect(0,0,2*window.innerWidth,2*window.innerHeight)},t.drawRectangle=function(t,i,n,o,r){e.CTX&&(e.CTX.save(),e.CTX.beginPath(),e.CTX.translate(t.x+i.x/2,t.y+i.y/2),e.CTX.rotate(n*Math.PI/180),e.CTX.rect(-i.x/2,-i.y/2,i.x,i.y),e.CTX.fillStyle="hsla("+o+"deg, 90%, 65%, "+r+"%)",e.CTX.fill(),e.CTX.restore())},t}();return e}();

// * Variables
const dropdownBtn = document.querySelector('.dropdown-button');
const rules = document.querySelector('.rules');

const draggables = document.querySelectorAll('.draggable');
const containers = document.querySelectorAll('.dropzone');
const labels = document.querySelectorAll('.label.row');
const label1 = document.querySelector('#label-1');
const label2 = document.querySelector('#label-2');
const label3 = document.querySelector('#label-3');

const dropzone1 = document.querySelector('#drop-1');
const dropzone2 = document.querySelector('#drop-2');
const dropzone3 = document.querySelector('#drop-3');
const submitBtn = document.querySelector('#submitBtn');

const openModalButton = document.querySelector('[data-modal-target]');
const closeModalButton = document.querySelector('[data-close-button]');
const overlay = document.getElementById('overlay');
const modalBody = document.querySelector('.modal-body');

const cat1 = [
    {
        // index: 0,
        title: '2022 Crimson Honda Insight',
        img: 'https://www.kindpng.com/picc/m/91-919390_honda-civic-2016-png-transparent-png.png',
        category: 'Car',
        price: 25760
    },
    {
        // index: 3,
        title: '2022 Blue KIA Stinger',
        img: 'https://www.kindpng.com/picc/m/376-3767115_new-2019-kia-stinger-gt-kia-stinger-2019.png',
        category: 'Car',
        price: 51760
    },
    {
        // index: 6,
        title: '2022 White Toyota 4Runner',
        img: "https://www.kindpng.com/picc/m/471-4718270_4runner-toyota-4runner-2018-canada-hd-png-download.png",
        category: 'Car',
        price: 38705
    },
];
const cat2 = [
    {
        // index: 1,
        title: '55" UHD 4K Samsung Smart TV',
        img: 'https://www.kindpng.com/picc/m/175-1755353_samsung-tv-png-samsung-qled-tv-55-inch.png',
        category: 'TV',
        price: 469
    },
    {
        // index: 4,
        title: '15" ASUS ROG Gaming Laptop',
        img: 'https://www.kindpng.com/picc/m/45-450523_asus-gaming-laptop-png-transparent-png.png',
        category: 'PC',
        price: 980
    },
    {
        // index: 7,
        title: 'Google Pixel 6a Phone',
        img: 'https://www.kindpng.com/picc/m/8-85642_googles-android-enterprise-recommended-program-hd-png-download.png',
        category: 'Phone',
        price: 439
    },
];
const cat3 =[    
    {
        // index: 2,
        title: 'Free Money',
        img: './assets/cash.png',
        category: 'Cash',
        price: 40
    },    
    {
        // index: 5,
        title: 'Free Money',
        img: './assets/cash.png',
        category: 'Cash',
        price: 80
    },
    {
        // index: 8,
        title: 'Free Money',
        img: './assets/cash.png',
        category: 'Cash',
        price: 10
    },
];


// * Functions

function getDragAfterElement(container, mouseX) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = mouseX - box.left - box.width/1.618;
        // console.log(offset);
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
    window.location.href=window.location.href;
}


// * Event handlers

window.addEventListener("DOMContentLoaded", () => {
    let category1;
    let category2;
    let category3;
    let answer1;
    let answer2;
    let answer3;
    let answers = [];
    let differences = [];
    let prize;

    // check number of children in each dropzone & show submit button
    setInterval(() => {
        let dropped1 = document.querySelector('#drop-1').childElementCount;
        let dropped2 = document.querySelector('#drop-2').childElementCount;
        let dropped3 = document.querySelector('#drop-3').childElementCount;
        // console.log(dropped1, dropped2, dropped3);
        if (dropped1 == 5 && dropped2 == 3 && dropped3 == 2) {
            openModalButton.classList.remove('hidden');
        }
    }, 1000);

    // populate labels on page load
    for(let i=0; i<labels.length; i++) {
        let rng = Math.floor(Math.random()*3);
        if (i == 0) {
            labels[i].innerText = cat1[rng].category.toUpperCase();
            category1 = cat1[rng];
            answer1 = category1.price;
            document.querySelector('#tip1').innerText = `$  ${answer1.toString().replace(/(\d)\d*(\d)\d/g, '$1 🟦 🟦 $2 🟦')}`;
            console.log(answer1);
        } else if (i == 1) {
            labels[i].innerText = cat2[rng].category.toUpperCase();
            category2 = cat2[rng];
            answer2 = category2.price;
            document.querySelector('#tip2').innerText = `$  ${answer2.toString().replace(/(\d)\d\d/g, ' $1 🟦 🟦 ')}`;
            console.log(answer2);
        } else {
            labels[i].innerText = cat3[rng].category.toUpperCase();
            category3 = cat3[rng];
            answer3 = category3.price;
            document.querySelector('#tip3').innerText = `$  🟦 🟦 `;
            console.log(answer3);
        }
        // console.dir(labels[i]);
    }

    // game rules dropdown
    dropdownBtn.addEventListener("mouseenter", e => {
        setTimeout(() => {
            rules.classList.add('active');
        }, 70);
    });
    dropdownBtn.addEventListener("mouseleave", e => {
        rules.classList.remove('active');
    });

    // tooltip listener
    label1.addEventListener("mouseenter", e => {
        setTimeout(() => {
            document.querySelector('#tip1').classList.add('active');
        }, 70);
    });
    label1.addEventListener("mouseleave", e => {
        document.querySelector('#tip1').classList.remove('active');
    });
    label2.addEventListener("mouseenter", e => {
        setTimeout(() => {
            document.querySelector('#tip2').classList.add('active');
        }, 70);
    });
    label2.addEventListener("mouseleave", e => {
        document.querySelector('#tip2').classList.remove('active');
    });
    label3.addEventListener("mouseenter", e => {
        setTimeout(() => {
            document.querySelector('#tip3').classList.add('active');
        }, 70);
    });
    label3.addEventListener("mouseleave", e => {
        document.querySelector('#tip3').classList.remove('active');
    });
    
    // handles css changes for dragged elements
    for (let draggable of draggables) {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    }

    // handles appending draggable elements to drop containers
    for (let container of containers) {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            // console.log(container.childElementCount);

            const draggable = document.querySelector('.dragging');
            const afterElement = getDragAfterElement(container, e.clientX);
            // console.log(afterElement);
            if (afterElement == null && container.childElementCount < 5) {
                container.appendChild(draggable);                
            } else if(container.childElementCount <= 5){
                container.insertBefore(draggable, afterElement);
            }
        });
    }

    
    // submit logic handler
    submitBtn.addEventListener("click", () => {
        if(dropzone1.innerText.match(/\d/g) == null || dropzone2.innerText.match(/\d/g) == null || dropzone3.innerText.match(/\d/g) == null) return;
        let drop1 = dropzone1.innerText.match(/\d/g).reduce( (prevVal, current) => prevVal + current, '' );
        let drop2 = dropzone2.innerText.match(/\d/g).reduce( (prevVal, current) => prevVal + current, '' );
        let drop3 = dropzone3.innerText.match(/\d/g).reduce( (prevVal, current) => prevVal + current, '' );
        // console.log(drop1 + ` (${typeof drop1})`);
        // console.log(drop2 + ` (${typeof drop2})`);
        // console.log(drop3 + ` (${typeof drop3})`);
        let responses = [parseInt(drop1), parseInt(drop2), parseInt(drop3)];
        answers = [answer1, answer2, answer3];
        console.log('Answers     => ' + answers.toString());
        console.log('Responses   => ' + responses.toString());
        for(let i=0; i<responses.length; i++) {
            differences.push(Math.abs(responses[i] - answers[i]));
        }
        console.log('Differences => ' + differences.toString());
        let prizeIndex = differences.indexOf(Math.min(...differences));
        // console.log(prizeIndex);
        if (prizeIndex == 0) {
            prize = category1;
        } else if (prizeIndex == 1) {
            prize = category2;
        } else {
            prize = category3;
        }

        let image = document.createElement('img');
        image.src = prize.img;
        modalBody.innerHTML = `You Won The <span class="enhanced-blue">${prize.category}</span> !<br>Claim Your <span class="enhanced-red">${prize.title}</span> Now !!<br>Valued at <span class="enhanced-green">$${prize.price}</span> !!!`;
        modalBody.appendChild(image);
    });    

    // modal
    openModalButton.addEventListener('click', () => {
        const modal = document.querySelector(openModalButton.dataset.modalTarget);
        // console.log(modal);
        setTimeout(()=>openModal(modal), 900);
    });
    
    closeModalButton.addEventListener('click', () => {
        const modal = closeModalButton.closest('.modal');
        // console.log(modal);
        closeModal(modal);
    });

    overlay.addEventListener('click', () => {
        const modal = document.querySelector('.modal.active');
        closeModal(modal);
    });


    // Confetti
    // Pass in the id of an element
    let confetti = new Confetti('confetti');
    
    // Edit given parameters
    confetti.setCount(1000);
    confetti.setSize(2.5);
    confetti.setPower(175);
    confetti.setFade(false);
    confetti.destroyTarget(true);
});