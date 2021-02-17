const canvas = document.getElementById('pong');
const context = canvas.getContext("2d");

// context.fillStyle = "black";
// // position x, position y, largeur, hauteur
// context.fillRect(100,200,50,75);

// //Ball
// context.fillStyle = "red";
// context.beginPath();
// // x & y position, radius, start angle, end angle, direction
// context.arc(300, 350, 100, 0, Math.PI*2,false);
// context.closePath();
// context.fill();

// context.fillStyle = "green";
// context.beginPath();
// context.arc(300, 350, 100, 0, Math.PI*2, false);
// context.closePath();
// context.fill();


//Affiche un carre

function drawRect(x,y,w,h,color) {
    context.fillStyle = color;
    context.fillRect(x,y,w,h);
}



//Afficher un cercle
function drawCircle(x,y,r,color){
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, r, 0, Math.PI*2, false)
    context.closePath();
    context.fill();
}


// //Afficher du texte
// context.fillStyle = color;
// context.font = "75px fantasy";
// context.fillText(text, x, y);

//Afficher du texte
function drawText(text, x, y, color) {
        context.fillStyle = color;
        context.font = "45px fantasy";
        context.fillText(text, x, y);
    }
    
    
    // Deplacement de la raquette

    // let rectX = 0;
    // function render(){
        //     drawRect(0, 0, 600, 400, "black");
        //     drawRect(rectX, 100, 100, 100, "red");
        //     rectX = rectX + 100;
        // }
        // setInterval(render,1000);



        
        // // Positionnement raquette user et ordinateur
        const user = {
            x : 10,
            y : canvas.height/2 - 100/2,
            width: 15,
            height: 100,
            color : "WHITE",
            score : 0
        }
        
        
        const com = {
            x : canvas.width - 10,
            y : canvas.height/2 - 100/2,
            width: -15,
            height: 100,
            color : "white",
            score : 0
        }
        
        // drawRect(user.x, user.y, user.width, user.height, user.color);
        // drawRect(com.x, com.y, com.width, com.height, com.color);
        


        // Trait de separation
        const net = {
            x : canvas.width/2,
            y : 0,
            width : 2,
            height : 10,
            color : "YELLOW"
        }
        function drawNet(){
            
            for(let i = 0; i <= canvas.height; i+=15){
                drawRect(net.x, net.y + i, net.width, net.height, net.color);
            }
        }
      
        
        
        
        const ball = {
            x: canvas.width/2,
            y: canvas.height/2,
            radius: 10,
            color: "WHITE"
        }
        
      

        function render(){
            drawRect(5,5,canvas.width,canvas.height,"black");
            drawText(user.score,canvas.width/4,canvas.height/5,"white");
            drawText(user.score,3*canvas.width/4,canvas.height/5,"white");
            drawNet();
            drawRect(user.x,user.y, user.width,user.height,user.color);
            drawRect(com.x, com.y, com.width, com.height,com.color);
            drawCircle(ball.x, ball.y,ball.radius,ball.color);
        }

        function game(){

            render()
        }

        game()
        
        
        
        
        
       // https://www.youtube.com/watch?v=nl0KXCa5pJk 