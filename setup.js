alert('SETUP')
console.log('Setup...');
//functions
function vh(percent) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
  }
  
  function vw(percent) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
  }

//canvas declarations
const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
canvas1.width = 1000;
canvas1.height = 500;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
canvas2.width = 1000;
canvas2.height = 500;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d');
canvas3.width = 1000;
canvas3.height = 500;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas4.getContext('2d');
canvas4.width = 1000;
canvas4.height = 500;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas5.getContext('2d');
canvas5.width = 1000;
canvas5.height = 500;

// global variables
let keys = [];
let score = 0;
let frame = 0;
const particlesArray = [];
const maxParticles = 300;

console.log(vw(100));
console.log(vw(50));

