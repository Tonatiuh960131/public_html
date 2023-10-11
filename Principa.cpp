#include "Ordenador.h"
#include<iostream>
#include<string>
using namespace std;



	 void imprimir(int array[]) {
		for (int i = 0; i < sizeof(array); i++) {
			cout << " " << array[i] << endl;
		}
	}


int main() {
	int array[] = { 8,3,6,1,6,9,5 };
     	cout << "Array original" << endl;
		imprimir(array);

		cout << "Array con Quitsort" << endl;
		Ordenador orden(array, 0, 6);
		imprimir(array);

}
