/**
 *  Comandos padrão que serão executados por todos repository
 */
export default interface IBaseRepository<T> {
    /**
     * Verifica se existe alguma ocorrência do registro no BD e retorna
     * @param t - Instancia do model que irá ser utilizado para achar o registro
     */
    exists(t: T): Promise<T|null>;
    delete(id: string): Promise<T |null>;
    getById(id: string): Promise<T |null>;
    save(t: T): Promise<T | null>;
    errorMessage:string
  }
