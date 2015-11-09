//turning image gray
//sets the pixel values equal to each other which makes gray


image = new SimpleImage("flowers.jpg");
for (pixel: image) {
  avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
  
  pixel.setRed(avg);
  pixel.setGreen(avg);
  pixel.setBlue(avg);
  
}
print(image);