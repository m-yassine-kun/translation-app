import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-translator',
  templateUrl: './main-translator.component.html',
  styleUrls: ['./main-translator.component.css']
})
export class MainTranslatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//--------------------------------------------------------------------------
//   const encodedParams = new URLSearchParams();
//   encodedParams.append("q", "English is hard, but detectably so");

// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/x-www-form-urlencoded',
// 		'Accept-Encoding': 'application/gzip',
// 		'X-RapidAPI-Key': 'f191b88fb6mshf8ad3fb4f671f4ep1422d9jsna0a6d5de38b7',
// 		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
// 	},
// 	body: encodedParams
// };

// fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



//-------------------------- Basic:-----------------------------------------------------


// Implementation code where T is the returned data shape
// function api<T>(url: string): Promise<T> {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.statusText)
//       }
//       return response.json<T>()
//     })

// }

// // Consumer
// api<{ title: string; message: string }>('v1/posts/1')
//   .then(({ title, message }) => {
//     console.log(title, message)
//   })
//   .catch(error => {
//     /* show error message */
//   })

// //------------------------- Data transformations---------------------------------------------
// function api<T>(url: string): Promise<T> {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.statusText)
//       }
//       return response.json<{ data: T }>()
//     })
//     .then(data => { /* <-- data inferred as { data: T }*/
//       return data.data
//     })
// }

// // Consumer - consumer remains the same
// api<{ title: string; message: string }>('v1/posts/1')
//   .then(({ title, message }) => {
//     console.log(title, message)
//   })
//   .catch(error => {
//     /* show error message */
//   })

// //--------------------------------Error handling---------------------------------------------------
// function api<T>(url: string): Promise<T> {
//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.statusText)
//       }
//       return response.json<{ data: T }>()
//     })
//     .then(data => {
//       return data.data
//     })
//     .catch((error: Error) => {
//       externalErrorLogging.error(error) /* <-- made up logging service */
//       throw error /* <-- rethrow the error so consumer can still catch it */
//     })
// }

// // Consumer - consumer remains the same
// api<{ title: string; message: string }>('v1/posts/1')
//   .then(({ title, message }) => {
//     console.log(title, message)
//   })
//   .catch(error => {
//     /* show error message */
//   })

}
