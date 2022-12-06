// const { defineConfig } = require('@vue/cli-service')
// const {name}=require('./package')
// module.exports = defineConfig({
//   transpileDependencies: true,

//   configureWebpack:{
//     devServer:{
//       port:3000,
//       headers:{
//               'Access-Control-Allow-Origin':'*'
//             },
//       disableHostCheck:true
//     },
//   }
  
  // configureWebpack:{
  //   output:{
  //     library:`${name}-[name]`,
  //     libraryTarget:'system',
  //    // jsonpFunction:`webpackJsonp_${name}`
  //   }
  // }
// })


// const {name}=require('./package')
module.exports={
  // publicPath:'',
  configureWebpack:{
  
    devServer:{
      port:3000,
      headers:{
        'Access-Control-Allow-Origin':'*'
      },
      // disableHostCheck:true
    },
    output:{
      libraryTarget:'system',
     
    },
    // output:{
    //   library:`${name}-[name]`,
    //   libraryTarget:'umd'
    // }
   
  },
  // output:{
  //   libraryTarget:'system',
  //   publicPath:''
  // },
}