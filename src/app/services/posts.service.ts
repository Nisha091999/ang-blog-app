import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// import * as firebase from 'firebase';

// import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private afs: AngularFirestore ) { }

  loadFeatured(){

    return this.afs.collection('posts', ref => ref.where('isFeatured', '==', true).limit(4) ).snapshotChanges().pipe(
       map((actions: any[]) =>{
         return actions.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) =>{
 
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;
           return { id, data }
 
         })
       })
     ) 
   }

   loadLatest() {
    return this.afs.collection('posts', ref => ref.orderBy('createdAt') ).snapshotChanges().pipe(
      map((actions: any[]) =>{
        return actions.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) =>{

          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }

        })
      })
    ) 
   }

   loadCategoryPosts( categoryId: any ) {
    return this.afs.collection('posts', ref => ref.where('category.categoryId', '==',categoryId).limit(4) ).snapshotChanges().pipe(
      map((actions: any[]) =>{
        return actions.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) =>{

          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }

        })
      })
    ) 
   }

   loadOnePost( postId: any ) {
    return this.afs.doc(`posts/${postId}`).valueChanges();
   }

   loadSimilar( catId: any ) {
    return this.afs.collection('posts', ref => ref.where('category.categoryId', '==',catId).limit(4) ).snapshotChanges().pipe(
      map((actions: any[]) =>{
        return actions.map((a: { payload: { doc: { data: () => any; id: any; }; }; }) =>{

          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data }

        })
      })
    ) 
   }

   countViews( postId: any ) {

    const viewsCount = {
      views: firebase.firestore.FieldValue.increment(1)
    }

    this.afs.doc(`posts/${postId}`).update(viewsCount).then(()=> {
      console.log('Views Count Updated ..!');
      
    });

    }


}
