class Form{
    constructor(){
      this.input = createInput("Name");
      this.button = createButton('PLAY');
      this.greeting = createElement('h3');
    }
    hide(){
      this.input.hide();
      this.button.hide();
      this.greeting.hide(); 
    }
    
    display(){
        var title = createElement('h2');
        title.html("Racing Car");
        title.position(200,0);
        
        this.input.position(200,150);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        
        player.name= this.input.value();
        playerCount+=1;
        player.update();
        player.updateCount(playerCount);
        
        this.greeting.html("Hello "+name);
        this.greeting.position(150,200);
      });
    }
}