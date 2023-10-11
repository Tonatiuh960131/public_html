#include<string>
class Ordenador
{

public:
	Ordenador(int array[],int izq, int der ) {
		quicksort(array, izq, der);
	
	   }
	
		void quicksort(int array [], int izq, int der) {
		int pivote = der;
		int i = izq;
		int j = der;
		while (i<j)
		{
			while (array [i]<=array[pivote] && i<j)
			{
				i++;
			}
			while (array[j] > array[pivote])
			{
				j--;
			}
			if (i < j) {
				cambiar(array, i, j);
			}
		}
		cambiar(array, pivote, j);
		    
		if (izq<j-1)
		{
			quicksort(array, izq, j - 1);

		}
		if (j+1<der)
		{
			quicksort(array,j+1, der);

		}
		

	}

	 void cambiar(int array[], int x, int y) {
		int aux = array[x];
		 array[x] = array[y];
		 array[y] = aux;

	}


};
