// import DataTable from 'react-data-table-component';
// import ArrowDownward from '@material-ui/icons/ArrowDownward';
// import {GET,DELETE} from '../../Api/Axios'
// import { useEffect,useState} from 'react';


// const [Client,SetClient]=useState([])
// useEffect(()=>{
//     GET('client').then(res=>{
//       SetClient(res.data)
//       console.log(res.data)
//     })
//   }, [])
// const data = [
//     Client.map((client)=>{
//      {
//          name:client.fullname,
//          Tele:client.tele,
//          CIN:client.CIN,
//      },
//  }) ,
//  ]

// export default function MyComponent() {
//     const columns = [
//         {
//             name: 'Full Name',
//             selector: row => row.name,
//         },
//         {
//             name: 'CIN',
//             selector: row => row.CIN,
//         },
//         {
//             name: 'Téléphone',
//             selector: row => row.Tele,
//         },
//         {
//             name: 'Operation',
//             selector: row => row.Operation,
//         },
//     ];

//     return (
//         <DataTable
//             columns={columns}
//             data={data}
//             pagination
//         />
//     );
// };