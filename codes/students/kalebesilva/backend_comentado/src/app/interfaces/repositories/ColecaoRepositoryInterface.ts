import ColecaoEntity from "../../entities/ColecaoEntity";
import ColecaoInterface from "../entities/ColecaoInterface";

/*Repository é onde contem as interfaces que possuem as funcoes que iremos usar para
interagir com o banco de dados, todas as classes que fizerem um acordo com ela, serao
obrigadas a implementar essas funcoes/métodos*/
export interface ColecaoRepositoryInterface {

  /*O primeiro método é o findAll, ele irá retornar uma colecao de objetos que tenham
  aqueles titulo*/
  findAll(titulo?: string): Promise<ColecaoEntity[]>;

   /*O segundo é o findById, ele irá retornar apenas um registro do banco de dados,
  para isso, usaremos  a ID para pesquisar*/
  findById(id: number): Promise<ColecaoEntity>;

  /*O terceiro método é par que possamos criar um novo registro no banco de dados, para 
  que isso seja possivel, é necessário que seja passado um objeto colecao, que deve ter caracteristicas
  da interface colecaoInterface*/
  create(colecao: ColecaoInterface): Promise<ColecaoEntity>;

   /*O quarto método é o de update, ele irá atualizar um registro em específico no  banco de dados,
  para que isso seja possivel, além de passar um obj colecao, devemos informar qual será a ID do obj que iremos 
  atualizar. */
  update(id: number, colecao: ColecaoInterface): Promise<ColecaoEntity>;

  /*O quinto método é o de delete, ele irá apagar do banco de dados um registro que contenha aquela determinda ID */
  delete(id: number): Promise<void>;

  /*O sexto método tem o objetivo de buscar apenas uma colecao em específico, para isso ela irá utilizar a ID como base
  para a pesqusisa. */
  getColecaoOnly(id: number): Promise<ColecaoEntity>
}