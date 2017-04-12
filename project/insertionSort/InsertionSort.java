/**
 * Created by donghyunkim on 2017. 4. 6..
 */

import java.util.Random;

public class InsertionSort {

    public static void sort(int[] array) {
        int j = 0;

        for(int i = 1; i < array.length;i++){
            int num = array[i];
            for(j = 0; j < i ; j++){
                if(array[j] > num){
                    for(int k = i-1; k >= j;k--){
                        array[k+1] = array[k];
                    }
                    array[j] = num;
                    break;
                }
            }
        }
    }

    public static int[] generateIntArray(int size) {
        //how to shuffle
        int[] array = new int[size];
        for(int i = 1; i<= size ; i++){
            array[i-1] = i;
        }
        return array;
    }


    public static boolean isSorted(int[] array) {
        return false;
    }


    //배열을 무작위로 섞는다
    public static void shuffle(int[] array) {

        Random r  = new Random();
        for(int i = array.length-1; i >= 1; i--){
            int randomNum = r.nextInt(i);
            swap(array, i,randomNum);
        }


    }

    public static void printArray(int[] array) {
        System.out.print("[");
        for (int i: array) {
            System.out.printf(i + ", ");
        }
        System.out.println("]");
    }

    //swap two elements of indices
    public static void swap(int[] array, int idx1, int idx2) {
        int temp = 0;
        temp = array[idx1];
        array[idx1] = array[idx2];
        array[idx2] = temp;
    }

    //main
    public static void main(String[] args) {
        int[] arr = generateIntArray(20);
        printArray(arr);
        shuffle(arr);
        printArray(arr);
        sort(arr);
        printArray(arr);
        //sort(arr);

        //result
        if (isSorted(arr)) {
            System.out.println("Sorted Well");
            printArray(arr);
        } else {
            System.out.println("Something Wrong");
        }
    }
}