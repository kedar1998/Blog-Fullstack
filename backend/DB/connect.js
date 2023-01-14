import mongoose from 'mongoose'

const connect = (URL) =>{
    mongoose.connect(URL).then(() =>{
        console.log("DB Connected");
    })
}

export default connect