package poo_2;

public class POO_2 {

    public static void main(String[] args) {
        Celular celular = new Celular();
        celular.setMarca("Motorola");
        celular.setModelo("moto e6 plus");
        celular.setColor("plateado");
        
        celular.llamar("Hipolito");
        celular.cortarLlamada();
        System.out.println();
        System.out.println("Caracteristicas del Smartphone");
        celular.informarCaracteristicas();
    }

}
