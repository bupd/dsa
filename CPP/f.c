#include <stdio.h>

int main() {
  FILE *fptr;

  // Open a file in read mode
  fptr = fopen("filename.txt", "r");

  // Store the content of the file
  char myString[100];

  // Read the content and print it
  fgets(myString, 100, fptr);
    printf("%s", myString);
  

  // Close the file
  fclose(fptr);

  return 0;
}
