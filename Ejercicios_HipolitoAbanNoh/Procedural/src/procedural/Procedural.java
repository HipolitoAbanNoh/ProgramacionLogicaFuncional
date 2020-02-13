package procedural;

import java.util.Scanner;

public class Procedural {

    public static void main(String[] args) {
        Scanner tec = new Scanner(System.in);
        int hrs, sueldo1, extras, sueldo2, comp, sueldo0;
        System.out.println("total a pagar por hora: 100, extras 200");
        System.out.println("Ingresa las horas trabajadas");
        hrs = tec.nextInt();
        if (hrs >= 1 && hrs <= 40) {
            sueldo1 = hrs * 100;
            System.out.println("Total a pagar: " + sueldo1);
        } else if (hrs > 40) {
            extras = hrs - 40;
            comp = extras * 200;
            sueldo0 = 40 * 100;
            sueldo2 = sueldo0 + comp;
            System.out.println("Horas normales trabajadas "+ 40 +" total a pagar : " + sueldo0);
            System.out.println("Horas extras trabajadas: " + extras + " total a pagar: " + comp);
            System.out.println("Total a pagar: " + sueldo2);
        } else {
            System.out.println("Error dato incorrecto");
        }
    }

}
