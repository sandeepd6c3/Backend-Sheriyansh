const Imagekit = require('@imagekit/nodejs')

const imagekit = new Imagekit({
    privateKey: "private_3l+pnhw0ohvaUAuuSrqNx2BI+TU="
})




async function  uploadFile(buffer){
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })

    return result
}


module.exports = uploadFile



















// const Imagekit = require('@imagekit/nodejs')
    

// const imagekit = new Imagekit ({
//     privateKey: process.env.IMAGEKIT_PRIVATEKEY,
// })

// async function uploadFile(buffer) {
    
 

    
//     const result  = await imagekit.files.upload({
//         file:buffer.toString("base64"),
//         fileName:"image.jpg"
//     })

//     return result
// }


// module.exports = uploadFile