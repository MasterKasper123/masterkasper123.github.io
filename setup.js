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
const canvas = document.getElementById('canvas1');
const ctx1 = canvas.getContext('2d');
canvas.height = 50*vw;
canvas.width = 98*vw;

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas.getContext('2d');
canvas2.height = 600;
canvas2.width = 600;

const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas.getContext('2d');
canvas3.height = 600;
canvas3.width = 600;

const canvas4 = document.getElementById('canvas4');
const ctx4 = canvas.getContext('2d');
canvas4.height = 600;
canvas4.width = 600;

const canvas5 = document.getElementById('canvas5');
const ctx5 = canvas.getContext('2d');
canvas5.height = 600;
canvas5.width = 600;

// global variables
let keys = [];
let score = 0;
let frame = 0;
const particlesArray = [];
const maxParticles = 300;


console.log('Setup...');
console.log(vw(100));
console.log(vh(100));

