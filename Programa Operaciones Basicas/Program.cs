class operacion
{
    public void seleccion()
    {
         int opcion;
         int cantidad;

        Console.Clear();
        do
        {
            Console.Clear();
            Console.WriteLine("PROGRAMA OPERACIONES MATEMATICAS\n-------------\n[1] Suma\n[2] Resta\n[3] Salir\nSeleccione una operación: ");
            opcion = Convert.ToInt16(Console.ReadLine());

            switch (opcion)
            {
                case 1:
                        cantidad = cantidadoperaciones();
                        suma(cantidad);
                break; 

                case 2:
                        cantidad = cantidadoperaciones();
                        resta(cantidad);
                break;
                case 3:
                        Console.Clear();
                        Environment.Exit(1);
                break;

            }

        } while (opcion != 3);
        Console.ReadKey();



    }

    public int cantidadoperaciones()
    {
        Console.Clear();
        int cantidad_operaciones;
        Console.WriteLine("Inserte la cantidad de operaciones que desea realizar:");
        cantidad_operaciones = Convert.ToInt16(Console.ReadLine());
        return cantidad_operaciones;

    }

    public void Imprimir(int cantidad)
    {
        Console.WriteLine("\nTotal = {0}\n\n---PRESIONE ENTER PARA CONTINUAR---", cantidad);
        Console.ReadKey();
    }

    public void Reiniciar()
    {
        int opcion;
        Console.Clear();
        do
        {

            Console.WriteLine("¿Desea realizar otra operacion?\n[1] - Realizar otra operacion\n[2] - Salir");
            opcion = Convert.ToInt16(Console.ReadLine());

            switch (opcion)
            {
                case 1:
                        Console.Clear();
                        program.Main();
                break; 

                case 2:
                        Console.Clear();
                        Environment.Exit(0);
                break;

            }

            Console.Clear();

        } while (opcion != 2);

    }

    void suma(int cantidad_operaciones)
    {
        int suma = 0;
        int total = 0; 

        for (int i = 0; i < cantidad_operaciones; i++)
        {
            Console.Write("Numero {0} = +", i+1);
            suma = Convert.ToInt32(Console.ReadLine());
            total = total + suma;
        }

        Imprimir(total);
        Reiniciar();

    }

    void resta(int cantidad_operaciones)
    {
        int resta = 0;

        Console.Write("CANTIDAD INICIAL: ");
        int total = Convert.ToInt32(Console.ReadLine()); 

        for (int i = 0; i < cantidad_operaciones; i++)
        {
            Console.Write("Numero {0} = -", i+1);
            resta = Convert.ToInt32(Console.ReadLine());
            total = total - (resta);
        }

            Imprimir(total);
            Reiniciar();

    }

}

class program
{
    public static void Main()
    {
        operacion uno = new operacion();
        uno.seleccion();
    }
}