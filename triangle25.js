Triangle t1 = new Triangle(20, 65, 48, 10, 76, 65);

void setup()
{

  size(500, 500);
  
}

void draw()
{
  
  for(int j = 0; j < 5; j++)
  {
    for(int i = 0; i< 5; i++)
    {
      t1.updateCol();
      fill(t1.c1, t1.c2, t1.c3);
      t1.draw();
      t1.updateX();
    }
    
    t1.updateY();
    t1.resetX();
  }
  
  
  noLoop();

  
  
}
