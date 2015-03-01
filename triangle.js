class Triangle
{
  int x1, y1, x2, y2, x3, y3;
  float c1, c2, c3;
  
  Triangle(int a1, int b1, int a2, int b2, int a3, int b3)
  {
    x1 = a1;
    y1 = b1;
    x2 = a2;
    y2 = b2;
    x3 = a3;
    y3 = b3;
  }
  
  void updateX()
  {
    x1 = x1 + 100;
    x2 = x2 + 100;
    x3 = x3 + 100;
  }
  
  void updateY()
  {
    y1 = y1 + 100;
    y2 = y2 + 100;
    y3 = y3 + 100;
  }
  
  void resetX()
  {
    x1 = x1 - 500;
    x2 = x2 - 500;
    x3 = x3 - 500;
  }

  void updateCol()
  {
    c1 = random(0, 255);
    c2 = random(0, 255);
    c3 = random(0, 255);
  }
  
  void draw()
  {
    triangle(x1, y1, x2, y2, x3, y3);
  }
}
