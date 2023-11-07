#include <iostream>
using namespace std;

int subs(int first, int second) {
  int sub = first - second;
  return sub;
}

int addNums(int first, int second) {
  int sum = first + second;
  std::cout << subs(first, second) << std::endl;
  cout << "potta null" << endl;
  cout << "hello \rlo \a" << endl;
  return sum;
}
// 90 99
int main () {
  cout << "hello bupd" << endl;
  int first;
  int second;

  cin >> first;
  cin >> second;
  std::cout << addNums(first, second) << std::endl;
  return 0;
}
