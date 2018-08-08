import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../../negocio/libro';

/*
  Generated class for the LibroRestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LibroRestServiceProvider {

  constructor(public miservicio: HttpClient) {

  }

  // y devolvia vacio
  findAll(): Promise<Libro[]> {
    //invocavamos al get
    //tarde un segundo en ejecutar porque hace una peticion
    //ajax
    return this.miservicio
      .get<Libro[]>("http://localhost:3000/libros").toPromise();
  }



  insert(libro: Libro): Promise<Libro> {

    return this
      .miservicio
      .post("http://localhost:3000/libros", libro)
      .toPromise();
  }
  
  delete(libro: Libro): Promise<Libro> {

    return this.miservicio.delete<Libro>(`http://localhost:3000/libros/${libro.titulo}`).toPromise();
  }


  findOne(titulo: string): Promise<Libro> {

    return this.miservicio.get<Libro>(`http://localhost:3000/libros/${titulo}`).toPromise();
  }
}
